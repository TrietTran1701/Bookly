import React from 'react';

export function SmallButton({ children }: { children: React.ReactNode }) {
  return (
    <button className='text-green rounded-default border-green leading-1 hover:shadow-green hover:shadow-[4px 4px 0 0] focus-visible:shadow-[4px 4px 0 0] transform border-[1px] border-solid px-[1rem] py-[0.75rem] text-xs transition-all after:hidden'>
      {children}
    </button>
  );
}

export function BigButton() {
  return <div>Button</div>;
}
