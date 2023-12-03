import React, { ReactNode } from 'react';

import SmallCard from '@/components/cards/SmallCard';

import { useGetAllBooks } from '@/queries/books';

import { Books } from '@/types/Book';

const StyledAboutSection = ({ children }: { children: ReactNode }) => {
  return <section className='mt-20 max-w-[900px]'>{children}</section>;
};

const StyledCardsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3'>
      {children}
    </div>
  );
};

export default function Featured() {
  const isbns = 'ISBN:0201558025';

  const { data, isLoading } = useGetAllBooks(isbns);
  const booksData: Books = data as Books;

  return (
    <StyledAboutSection>
      <h2 className='numbered-heading'>Featured Books</h2>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <StyledCardsContainer>
          {Object.values(booksData).map((bookData) => (
            <SmallCard key={bookData.key} bookData={bookData} />
          ))}
        </StyledCardsContainer>
      )}
    </StyledAboutSection>
  );
}
