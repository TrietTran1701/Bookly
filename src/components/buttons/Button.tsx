import React from 'react';

export function SmallButton({ children }: { children: React.ReactNode }) {
  return (
    <button className='custom-btn text-green rounded-default border-green leading-1 hover:shadow-green transform border-[1px] border-solid px-[1rem] py-[0.75rem] text-xs transition-all after:hidden hover:translate-x-[-4px] hover:translate-y-[-4px] hover:outline-none focus-visible:translate-x-[-4px] focus-visible:translate-y-[-4px] focus-visible:outline-none'>
      {children}
    </button>
  );
}

export function BigButton({ children }: { children: React.ReactNode }) {
  return (
    <button className='custom-btn text-green rounded-default border-green leading-1 hover:shadow-green transform border-[1px] border-solid px-[1.75rem] py-[1.25rem] text-xs transition-all after:hidden hover:translate-x-[-4px] hover:translate-y-[-4px] hover:outline-none focus-visible:translate-x-[-4px] focus-visible:translate-y-[-4px] focus-visible:outline-none'>
      {children}
    </button>
  );
}
