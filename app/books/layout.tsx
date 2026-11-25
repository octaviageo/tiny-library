import Link from "next/link";
import categoriesData from "../data/categories.json";
import type { Category } from "../types";
import CategoryNavLink from "../components/CategoryNavLink";

const categories = categoriesData as Category[];

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav
        className="flex flex-wrap items-center gap-4 border-gray-200 px-4 py-4"
        aria-label="Book categories"
      >
        <CategoryNavLink
          href="/books"
        >
          All
        </CategoryNavLink>

        {categories.map((category) => (
          <CategoryNavLink
            key={category.id}
            href={`/books/categories/${category.slug}`}
          >
            {category.label}
          </CategoryNavLink>
        ))}
      </nav>

      <div>{children}</div>
    </div>
  );
}