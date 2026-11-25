import type { ReactNode } from "react"

// Data Types
export type Book = {
  id: number
  name: string
  author: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

// Page Types
export type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export type BookDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

// Component Types
export type BookCardProps = {
  book: Book
}

export type PillProps = {
  children: ReactNode
  className?: string
}

export type BookGridProps = {
  books: Book[]
}

//Book categories
export type BookCategorySlug = 
  | "fiction" 
  | "romance"
  | "fantasy"
  | "thriller"
  | "horror"
  | "historical"
  | "biography"
  | "self-help";

export type Category = {
  id: number
  slug: BookCategorySlug
  label: string
}

export type BooksPageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export type CategoryPageProps = {
  params: Promise<{
    categoryName: BookCategorySlug;
  }>;
  searchParams: Promise<{
    query?: string;
  }>;
};

export type NoSearchResultsProps = {
  query: string;
};