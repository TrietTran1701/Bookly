import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import ResultCard from '@/components/cards/ResultCard';
import LoadingWithText from '@/components/common/LoadingWithText';

import { useSearchBooks } from '@/queries/books';

import { SearchedBook } from '@/types/Book';
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

export default function SearchResult() {
  // const { data, isLoading } = useGetAllBooks(isbns);
  const pseudoValue = `01.`;
  const router = useRouter();
  const queryString = router.asPath.split('?')[1];
  const { data: booksData, isLoading } = useSearchBooks(queryString);
  return (
    <StyledAboutSection>
      <h2
        before-dynamic-value={pseudoValue}
        className='numbered-heading  before:content-[attr(before-dynamic-value)]'
      >
        Search Result
      </h2>
      {/* {isLoading && (
        <>
          <LoadingWithText />
        </>
      )} */}
      {isLoading ? (
        <>
          <LoadingWithText />
        </>
      ) : (
        <StyledCardsContainer>
          {/* {Object.entries(booksData).map(([isbn, bookData]) => (
            <SmallCard key={isbn} bookData={bookData} isbn={isbn} />
          ))} */}
          {booksData.docs.map((book: SearchedBook) => (
            <>
              <ResultCard book={book} />
            </>
          ))}
        </StyledCardsContainer>
      )}
    </StyledAboutSection>
  );
}
