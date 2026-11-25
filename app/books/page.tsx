import {getAllBooks} from "@/app/lib/books";
import type { Book } from "@/app/types";
import BookCard from "@/app/components/BookCard";
import Link from "next/link";
import BookGrid from "@/app/components/BookGrid";

export default async function Books () {
    const books = await getAllBooks();
    const filteredBooks: Book[] = books 
    return (
        <div className="container px-4 py-8 mx-auto">
          <h1 className="mb-8 text-3xl font-bold">All Books</h1>
          <BookGrid books={filteredBooks} />
        </div>)
    
}