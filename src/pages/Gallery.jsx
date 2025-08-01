import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import "../styles/Gallery.css";
import { handleMultipleUpload, deleteImage } from "../apis/upload-image.js";
import { fetchImages } from "../apis/fetch-images.js";
import { useNotification } from "../contexts/NotificationContext.jsx";
import { useTranslation } from "react-i18next";
import useInView from "../hooks/useInView";

const galleryTypes = [
    { key: "all", label: "All" },
    { key: "weddings", label: "Weddings" },
    { key: "restaurants", label: "Restaurants" },
    { key: "maternity", label: "Maternity" },
    { key: "private", label: "Private Events" }
];

const IMAGES_PER_PAGE = 26;

const Gallery = () => {
    const [selected, setSelected] = useState("all");
    const [page, setPage] = useState(1);
    const { user } = useAuth();
    const [uploading, setUploading] = useState(false);
    const { notify } = useNotification();
    const [error, setError] = useState(null);

    const [imageType, setImageType] = useState("");
    const [imageFiles, setImageFiles] = useState([]);

    // Store fetched images by category
    const [fetchedImages, setFetchedImages] = useState({
        weddings: null,
        restaurants: null,
        maternity: null,
        private: null
    });

    const { t } = useTranslation();
    const [loadingImages, setLoadingImages] = useState(false);

    // Animation hook
    const [ref, visible] = useInView({ threshold: 0.1 });

    // Fetch images for the selected category if not already fetched
    useEffect(() => {
        const fetchCategoryImages = async () => {
            if (selected === "all") {
                // Fetch all categories if any are missing
                for (const type of ["weddings", "restaurants", "maternity", "private"]) {
                    if (!fetchedImages[type]) {
                        const urls = await fetchImages(type);
                        setFetchedImages(prev => ({ ...prev, [type]: urls }));
                    }
                }
            } else if (!fetchedImages[selected]) {
                setLoadingImages(true);
                const urls = await fetchImages(selected);
                setFetchedImages(prev => ({ ...prev, [selected]: urls }));
            }
        };
        try {
            setLoadingImages(true);
            fetchCategoryImages();
        } catch (err) {
            console.error("Error fetching images:", err);
            setError("Failed to load images. Please try again later.");
            notify("Failed to load images. Please try again later.", "error");
        } finally {
            setLoadingImages(false);
        }
        // eslint-disable-next-line
    }, [selected]);

    // Combine all images if "all" is selected
    const images =
        selected === "all"
            ? [
                ...(fetchedImages.weddings || []),
                ...(fetchedImages.restaurants || []),
                ...(fetchedImages.maternity || []),
                ...(fetchedImages.private || [])
            ]
            : fetchedImages[selected] || [];

    const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
    const pagedImages = images.slice((page - 1) * IMAGES_PER_PAGE, page * IMAGES_PER_PAGE);

    const handleSelect = (type) => {
        setSelected(type);
        setPage(1);
    };

    const handleDeleteImage = async (image_type, imageUrl) => {
        if (!user) {
            alert("You must be logged in to delete images.");
            return;
        }

        try {
            const result = await deleteImage(imageUrl);

            if (result) {
                setFetchedImages(prev => ({
                    ...prev,
                    [image_type]: prev[image_type]
                        ? prev[image_type].filter(url => url !== imageUrl)
                        : null
                }));
                if (selected === "all") {
                    setFetchedImages(prev => {
                        const updated = { ...prev };
                        Object.keys(updated).forEach(type => {
                            if (updated[type]) {
                                updated[type] = updated[type].filter(url => url !== imageUrl);
                            }
                        });
                        return updated;
                    });
                }
                notify("Image deleted successfully.", "success");
                setError(null);
            } else {
                setError("Image deletion failed. Please try again.");
            }
        } catch (error) {
            notify("Failed to delete image. Please try again.", "error");
            setError("Failed to delete image. Please try again.");
        }
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            setImageFiles(files);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!user) {
            alert("You must be logged in to upload images.");
            return;
        }

        if (uploading || imageFiles.length === 0 || !imageType) return;
        setUploading(true);

        try {
            const addedUrls = await handleMultipleUpload(imageType, imageFiles);

            setFetchedImages(prev => ({
                ...prev,
                [imageType]: prev[imageType]
                    ? [...addedUrls, ...prev[imageType]]
                    : [...addedUrls]
            }));

            notify("Images uploaded successfully!", "success");
            setError(null);
        } catch (error) {
            notify("Failed to upload images. Please try again.", "error");
            setError("Failed to upload images. Please try again.");
        } finally {
            setImageFiles([]);
            setImageType("");
            setUploading(false);
        }
    };

    return (
        <div ref={ref} className={`gallery page fade-in${visible ? " visible" : ""}`}>
            <h1 className={`gallery-title gallery-anim${visible ? " gallery-anim-visible" : ""}`}>{t("gallery_title")}</h1>
            <p className={`gallery-intro gallery-anim${visible ? " gallery-anim-visible gallery-anim-delay-1" : ""}`}>{t("gallery_intro")}</p>
            
            {user && (
                <div className={`upload-images gallery-anim${visible ? " gallery-anim-visible gallery-anim-delay-2" : ""}`}>
                    <h2>{t("gallery_upload_title")}</h2>
                    <form className="upload-form" onSubmit={handleUpload}>
                        <div className="image-upload-container">
                            <label>
                                {t("gallery_select_type")}
                                <select name="imageType" required onChange={(e) => setImageType(e.target.value)} value={imageType}>
                                    <option value="">{t("gallery_select_type_placeholder")}</option>
                                    <option value="weddings">{t("gallery_type_weddings")}</option>
                                    <option value="restaurants">{t("gallery_type_restaurants")}</option>
                                    <option value="maternity">{t("gallery_type_maternity")}</option>
                                    <option value="private">{t("gallery_type_private")}</option>
                                </select>
                            </label>
                            <label>
                                {t("gallery_select_images")}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    name="images"
                                    multiple
                                    required
                                />
                            </label>
                        </div>
                        <div className="button-container push-left">
                            <button type="submit" disabled={uploading || !imageType || imageFiles.length === 0} className="upload-button">
                                {uploading ? t("gallery_uploading") : t("gallery_upload_button")}
                            </button>
                            <button type="button" onClick={() => { setImageFiles([]); setImageType(""); }} disabled={uploading || imageFiles.length === 0}>
                                {t("gallery_clear_button")}
                            </button>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                </div>
            )}
            
            <div className={`gallery-type-buttons gallery-anim${visible ? " gallery-anim-visible gallery-anim-delay-3" : ""}`} style={{ display: "flex", gap: 16, margin: "24px 0" }}>
                {galleryTypes.map(({ key, label }) => (
                    <button
                        key={key}
                        className={selected === key ? "active" : ""}
                        onClick={() => handleSelect(key)}
                        style={{
                            padding: "8px 18px",
                            border: selected === key ? "2px solid #aa8c28" : "1px solid #ccc",
                            background: selected === key ? "#f8f6ee" : "#fff",
                            cursor: "pointer"
                        }}
                    >
                        {t(`gallery_type_${key}`)}
                    </button>
                ))}
            </div>
            <div className={`gallery-grid gallery-anim${visible ? " gallery-anim-visible gallery-anim-delay-4" : ""}`}>
                {loadingImages ? (
                    <p>{t("gallery_loading")}</p>
                ) : pagedImages.length > 0 ? (
                    pagedImages.map((src, idx) => (
                        <div className="gallery-item" key={idx}>
                            <img src={src} alt={selected + " " + (idx + 1 + (page - 1) * IMAGES_PER_PAGE)} className="gallery-img" />
                            {user && (
                                <div className="gallery-item-actions">
                                    <button onClick={() => handleDeleteImage(selected, src)} className="delete-button">{t("gallery_delete_button")}</button>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>{t("gallery_no_images")}</p>
                )}
            </div>
            <div className={`gallery-pagination gallery-anim${visible ? " gallery-anim-visible gallery-anim-delay-5" : ""}`} style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 8 }}>
                {totalPages > 0 && <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    style={{ padding: "6px 14px", cursor: page === 1 ? "not-allowed" : "pointer" }}
                >
                    {t("gallery_prev")}
                </button>}
                {totalPages > 0 && Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={page === i + 1 ? "active" : ""}
                        style={{
                            padding: "6px 12px",
                            background: page === i + 1 ? "#f8f6ee" : "#fff",
                            border: page === i + 1 ? "2px solid #aa8c28" : "1px solid #ccc",
                            cursor: "pointer"
                        }}
                    >
                        {i + 1}
                    </button>
                ))}
                {totalPages > 0 && <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    style={{ padding: "6px 14px", cursor: page === totalPages ? "not-allowed" : "pointer" }}
                >
                    {t("gallery_next")}
                </button>}
            </div>
        </div>
    );
};

export default Gallery;