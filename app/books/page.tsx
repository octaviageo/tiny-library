import {getAllBooks} from "@/app/lib/books";
import BookGrid from "@/app/components/BookGrid";
import {BooksPageProps} from "@/app/types";
import Form from "next/form";
import NoSearchResults from "@/app/components/NoSearchResults";

export default async function Books ({searchParams}: BooksPageProps) {
    const {query=""} = await searchParams;
    const books = await getAllBooks();
    const filteredBooks =
    query === ""
      ? books
      : books.filter(
          (book) =>
            book.name.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );

       return (
  <div>
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-3xl font-bold">
        All Books
      </h1>

      <Form
        action="/books"
        className="w-full sm:w-72"
      >
        <label htmlFor="book-search" className="sr-only">
          Search books by title or author
        </label>

        <input
          id="book-search"
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search by title or author"
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
    )
}
