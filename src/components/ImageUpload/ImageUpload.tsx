import ImageUploading, { ImageUploadingPropsType } from "react-images-uploading";

import React from "react";
import { XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { maxFileSize } from "utils/resizeImage/config";

const defaultProps: Partial<ImageUploadingPropsType> = {
  acceptType: ["jpg", "png"],
  multiple: false,
  maxFileSize,
};

interface IImageUploadProps extends Pick<ImageUploadingPropsType, "value" | "onChange"> {
  isInvalid: boolean;
}

const ImageUpload: React.FC<IImageUploadProps> = ({ value, onChange, isInvalid }) => (
  <ImageUploading {...{ defaultProps, value, onChange }}>
    {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps, errors }) => (
      <div
        className={clsx(
          "flex justify-center px-6 pt-5 pb-6 mt-1 border-dashed cursor-pointer rounded-xl",
          imageList.length !== 0 && "border-2",
          isInvalid
            ? "border-red-500"
            : isDragging
            ? "border-primary-700"
            : "border-neutral-300 dark:border-neutral-6000",
        )}
        onClick={onImageUpload}
        {...dragProps}
      >
        {imageList.length !== 0 ? (
          imageList.map((image, index) => (
            <div key={index} className="relative">
              <div
                className="absolute p-1.5 bg-red-700 rounded-full top-2 right-2"
                onClick={(e) => {
                  e.stopPropagation();
                  onImageRemove(index);
                }}
              >
                <XIcon className="w-5 h-5" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={image.file?.name || ""}
                className="object-cover w-full max-w-2xl max-h-[500px] rounded-3xl"
                src={image.dataURL || ""}
              />
            </div>
          ))
        ) : (
          <div className={clsx("space-y-1 text-center", isDragging && "pointer-events-none")}>
            <svg
              aria-hidden="true"
              className="w-12 h-12 mx-auto text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
              <span className="relative mx-auto font-medium rounded-md cursor-pointer text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                Upload a file
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {defaultProps.acceptType?.map((fileType) => fileType.toUpperCase())?.join(", ")} up to{" "}
              {maxFileSize / 1024 ** 2}MB
            </p>
          </div>
        )}
        {errors?.maxNumber && <span>Selected file size exceed maxFileSize.</span>}
      </div>
    )}
  </ImageUploading>
);

export default ImageUpload;
