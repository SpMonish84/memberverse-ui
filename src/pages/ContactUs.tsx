
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <h1 className="page-title">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-community-500 focus:ring-1 focus:ring-community-500"
                    placeholder="John"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-community-500 focus:ring-1 focus:ring-community-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-community-500 focus:ring-1 focus:ring-community-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-community-500 focus:ring-1 focus:ring-community-500"
                  placeholder="How can we help?"
                />
              </div>
              
              <div className="form-group mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-community-500 focus:ring-1 focus:ring-community-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-community-600 hover:bg-community-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-community-500"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-community-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Email</h3>
                  <p className="mt-1"><a href="mailto:info@communitynexus.io" className="text-community-600">info@communitynexus.io</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-community-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Phone</h3>
                  <p className="mt-1">+1234567890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-community-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Location</h3>
                  <p className="mt-1">
                    123 Community St.<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactUs;
