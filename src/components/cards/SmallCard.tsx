import Image from 'next/image';
import { ReactNode } from 'react';

import { BookData } from '@/types/Book';
const StyledCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-grey group mb-[40px] overflow-hidden rounded-[20px] p-[20px] font-mono shadow-[0px_3px_16px_#2f536d1f] duration-[0.3s] ease-in-out hover:translate-y-[-10px] hover:duration-[0.4s]'>
      {children}
    </div>
  );
};
const StyledCardImage = ({ cover }: { cover: string }) => {
  return (
    <div className='relative mb-[21px] overflow-hidden rounded-[20px]'>
      <Image
        src={cover}
        alt='book img'
        width={100}
        height={50}
        className='w-full duration-[0.4s] group-hover:scale-[1.05] group-hover:object-cover'
      />
    </div>
  );
};
const StyledCardTitle = ({ title }: { title: string }) => {
  return (
    <div className='mb-2'>
      <h5 className='text-lightest-slate text-md overflow-hidden text-ellipsis whitespace-nowrap font-semibold  capitalize leading-[26px]'>
        {title}
      </h5>
    </div>
  );
};
const StyledAuthor = ({ author }: { author: string }) => {
  return (
    <div className='mb-[4px] flex flex-col'>
      <p className='text-lightest-slate text-sm'>Author</p>
      <span className='text-lightest-slate overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold capitalize leading-[26px]'>
        {author}
      </span>
    </div>
  );
};
export default function SmallCard({ bookData }: { bookData: BookData }) {
  return (
    <StyledCard>
      <StyledCardImage cover={bookData.cover.large} />
      <StyledCardTitle title={bookData.title} />
      <div className='mb-[16px]'>
        <span className='text-green text-xs italic'>
          Publish year: {bookData.publish_date}
        </span>
      </div>
      <StyledAuthor author={bookData.by_statement} />
    </StyledCard>
  );
}
