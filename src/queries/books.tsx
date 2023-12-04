import { useQuery } from '@tanstack/react-query';

import { bookService } from '@/services/BookService';

export function useGetAllBooks(isbns: string) {
  const { status, data, isLoading } = useQuery({
    queryKey: ['books', isbns],
    queryFn: () => {
      return bookService.getBooks(isbns);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
  return { status, data, isLoading };
}

export function useGetBookCover(isbn: string, size: string) {
  return useQuery({
    queryKey: ['books', isbn, size],
    queryFn: () => {
      return bookService.getBooksCover({ isbn, size });
    },
    refetchOnWindowFocus: false,
  });
}
