
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';

const Community = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <h1 className="page-title">Community</h1>
        
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Join Our Discussion Channels</h2>
          <p className="text-gray-600 mb-4">
            Connect with other members in our community channels. Share ideas, ask questions, and collaborate on projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium"># general</h3>
              <p className="text-sm text-gray-500">For general discussions and community updates</p>
            </div>
            <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium"># tech-talks</h3>
              <p className="text-sm text-gray-500">Discussions about technology and innovation</p>
            </div>
            <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium"># mindfulness</h3>
              <p className="text-sm text-gray-500">Share mindfulness practices and insights</p>
            </div>
            <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium"># projects</h3>
              <p className="text-sm text-gray-500">Collaborate on community projects</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Community Events</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-community-600 pl-4">
              <h3 className="font-medium">Weekly Community Meetup</h3>
              <p className="text-sm text-gray-500">Every Wednesday at 5:00 PM PST</p>
              <p className="mt-1 text-gray-600">Join us for our weekly community check-in and discussion.</p>
            </div>
            <div className="border-l-4 border-community-600 pl-4">
              <h3 className="font-medium">Tech Workshop: AI Ethics</h3>
              <p className="text-sm text-gray-500">August 15, 2025 at 3:00 PM PST</p>
              <p className="mt-1 text-gray-600">A workshop on the ethical considerations in AI development.</p>
            </div>
            <div className="border-l-4 border-community-600 pl-4">
              <h3 className="font-medium">Conscious Leadership Panel</h3>
              <p className="text-sm text-gray-500">September 5, 2025 at 12:00 PM PST</p>
              <p className="mt-1 text-gray-600">A panel discussion on conscious leadership practices.</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Community;
