import React from "react"

import GalleryImage, { getGalleryLength } from "./galleryImage"
import { galleryContainer } from "./galleryArray.module.css"

export default function GalleryArray({take}: {take: number | undefined} ) {
    let imageCount = take ?? (getGalleryLength() - 1);
    
    if (isNaN(imageCount) || imageCount < 0) {
        throw new Error("Invalid image count");
    }

    const imageRack = Array.from({ length: imageCount }, (_, index) => (
        <GalleryImage key={index} index={index} />
    ))

    return (
        <div className={galleryContainer}>
            {imageRack}
        </div>
    );
}