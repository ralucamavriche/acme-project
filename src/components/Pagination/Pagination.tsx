import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPreviousPageHandle: () => void;
  onNextPageHandle: () => void;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPreviousPageHandle,
  onNextPageHandle,
  onPageChange,
}) => {
  const pages: Array<number> = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const isCurrentPage = (page: number) => page === currentPage;

  return (
    <div className="mt-5 flex w-full max-w-full justify-center">
      <div className="flex w-full max-w-full sm:w-auto">
        <button
          disabled={isFirstPage}
          onClick={onPreviousPageHandle}
          className={`relative mr-4 inline-flex items-center rounded-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${
            isFirstPage ? 'text-gray-300 hover:bg-gray-50' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span className="sr-only">Previous</span>
          <ArrowLeftIcon aria-hidden="true" className="size-5" />
        </button>
        <div className="flex w-full max-w-full -space-x-px sm:w-auto">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={isCurrentPage(page) ? 'page' : undefined}
              className={`flex h-10 w-full flex-1 items-center justify-center border text-sm sm:w-10 sm:flex-none ${
                isCurrentPage(page)
                  ? 'pointer-events-none z-10 border-blue-600 bg-blue-600 text-gray-300'
                  : 'hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={onNextPageHandle}
          disabled={isLastPage}
          className={`relative ml-4 inline-flex items-center rounded-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${
            isLastPage ? 'text-gray-300 hover:bg-gray-50' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span className="sr-only">Next</span>
          <ArrowRightIcon aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
