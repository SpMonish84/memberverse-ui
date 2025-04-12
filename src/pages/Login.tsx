
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

const Login = () => {
  return (
    <PageTransition>
      <div className="page-container flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-gray-600 mt-1">Sign in to your account</p>
            </div>
            
            <form>
              <div className="space-y-4">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-community-500 focus:ring-1 focus:ring-community-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="form-label">Password</label>
                    <a href="#" className="text-sm text-community-600 hover:text-community-700">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-community-500 focus:ring-1 focus:ring-community-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-community-600 focus:ring-community-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-community-600 hover:bg-community-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-community-500"
              >
                Sign in
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-community-600 hover:text-community-700">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
