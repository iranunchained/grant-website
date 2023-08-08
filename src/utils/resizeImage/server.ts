import { maxFileSize, maxHeight, maxWidth, quality } from "./config";

import { Buffer } from "buffer";
import sharp from "sharp";

export const resizeImage = async (image: string) => {
  let [mimeType, imageData] = image.split(";");

  mimeType = mimeType.split(":")[1];
  imageData = imageData.split(",")[1];

  const resizedImage = await sharp(Buffer.from(imageData, "base64"))
    .resize(maxHeight, maxWidth)
    .jpeg({ quality })
    .toBuffer();

  const base64 = `data:${mimeType};base64,${resizedImage.toString("base64")}`;

  if (Buffer.from(base64).length > maxFileSize) {
    throw new Error("Image is too big");
  }

  return base64;
};
