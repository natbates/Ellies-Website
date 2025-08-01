import { REPO_OWNER, REPO_NAME } from "./upload-image";

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const fetchImages = async (imageType) => {
    try {
        if (!imageType) {
            console.error("Image type is required to fetch images");
            return [];
        }

        if (!TOKEN) {
            console.error("GitHub token is not set. Please check your environment variables.");
            return [];
        }

        // All images are in public/images, not subfolders
        const path = ``;
        const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;

        const res = await fetch(apiUrl, {
            headers: {
                Authorization: `token ${TOKEN}`,
                Accept: "application/vnd.github.v3+json"
            }
        });

        if (!res.ok) throw new Error("Failed to fetch images");
        const data = await res.json();

        // List of valid type prefixes
        const validTypes = ["weddings", "restaurants", "maternity", "private"];

        return data
            .filter(item =>
                item.type === "file" &&
                /\.(jpe?g|png|gif)$/i.test(item.name) &&
                (
                    imageType === "all"
                        ? validTypes.some(type => item.name.startsWith(`${type}_`))
                        : item.name.startsWith(`${imageType}_`)
                )
            )
            .map(item => item.download_url);
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};

export { fetchImages };