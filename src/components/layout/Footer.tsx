
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="text-xl font-bold text-community-600">
              Community Nexus
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center md:text-right text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Community Nexus. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-1 border-t border-gray-100 pt-1 md:flex md:items-center md:justify-between">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
