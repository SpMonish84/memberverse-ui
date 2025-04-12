
import React, { useState } from 'react';
import { Member } from '@/lib/types';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import MemberDetail from './MemberDetail';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-community-500 flex items-center justify-center text-white font-semibold">
              {getInitials(member.name)}
            </div>
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs font-medium">
                {member.role}
              </span>
              <span className="mx-2">•</span>
              <span>{member.focus}</span>
            </div>
          </div>
          <button 
            onClick={toggleExpand}
            className="text-gray-500 hover:text-community-600 transition-colors"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        {isExpanded && <MemberDetail member={member} />}
      </div>
    </div>
  );
};

export default MemberCard;
