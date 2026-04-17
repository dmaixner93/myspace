import { useMemo } from 'react';

export default function Paginator({
  currentPage,
  pages,
  onPageChange,
}: {
  currentPage: number;
  pages: number;
  onPageChange: (page: number) => void;
}) {
  const pageElements = useMemo(() => {
    return Array.from({ length: pages }, (_, i) => i + 1).map((page) => {
      const textColor = currentPage === page ? 'text-red-800' : 'text-blue-700';
      return (
        <div key={`page-${page}`}>
          <button
            className={`${textColor} font-bold cursor-pointer hover:underline`}
            onClick={() => {
              onPageChange(page);
            }}
          >
            {page}
          </button>
        </div>
      );
    });
  }, [pages, currentPage, onPageChange]);
  return <div className="flex gap-x-1.5">{pageElements}</div>;
}
