import React, { useState, useRef, useEffect } from 'react';

const ImageWithSkeleton = ({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  width,
  height,
  loading = 'lazy',
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // If the image is already cached/completed by the browser
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth !== 0) {
        setIsLoaded(true);
      }
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#001a33] ${containerClassName}`} style={style}>
      {/* Animated Skeleton Shimmer (displayed until image is loaded) */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 skeleton-shimmer z-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full border-2 border-cyan-400/20 border-t-[#fac500] animate-spin" />
        </div>
      )}

      {/* Actual Image with smooth fade-in */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        className={`${className} transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
