export interface Author {
  url: string;
  name: string;
}

interface Identifier {
  librarything?: string[];
  wikidata?: string[];
  goodreads?: string[];
  isbn_10?: string[];
  lccn?: string[];
  openlibrary?: string[];
}

interface Classification {
  lc_classifications?: string[];
  dewey_decimal_class?: string[];
}

interface Publisher {
  name: string;
}

interface PublishPlace {
  name: string;
}

interface Subject {
  name: string;
  url: string;
}

interface Format {
  pdf?: { url: string };
  epub?: { url: string };
  text?: { url: string };
}

interface Ebook {
  preview_url: string;
  availability: string;
  formats: Format;
  read_url: string;
}

interface Cover {
  small: string;
  medium: string;
  large: string;
}

export interface BookData {
  url: string;
  key: string;
  title: string;
  subtitle?: string;
  authors: Author[];
  number_of_pages: number;
  pagination: string;
  by_statement: string;
  identifiers: Identifier;
  classifications: Classification;
  publishers: Publisher[];
  publish_places: PublishPlace[];
  publish_date: string;
  subjects: Subject[];
  notes: string;
  ebooks: Ebook[];
  cover: Cover;
}

export interface Books {
  [isbn: string]: BookData;
}

export interface FilterBookConfig {
  page?: number | string;
  limit?: number | string;
  search?: string;
}
