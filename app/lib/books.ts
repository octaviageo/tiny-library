import booksData from "../data/books.json"
import categoriesData from "../data/categories.json"
import type { Book, Category, BookCategorySlug } from "../types"

const books: Book[] = booksData
const categories: Category[] = categoriesData as Category[]


export async function getAllBooks(): Promise<Book[]> {
  return books
}

export async function getBookById(id: string | number): Promise<Book> {
  const book = books.find((book) => book.id === Number(id))

  if (!book) {
    throw new Error(`Book with id "${id}" was not found`)
  }

  return book
}

export async function getAllcategories() {
  return categories
}

export async function getCategoryBySlug(slug: BookCategorySlug): Promise<Category> {
  const category = categories.find((category) => category.slug === slug)

  if (!category) {
    throw new Error(`Category with slug "${slug}" was not found`)
  }

  return category
}

export async function getBooksByCategory(categoryName: BookCategorySlug): Promise<Book[]> {
  
  return books.filter((book) => book.category === categoryName)
}