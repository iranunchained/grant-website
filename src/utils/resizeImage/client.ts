import { maxFileSize, maxHeight, maxWidth, quality } from "./config";

import Resizer from "react-image-file-resizer";

const blobBase64 = (file: File | Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const resizeImage = async (image: File) =>
  new Promise<string>((resolve, reject) => {
    const onComplete = (blob: string | File | Blob | ProgressEvent<FileReader>) => {
      if (typeof blob === "string" || blob instanceof ProgressEvent) {
        return reject("Unexpected image type");
      }
      if (blob.size > maxFileSize) {
        return reject("Image is too big, please upload a smaller image.");
      }

      return blobBase64(blob).then(resolve, reject);
    };

    Resizer.imageFileResizer(image, maxHeight, maxWidth, "jpeg", quality, 0, onComplete, "blob");
  });
