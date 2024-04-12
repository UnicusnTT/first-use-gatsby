import React from "react"

import { staticGalleryArray } from "./componentArrays"
import GalleryImage from "./galleryImage"
import { galleryContainer } from "./galleryArray.module.css"

export default function FullGallery(take: number | undefined = undefined) {
    let size = staticGalleryArray.length
    if (take && take < size) size = take
    let index = 0;
    const imageRack: React.ReactNode[] = []
    
    while (index < size) {
        imageRack.push(GalleryImage(index))
        index++
    }
    return (
        <div className={galleryContainer}>
            {imageRack.map(image => image )}
        </div>
    );
}