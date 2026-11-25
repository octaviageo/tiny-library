import {NoSearchResultsProps} from "@/app/types";

export default function NoSearchResults({
  query,
}: NoSearchResultsProps) {
  return (
    <div className="rounded-lg border border-gray-200 px-6 py-16 text-center">
      <h2 className="mb-2 text-xl font-semibold">
        No books found
      </h2>

      <p className="text-gray-600">
        No books matched &ldquo;{query}&rdquo;.
        Try another title or author.
      </p>
    </div>
  );
}