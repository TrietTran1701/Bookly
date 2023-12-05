import axios from 'axios';

const BASE_BOOK_URL = 'https://openlibrary.org';
const BASE_COVER_URL = 'https://covers.openlibrary.org';
export const bookService = {
  async searchBooks(searchParams: string) {
    try {
      const response = await axios.get(
        `${BASE_BOOK_URL}/search.json?${searchParams}&page=1&limit=5`
      );
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
      const queryParam = isbn + '-' + size + '.jpg';
      const response = await axios.get(
        `${BASE_COVER_URL}/b/isbn/${queryParam}`
      );
      return response.config.url;
    } catch (error) {
      throw new Error('Failed to fetch data.');
    }
  },
};
