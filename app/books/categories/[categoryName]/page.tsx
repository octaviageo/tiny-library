import {BookCategorySlug} from "@/app/types";
import BooksGrid from "@/app/components/BookGrid";
import {getBooksByCategory, getCategoryBySlug} from "@/app/lib/books";


export default async function CategoryPage ({ params }: { params: Promise<{ categoryName: BookCategorySlug }> }) {
  const { categoryName } = await params;
  
  const category = await getCategoryBySlug(categoryName);
  const books = await getBooksByCategory(categoryName);

  return(
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold capitalize">
        {category.label}
      </h1>

      <BooksGrid books={books} />
    </div>
  )

}
