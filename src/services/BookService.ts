import axios from 'axios';

import { FilterBookConfig } from '@/types/Book';
const BASE_BOOK_URL = 'https://openlibrary.org';
const BASE_COVER_URL = 'https://covers.openlibrary.org';
export const bookService = {
  async searchBooks(searchParams: FilterBookConfig) {
    try {
      const response = await axios.get(`${BASE_BOOK_URL}/book?${searchParams}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data.');
    }
  },

  async getBooks(isbns: string) {
    try {
      const response = await axios.get(
        `${BASE_BOOK_URL}/api/books?bibkeys=${isbns}&jscmd=data&format=json`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data.');
    }
  },
  async getBooksCover({ isbn, size }: { isbn: string; size: string }) {
    try {
      const response = await axios.get(
        `${BASE_COVER_URL}/b/isbn/${isbn}-${size}.jpg}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data.');
    }
  },
};
