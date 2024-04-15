import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const altTexts: string[] = [
    "AI Girlfriend Emma Weber on a beach",
    "An eye-catching illustration of Lara Croft posing in the wilderness",
    "A half-dressed, buxom, forward-looking woman with an interested look",
    "A blonde and buxom beauty who knows exactly where she's directing your eyes"
]

export default function GalleryImage({
    index, getLength,
}: {
    index?: number, getLength?: true 
}): React.ReactNode | number | undefined {
    const staticGalleryArray: React.ReactNode[] = [
        <StaticImage
            alt={altTexts[0]}
            src="../images/aigirlbeach7.jpg"
        />
        ,
        <StaticImage
            alt={altTexts[1]}
            src= "../images/ail3-1.jpg"
        />,
        <StaticImage
            alt={altTexts[2]}
            src="../images/chikomoke-crop.png"
        />,
        <StaticImage
            alt={altTexts[3]}
            src="../images/F43vsPnaYAAgz6E.jpg"
        />,
    ]
    if (getLength !== undefined) {
        return staticGalleryArray.length;
    } else if (index !== undefined) {
        const image = staticGalleryArray[index];
        return image
    } else throw Error("You must either include an index or a getLength request!");
}