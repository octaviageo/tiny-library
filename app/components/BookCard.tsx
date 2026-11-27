import Pill from "@/app/components/Pill"
import bookPhoto from "@/public/book.svg"
import {BookCardProps} from "@/app/types"
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa6"
import Link from "next/link"


export default function BookCard ({book} : BookCardProps) {
    return (
       <Link
            href={`/books/${book.id}`}
            className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800"
        >
            <div className="h-full overflow-hidden transition-shadow bg-[#fafafa] rounded-lg shadow-md hover:shadow-lg
            hover:bg-[#CDD6D2] hover:transition hover:duration-300" role="article">
            
                    <div className="relative aspect-square">
                        <Image
                            src={bookPhoto}
                            alt={book.name}
                            loading="lazy"
                            className="absolute inset-0 object-cover w-full h-full"
                            
                        />
                     </div>
                    <div className="p-4">
                        
                            <div className="flex justify-between mb-2 min-h-[3.5rem]">
                                <h2 id={`book-${book.id}-title`} className="text-xl font-semibold text-gray-800 line-clamp-2">
                                    {book.name}
                                </h2>
                            </div>
                            <p className="text-gray-800 text-sm line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">
                                {book.author}
                            </p>
                        
                        <div className="flex items-center justify-between mt-4"> 
                            <div className="mt-2">
                                <Pill>{book.category}</Pill>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600" aria-label={`${book.likes} likes`}>
                                <FaRegHeart className="w-4 h-4 mr-1 text-red-400" aria-hidden="true" />
                                <span>{book.likes}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </Link>    
    )
}