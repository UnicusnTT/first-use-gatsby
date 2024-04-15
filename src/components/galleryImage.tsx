import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const staticGalleryArray: React.ReactNode[] = [
    <StaticImage
        alt="AI Girlfriend Emma Weber on a beach"
        src="../images/aigirlbeach7.jpg"
    />
    ,
    <StaticImage
        alt="An eye-catching illustration of Lara Croft posing in the wilderness"
        src="../images/ail3-1.jpg"
    />,
    <StaticImage
        alt="A half-dressed, buxom, forward-looking woman with an interested look"
        src="../images/chikomoke-crop.png"
    />,
    <StaticImage
        alt="A blonde and buxom beauty who knows exactly where she's directing your eyes"
        src="../images/F43vsPnaYAAgz6E.jpg"
    />,
]


export function getGalleryLength() {
    return staticGalleryArray.length;
}

export default function GalleryImage({
    index,
}: {
    index: number, 
}): React.ReactNode | undefined {
    if (index < 0 && index >= getGalleryLength()) {
        throw new Error(`Index can't be a negative number and must be smaller than ${getGalleryLength()}`);
    }
    const image = staticGalleryArray[index];
    return image
}