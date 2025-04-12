import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Menu, X, Users, Home, MessageCircle, UserPlus, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link nav-link-active' : 'nav-link nav-link-inactive';
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-community-600">Community Nexus</h1>
            </Link>
          </div>
          
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <SearchBar />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-2">
              <Link to="/" className={isActive('/')}>
                <Home className="w-4 h-4 mr-1 inline" />
                Home
              </Link>
              <Link to="/members" className={isActive('/members')}>
                <Users className="w-4 h-4 mr-1 inline" />
                Members
              </Link>
              <Link to="/community" className={isActive('/community')}>
                <MessageCircle className="w-4 h-4 mr-1 inline" />
                Community
              </Link>
              <Link to="/join" className={isActive('/join')}>
                <UserPlus className="w-4 h-4 mr-1 inline" />
                Join Us
              </Link>
              <Link to="/contact" className={isActive('/contact')}>
                <Phone className="w-4 h-4 mr-1 inline" />
                Contact
              </Link>
              <div className="ml-4 flex items-center">
                <Link 
                  to="/login" 
                  className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90"
                >
                  Log in
                </Link>
                <Link 
                  to="/signup" 
                  className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="py-2">
              <SearchBar />
            </div>
            <Link 
              to="/" 
              className={`${isActive('/')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-4 h-4 mr-2 inline" />
              Home
            </Link>
            <Link 
              to="/members" 
              className={`${isActive('/members')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="w-4 h-4 mr-2 inline" />
              Members
            </Link>
            <Link 
              to="/community" 
              className={`${isActive('/community')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle className="w-4 h-4 mr-2 inline" />
              Community
            </Link>
            <Link 
              to="/join" 
              className={`${isActive('/join')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus className="w-4 h-4 mr-2 inline" />
              Join Us
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2 inline" />
              Contact
            </Link>
            <div className="mt-4 flex space-x-3">
              <Link 
                to="/login" 
                className="w-full px-4 py-2 text-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="w-full px-4 py-2 text-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
