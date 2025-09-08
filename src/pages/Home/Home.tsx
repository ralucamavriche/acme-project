import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div className="flex flex-col md:flex-row gap-4 mt-4 ">
    <div className="flex flex-col gap-6 justify-center bg-gray-50 rounded-lg px-6 py-10 w-full md:p-20 md:w-2/5 ">
      <p className="text-xl md:text-3xl text-gray-800 md:leading-normal">
        <strong>Welcome to Acme. </strong>
        This is the example for the
        <a className="text-blue-500" href="https://nextjs.org/learn">
          {' '}
          Next.js Learn Course
        </a>
        , brought to you by Vercel.
      </p>
      <Link to="/dashboard">
        <button className="flex items-center gap-5 self-start text-sm rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
          Dashboard <ArrowRightIcon className="w-5 md:w-6" />
        </button>
      </Link>
    </div>
    <div className="flex justify-center items-center w-full md:w-3/5 px-6 py-3 md:px-28 md:py-12">
      <img
        src="/hero-desktop.png"
        alt="Illustration of Acme product and team for desktop view"
        className="w-full max-w-[1000px] h-auto hidden md:block"
      />
      <img
        src="/hero-mobile.png"
        alt="Illustration of Acme product and team for mobile view"
        className="block md:hidden w-full max-w-[560px] h-auto"
      />
    </div>
  </div>
);

export default Home;
