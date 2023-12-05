import { useRouter } from 'next/router';
import React from 'react';

export default function Logo() {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          router.push('/');
        }}
      >
        <h1 className='text-green pt-1 text-center text-[25px] font-bold'>
          Bookly
        </h1>
      </div>
    </>
  );
}
