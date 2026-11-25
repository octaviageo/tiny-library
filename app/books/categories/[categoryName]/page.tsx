import BooksGrid from "@/app/components/BookGrid";
import {getBooksByCategory, getCategoryBySlug} from "@/app/lib/books";
import Form from "next/form";
import {CategoryPageProps} from "@/app/types";
import NoSearchResults from "@/app/components/NoSearchResults";
import BookGrid from "@/app/components/BookGrid";


export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
 
  const { categoryName } = await params;
  const { query = "" } = await searchParams;

  const category = await getCategoryBySlug(categoryName);
  const booksInCategory = await getBooksByCategory(categoryName);

  const filteredBooks =
    query === ""
      ? booksInCategory
      : booksInCategory.filter(
          (book) =>
            book.name.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );

 
  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">
          {category.label}
        </h1>

        <Form
          action={`/books/categories/${categoryName}`}
          className="w-full sm:w-72"
        >
          <label htmlFor="category-search" className="sr-only">
            Search in {category.label} by title or author
          </label>

          <input
            id="category-search"
            type="text"
            name="query"
            defaultValue={query}
            placeholder={`Search in ${category.label}`}
            className="w-full rounded-full border border-gray-400 px-4 py-2 text-sm"
          />
        </Form>
      </div>

        {filteredBooks.length === 0 ? (
        <NoSearchResults query={query} />
        ) : (
        <BookGrid books={filteredBooks} />
        )}
    </div>
  );
}