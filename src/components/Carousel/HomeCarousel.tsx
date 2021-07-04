import React from 'react';
import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

interface CarouselProps {
  onClickHandler: () => void;
  isSelected: boolean;
  index: number;
  label: string;
}

const indicatorStyles = {
  background: '#fff',
  width: 8,
  height: 8,
  display: 'inline-block',
  margin: '0 4px',
  borderRadius: 6,
};

const Dot = (
  onClickHandler: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void,
  isSelected: boolean,
  index: number,
  label: string
) => {
  return (
    <li
      style={
        isSelected
          ? { ...indicatorStyles, background: '#53B175', width: 24 }
          : indicatorStyles
      }
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={
        isSelected ? `Selected: ${label} ${index + 1}` : `${label} ${index + 1}`
      }
      aria-label={
        isSelected ? `Selected: ${label} ${index + 1}` : `${label} ${index + 1}`
      }
    />
  );
};

const HomeCarousel = () => {
  return (
    <Box maxW="100%" maxH="120px" position="relative">
      <Carousel
        width="100%"
        showStatus={false}
        autoPlay
        interval={3000}
        infiniteLoop
        swipeable
        emulateTouch
        renderIndicator={Dot}
        showThumbs={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <Image
          src="/static/images/banner.png"
          width={444}
          height={140}
          alt="Banner"
          objectFit="fill"
        />
        <Image
          src="/static/images/banner.png"
          width={444}
          height={140}
          alt="Banner"
          objectFit="fill"
        />
      </Carousel>
    </Box>
  );
};

export default HomeCarousel;
