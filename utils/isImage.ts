import { file } from "mocha";

export function isImage(ext: string): boolean {
    const imageExtensions = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "tiff",
        "tif",
        "svg",
    ];

    return imageExtensions.includes(ext);
}
