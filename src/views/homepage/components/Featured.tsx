import React, { ReactNode } from 'react';

import SmallCard from '@/components/cards/SmallCard';
import LoadingWithText from '@/components/common/LoadingWithText';

import { useGetAllBooks } from '@/queries/books';

import { Books } from '@/types/Book';
const StyledAboutSection = ({ children }: { children: ReactNode }) => {
  return <section className='my-20 max-w-[900px]'>{children}</section>;
};

const StyledCardsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
      {children}
    </div>
  );
};

export default function Popular() {
  const isbns =
    'ISBN:0201558025,ISBN:9781506287751,ISBN:9780486691152,ISBN:9781416626992,ISBN:9780744082685, ISBN:9781975644031';

  const { data, isLoading } = useGetAllBooks(isbns);
  const booksData: Books = data || {}; // Ensure data is an object
  const pseudoValue = `01.`;

  return (
    <StyledAboutSection>
      <h2
        before-dynamic-value={pseudoValue}
        className='numbered-heading  before:content-[attr(before-dynamic-value)]'
      >
        Featured Books
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
    </StyledAboutSection>
  );
}
