import Image from 'next/image';
import React from 'react';
export default function Logo() {
  return (
    <Image
      src='http://academic.online/static/media/AcademicOnlineLogo.5c0af0891420b2b650dd.png'
      alt='fireSpot'
      className='h-auto w-[150px]'
    />
  );
}
