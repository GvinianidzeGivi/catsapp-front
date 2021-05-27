import React from 'react';

interface ImageType {
  src: string
}

const ImageComponent: React.FC<ImageType> = ({ src }) => {
  return <img src={src} alt="Avatar" style={{ width: "50%" }} />;
};

export default ImageComponent;
