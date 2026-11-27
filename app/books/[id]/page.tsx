import {getBookById} from "@/app/lib/books";
import {BookDetailPageProps} from "@/app/types";
import { FaRegHeart } from "react-icons/fa6"
import Pill from "@/app/components/Pill"
import placeholderImg from "@/public/book.svg"

export default async function BookDetailPage({ params } : BookDetailPageProps) {
    const {id} = await params
    const book = await getBookById(id)
    return (
        <div className="container max-w-6xl px-4 py-8 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <img
            src={placeholderImg.src}
            alt={`Image cover of ${book.name}`}
            width={300}
            height={300}
            className="absolute inset-0 object-cover w-full h-full"
            loading="lazy"
          />
        </figure>

        {/* Content Section */}
        <section className="flex flex-col justify-center h-full">
        
          <div className="mb-2 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700">
              {book.author}
            </p>
          </div>
          <h1 className="mb-6 text-4xl font-bold">{book.name}</h1>
          <div className="flex align-items-center gap-10 mt-6">
           
              <Pill
              className="mb-6 w-fit "
              // role="status"
              aria-label="Category"
            >
              {book.category}
            </Pill>
           
            <div
              className="flex items-center mb-2 text-2xl text-gray-600 mb-6"
              role="status"
              aria-label="Likes count"
            >
              <FaRegHeart
                className="w-4 h-4 mr-2 text-red-400"
                aria-hidden="true"
              />
            <span className="font-light text-lg" aria-label={`${book.likes} likes`}>{book.likes}</span>
          </div>
          </div>

          {/* <div className="text-sm text-gray-500">
            <time dateTime={book.dateAdded}>
              Added on {new Date(book.dateAdded).toLocaleDateString()}
            </time>
          </div> */}
         
        </section>
      </article>
    </div>
    ) 
}