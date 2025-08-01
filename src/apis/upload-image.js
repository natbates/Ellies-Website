import axios from "axios";

export const REPO_OWNER = "natbates"; 
export const REPO_NAME = "ElliesWebsiteImages"; 

const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64 = reader.result.split(",")[1]; // Remove the "data:*/*;base64," prefix
            resolve(base64);
        };
        reader.onerror = (error) => reject(error);
    });
};

const getFileSHA = async (fileName) => {
    try {
        const res = await axios.get(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${fileName}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                },
            }
        );
        return res.data.sha;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // File doesn't exist
            return null;
        }
    }
};

const handleUpload = async (image_type, file) => {

    const base64Content = await fileToBase64(file);
    const fileName = image_type + "_" + file.name;
    const existingSHA = await getFileSHA(fileName);

    const payload = {
        message: "Uploading file to GitHub",
        content: base64Content,
        ...(existingSHA && { sha: existingSHA }), // Include `sha` if file exists
    };

    try {
        const res = await axios.put(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${fileName}`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                },
            }
        );
        return res.data.content.download_url;
    } catch (error) {
        console.error("Error uploading to GitHub:", error);
        throw new Error("Error uploading file.");
    }
};


const handleMultipleUpload = async (imageType, files) => {
    const uploadedUrls = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
            const url = await handleUpload(imageType, file);
            uploadedUrls.push(url);
        } catch (error) {
            console.error("Error uploading file:", file.name);
        }
    }

    return uploadedUrls;
};


const deleteImage = async (fileNameOrUrl) => {

    let fileName = fileNameOrUrl;

    console.log("Deleting image:", fileNameOrUrl);

    // If it's a URL, extract the filename (e.g. maternity_uk.png)
    if (fileNameOrUrl.startsWith("http")) {
        // Remove any query params/fragments just in case
        fileName = fileNameOrUrl.split("/").pop().split("?")[0].split("#")[0];
    }

    console.log("Deleting file:", fileName);

    const existingSHA = await getFileSHA(fileName);
    if (!existingSHA) {
        console.log("File not found:", fileName);
        return;
    }

    console.log("Deleting file:", fileName);

    try {
        await axios.delete(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${fileName}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                },
                data: {
                    message: "Deleting file from GitHub",
                    sha: existingSHA,
                },
            }
        );
        console.log("File deleted successfully:", fileName);
        return true;
    } catch (error) {
        console.error("Error deleting file:", error);
        throw new Error("Error deleting file.");
    }
};

export { handleUpload, handleMultipleUpload, deleteImage };
