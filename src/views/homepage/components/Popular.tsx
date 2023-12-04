import React, { ReactNode } from 'react';

import { BigButton } from '@/components/buttons/Button';
import SmallCard from '@/components/cards/SmallCard';
import LoadingWithText from '@/components/common/LoadingWithText';

import { useGetAllBooks } from '@/queries/books';

import { Books } from '@/types/Book';
const StyledAboutSection = ({ children }: { children: ReactNode }) => {
  return <section className='my-20 max-w-[900px]'>{children}</section>;
};

const StyledCardsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3'>
      {children}
    </div>
  );
};

export default function Popular() {
  const isbns =
    'ISBN:9780545791434,ISBN:9780545790352,ISBN:9781847941848,ISBN:9780060935467,ISBN:9781975369774, ISBN:9780316452465';

  const { data, isLoading } = useGetAllBooks(isbns);
  const booksData: Books = data || {}; // Ensure data is an object
  const pseudoValue = `02.`;

  return (
    <StyledAboutSection>
      <h2
        before-dynamic-value={pseudoValue}
        className='numbered-heading  before:content-[attr(before-dynamic-value)]'
      >
        Popular Books
      </h2>
      {isLoading ? (
        <>
          <LoadingWithText />
        </>
      ) : (
        <StyledCardsContainer>
          {Object.entries(booksData).map(([isbn, bookData]) => (
            <SmallCard key={isbn} bookData={bookData} isbn={isbn} />
          ))}
        </StyledCardsContainer>
      )}
      <div className='flex w-full justify-center'>
        <BigButton>
          <p className='font-mono text-[14px]'>View all books</p>
        </BigButton>
      </div>
    </StyledAboutSection>
  );
}
