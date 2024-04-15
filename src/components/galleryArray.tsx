import React from "react"

import GalleryImage from "./galleryImage"
import { galleryContainer } from "./galleryArray.module.css"

export default function GalleryArray({take}: {take: number | undefined} ) {
    let size = take ?? (GalleryImage({getLength: true}) as number) - 1;
    let index = 0;
    const imageRack: React.ReactNode[] = []
    
    while (index < size) {
        imageRack.push(<GalleryImage key={index} index={index} />)
        index++
    }
    
    return (
        <div className={galleryContainer}>
            {imageRack.map(image => image )}
        </div>
    );
}