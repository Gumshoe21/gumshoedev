import NextImage from 'next/image';
import { chakra, ImageProps } from '@chakra-ui/react';

const Img = chakra(NextImage, {
  shouldForwardProps: (prop) => {
    return ['width', 'height', 'src', 'alt'].includes(prop);
  }
});

const Image = (ImageProps) => {
  return <Img {...ImageProps} />;
};

export default Image;
