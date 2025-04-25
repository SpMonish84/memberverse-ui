import React from 'react';
import { Member } from '@/lib/types';
import { Calendar } from 'lucide-react';

interface MemberDetailProps {
  member: Member;
}

const MemberDetail: React.FC<MemberDetailProps> = ({ member }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-4 border-t border-gray-100">
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Calendar className="h-4 w-4 mr-2" />
        <span>Joined: {formatDate(member.joinedDate)}</span>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Interests:</h4>
        <div className="flex flex-wrap gap-2">
          {member.interests.map((interest, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;