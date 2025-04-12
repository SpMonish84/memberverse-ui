
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <h1 className="page-title">Join Our Community</h1>
        
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3">Why Join Community Nexus?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our community of like-minded individuals focused on personal growth, professional development, and creating meaningful connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4">
                <div className="bg-community-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check className="text-community-600 h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Connect</h3>
                <p className="text-gray-600">
                  Connect with professionals, entrepreneurs, and leaders from various industries.
                </p>
              </div>
              
              <div className="p-4">
                <div className="bg-community-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check className="text-community-600 h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Learn</h3>
                <p className="text-gray-600">
                  Access valuable resources, workshops, and discussions to enhance your knowledge.
                </p>
              </div>
              
              <div className="p-4">
                <div className="bg-community-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Check className="text-community-600 h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Collaborate</h3>
                <p className="text-gray-600">
                  Find partners for projects, mentors for guidance, or simply exchange ideas.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/signup" 
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-community-600 hover:bg-community-700"
              >
                Sign up now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-xl">Basic</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">Free</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to member directory</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Join public discussions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Attend community events</span>
                </li>
              </ul>
              <div className="text-center">
                <Link 
                  to="/signup" 
                  className="inline-block w-full px-4 py-2 border border-community-600 rounded-md text-community-600 hover:bg-community-50"
                >
                  Sign up
                </Link>
              </div>
            </div>
            
            <div className="border-2 border-community-600 rounded-xl p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="bg-community-100 text-community-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                  MOST POPULAR
                </div>
                <h3 className="font-semibold text-xl">Pro</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All Basic features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to private channels</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Join workshops and webinars</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Request introductions</span>
                </li>
              </ul>
              <div className="text-center">
                <Link 
                  to="/signup" 
                  className="inline-block w-full px-4 py-2 bg-community-600 border border-community-600 rounded-md text-white hover:bg-community-700"
                >
                  Get started
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-xl">Enterprise</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All Pro features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-community-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Team management tools</span>
                </li>
              </ul>
              <div className="text-center">
                <Link 
                  to="/contact" 
                  className="inline-block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default JoinUs;
