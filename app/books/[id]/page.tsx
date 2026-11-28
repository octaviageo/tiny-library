import {getBookById} from "@/app/lib/books";
import {BookDetailPageProps} from "@/app/types";
import { FaRegHeart } from "react-icons/fa6"
import Pill from "@/app/components/Pill"
import placeholderImg from "@/public/book.svg"

export default async function BookDetailPage({ params } : BookDetailPageProps) {
    const {id} = await params
    const book = await getBookById(id)
    return (
        <div className="container max-w-6xl md:mt-10 md:mb-10 px-4 py-8 md:px-10 md:py-15 rounded-lg mx-auto bg-[#E6EAE8]">
      <article className="grid grid-cols-1 gap-15 lg:grid-cols-2">
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
        <section className="flex flex-col md:justify-between h-full">
             <div>
             <Pill
              className="mb-4 w-fit "
              // role="status"
              aria-label="Category"
            >
              {book.category}
            </Pill>

              <h1 className="mb-1 text-4xl font-bold">{book.name}</h1>
            <div className="mb-4 prose prose-lg max-w-none">
              <p className="leading-relaxed text-gray-700">
                by {book.author}
              </p>
            </div>
          <div className="mb-4 prose prose-lg w-sm">
            <p className="leading-relaxed text-gray-700">
              {book.description}
            </p>
          </div>
           
            <div
              className="flex items-center text-2xl text-gray-600 mb-6"
              role="status"
              aria-label="Likes count"
            >
              <FaRegHeart
                className="w-4 h-4 mr-2 text-red-400"
                aria-hidden="true"
              />
            <span className="font-bold text-lg" aria-label={`${book.likes} likes`}>{book.likes}</span>
          </div>
          </div>

          <div className=" flex-col bg-[#1A4131] md:w-sm flex p-5 md:p-6 rounded-lg gap-2 mt-10">
            <p className="text-white text-xl md:text-2xl text-center ">Price: €{book.price}</p>
            <span className="text-white text-sm md:text-l text-center">(incl. VAT)</span>
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