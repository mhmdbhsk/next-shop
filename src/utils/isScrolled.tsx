import { useEffect, useState } from 'react';

const isScrolled = () => {
  let offset = 0;

  useEffect(() => {
    window.onscroll = () => {
      offset = window.pageYOffset;
    };

    if (offset > 10) {
      return true;
    } else {
    }
  }, []);
};

export default isScrolled;
