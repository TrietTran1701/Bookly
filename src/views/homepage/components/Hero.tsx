import React, { ReactNode } from 'react';

import { BigButton } from '@/components/buttons/Button';

const StyledHeroSection = ({ children }: { children: ReactNode }) => (
  <section className='font-primary mt-10 flex flex-col items-start justify-center'>
    {children}
  </section>
);

export default function Hero() {
  return (
    <StyledHeroSection>
      <h2 className='big-heading text-lightest-slate font-semibold'>
        Expand Knowledge
      </h2>
      <h3 className='big-heading text-slate  mt-[5px] font-semibold leading-[0.9]'>
        By Reading Book
      </h3>
      <p className='font-calibre mt-[20px] max-w-[540px] text-[20px]'>
        Reading is the process of taking in the sense of letters symbols, etc,
        especially by sight or touch. Discover the{' '}
        <span className='text-green'>
          University for educators and researchers
        </span>
      </p>
      <div className='mt-5'>
        <BigButton>
          <p className='font-mono text-[14px]'>Explore our gallery!</p>
        </BigButton>
      </div>
    </StyledHeroSection>
  );
}
