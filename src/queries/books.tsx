import { useQuery } from '@tanstack/react-query';

import { bookService } from '@/services/BookService';

export function useSearchBooks(queryPamras: string) {
  const { status, data, isLoading } = useQuery({
    queryKey: ['search', queryPamras],
    queryFn: () => {
      return bookService.searchBooks(queryPamras);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
  return { status, data, isLoading };
}

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
    queryKey: ['covers', isbn, size],
    queryFn: () => {
      return bookService.getBooksCover({ isbn, size });
    },
    refetchOnWindowFocus: false,
  });
}
