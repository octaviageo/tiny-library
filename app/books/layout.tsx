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
    <div className="container mx-auto flex flex-col gap-8 px-4 py-8 md:flex-row md:gap-12">
      <aside className="shrink-0 md:w-40">
        <nav
          className="flex flex-wrap gap-2 md:flex-col md:items-start md:gap-4 md:pt-20"
          aria-label="Book categories"
        >
          <CategoryNavLink href="/books">
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
      </aside>

      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}