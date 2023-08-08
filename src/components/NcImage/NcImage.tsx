import NextImage, { ImageProps } from "next/image";
import React, { useEffect, useRef, useState } from "react";

import PlaceIcon from "./PlaceIcon";
import { checkInViewIntersectionObserver } from "utils";

export interface NcImageProps extends Partial<ImageProps> {
  containerClassName?: string;
}

const NcImage: React.FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  className = "object-cover w-full h-full",
  ...args
}) => {
  const _containerRef = useRef(null);
  let _imageEl: HTMLImageElement | null = null;

  const [__src, set__src] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current as any,
      options: {
        root: null,
        rootMargin: "0%",
        threshold: 0,
      },
      freezeOnceVisible: true,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      _handleImageLoaded();

      return true;
    }
    _imageEl = new Image();
    if (_imageEl) {
      _imageEl.src = src as any;
      _imageEl.addEventListener("load", _handleImageLoaded);
    }

    return true;
  };

  const _handleImageLoaded = () => {
    setImageLoaded(true);
    set__src(src as any);
  };

  useEffect(() => {
    _checkInViewPort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const renderLoadingPlaceholder = () => {
    return (
      <div
        className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`}
      >
        <div className="h-2/4 max-w-[50%]">
          <PlaceIcon />
        </div>
      </div>
    );
  };

  return (
    <div ref={_containerRef} className={`nc-NcImage ${containerClassName}`} data-nc-id="NcImage">
      {__src && imageLoaded ? (
        <NextImage
          alt={alt}
          className={className}
          src={__src}
          {...(!args.width ? { fill: true } : {})}
          {...args}
        />
      ) : (
        renderLoadingPlaceholder()
      )}
    </div>
  );
};

export default NcImage;
