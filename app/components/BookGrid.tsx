import {Book} from "@/app/types"
import BookCard from "@/app/components/BookCard"

export default function BookGrid({ books }: { books: Book[] }) {
    return(
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" role="region" aria-label="Books Gallery">
        {books.map((book: Book) => (
            <BookCard key={book.id} book={book} />
        ))}

     </div>  
    )}