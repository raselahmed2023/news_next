import Link from 'next/link';
import React from 'react';


const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
        404
      </h1>
      
      <main className="mt-5">
        <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
          Oops! News is not found. Try again later.
        </h2>
        <div className="mt-8">
          <Link
            href={'/'}
            className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </main>

    </div>
  );
};

export default NotFound;