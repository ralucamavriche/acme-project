import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className="flex flex-1">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-[18px] w-[18px] text-gray-500" />
        </span>
        <input
          className="placeholder: w-full rounded-md border border-gray-200 bg-white py-2 pl-10 pr-3 text-sm text-gray-500"
          type="text"
          id="search"
          placeholder="Search invoices..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
