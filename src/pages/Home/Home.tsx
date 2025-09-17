import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { Link } from 'react-router-dom';

const HomeMetadata = () => {
  return (
    <>
      <title>ACME | Home</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Welcome to the Acme home page." />
      <meta name="theme-color" content="#0070fb" />
    </>
  );
};

const Home: React.FC = () => (
  <>
    <HomeMetadata />
    <div className="mt-4 flex flex-col gap-4 md:flex-row">
      <div className="flex w-full flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:p-20">
        <div className="font-lusitana text-xl text-gray-800 md:text-3xl md:leading-normal">
          <h1 className="inline font-bold">Welcome to Acme. </h1>
          This is the example for the
          <a className="text-blue-500" href="https://nextjs.org/learn">
            {' '}
            Next.js Learn Course
          </a>
          , brought to you by Vercel.
        </div>
        <Link to="/dashboard">
          <button className="flex items-center gap-5 self-start rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
            Dashboard <ArrowRightIcon className="w-5 md:w-6" />
          </button>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center px-6 py-3 md:w-3/5 md:px-28 md:py-12">
        <img
          src="/hero-desktop.png"
          alt="Illustration of Acme product and team for desktop view"
          className="hidden h-auto w-full md:block"
        />
        <img
          src="/hero-mobile.png"
          alt="Illustration of Acme product and team for mobile view"
          className="block h-auto w-full md:hidden"
        />
      </div>
    </div>
  </>
);

export default Home;
