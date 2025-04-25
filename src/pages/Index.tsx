
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MessageCircle, UserPlus } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition>
      <div className="bg-gradient-to-b from-community-50 to-white">
        <div className="page-container">
          <div className="text-center py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-community-600">Community Nexus</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with like-minded individuals, share ideas, and grow together in our collaborative community platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/members" 
                className="px-6 py-3 bg-community-600 text-white rounded-lg font-medium hover:bg-community-700 transition-colors flex items-center"
              >
                Browse Members <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/signup" 
                className="px-6 py-3 bg-white text-community-600 border border-community-600 rounded-lg font-medium hover:bg-community-50 transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </div>
          <div className="py-12">
            <h2 className="text-3xl font-bold text-center mb-12">Discover Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-community-100 rounded-lg flex items-center justify-center text-community-600 mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Member Directory</h3>
                <p className="text-gray-600 mb-4">
                  Discover community members, their expertise, and interests to connect with like-minded individuals.
                </p>
                <Link to="/members" className="text-community-600 font-medium hover:text-community-700 inline-flex items-center">
                  Browse Members
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-community-100 rounded-lg flex items-center justify-center text-community-600 mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Discussions</h3>
                <p className="text-gray-600 mb-4">
                  Engage in meaningful conversations, share knowledge, and collaborate on projects.
                </p>
                <Link to="/community" className="text-community-600 font-medium hover:text-community-700 inline-flex items-center">
                  Join Discussions
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-community-100 rounded-lg flex items-center justify-center text-community-600 mb-4">
                  <UserPlus size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Join Our Network</h3>
                <p className="text-gray-600 mb-4">
                  Become a part of our growing community and unlock collaboration opportunities.
                </p>
                <Link to="/join" className="text-community-600 font-medium hover:text-community-700 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
