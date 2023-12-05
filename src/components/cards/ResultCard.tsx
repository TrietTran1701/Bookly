import Image from 'next/image';
import React, { ReactNode } from 'react';

import { useGetBookCover } from '@/queries/books';

import { SearchedBook } from '@/types/Book';
const StyledCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-grey group mb-[40px] overflow-hidden rounded-[20px] p-[20px] font-mono shadow-[0px_3px_16px_#2f536d1f] duration-[0.3s] ease-in-out hover:translate-y-[-10px] hover:duration-[0.4s]'>
      {children}
    </div>
  );
};
const StyledCardImage = ({ isbnNumber }: { isbnNumber: string }) => {
  const size = 'L';
  const { data, isLoading } = useGetBookCover(isbnNumber, size);

  return (
    <div className='relative mb-[21px] overflow-hidden rounded-[20px]'>
      {isLoading ? (
        <>
          <div className='h-[300px] w-full animate-pulse bg-gray-400 duration-[0.4s] group-hover:scale-[1.05] group-hover:object-cover'></div>
        </>
      ) : (
        data && (
          <Image
            src={data}
            alt='book img'
            width={100}
            height={50}
            className='h-[300px] w-full duration-[0.4s] group-hover:scale-[1.05] group-hover:object-cover'
          />
        )
      )}
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

const StyledPublishDate = ({ publishDate }: { publishDate: string }) => {
  return (
    <div className='mb-[16px]'>
      <span className='text-green text-xs italic'>
        Publish year: {publishDate}
      </span>
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

export default function ResultCard({ book }: { book: SearchedBook }) {
  const isbnNumber = book.isbn && book.isbn.length > 0 ? book.isbn[0] : '';
  const publishDate =
    book.publish_date && book.publish_date.length > 0
      ? book.publish_date[0]
      : '';
  const author =
    book.author_name && book.author_name.length > 0 ? book.author_name[0] : '';
  return (
    <StyledCard>
      <StyledCardImage isbnNumber={isbnNumber} />
      <StyledCardTitle title={book.title} />
      <StyledPublishDate publishDate={publishDate} />
      <StyledAuthor author={author} />
    </StyledCard>
  );
}
