import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

const Pagination = () => {
  return (
    <div className="mt-5 flex justify-center">
      <div className="inline-flex">
        <a
          href="#"
          className="pointer-events-none relative mr-4 inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Previous</span>
          <ArrowLeftIcon aria-hidden="true" className="size-5" />
        </a>
        <div className="flex -space-x-px">
          <a
            href="#"
            aria-current="page"
            className="z-10 flex h-10 w-10 items-center justify-center rounded-l-md border border-blue-600 bg-blue-600 text-sm text-gray-300"
          >
            1
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center border text-sm hover:bg-gray-100"
          >
            2
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-r-md border text-sm hover:bg-gray-100"
          >
            3
          </a>
        </div>
        <a
          href="#"
          className="relative ml-4 inline-flex items-center rounded-md px-2 py-2 text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Next</span>
          <ArrowRightIcon aria-hidden="true" className="size-5" />
        </a>
      </div>
    </div>
  );
};

export default Pagination;
