import React, { useState } from 'react';
import { Member } from '@/lib/types';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import MemberDetail from './MemberDetail';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
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

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover transition-all duration-200 ${isExpanded ? 'mb-2' : ''}`}>
      <div className="p-5">
        <div className="flex items-center">
          {/* Avatar and main info remains the same */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-community-500 flex items-center justify-center text-white font-semibold">
              {getInitials(member.name)}
            </div>
          </div>
          <div className="ml-4 flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{member.name}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1 flex-wrap">
              <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs font-medium">
                {member.role}
              </span>
              <span className="mx-2">•</span>
              <span className="truncate">{member.focus}</span>
            </div>
          </div>
          <button 
            onClick={toggleExpand}
            className="flex-shrink-0 text-gray-500 hover:text-community-600 transition-colors"
            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          {isExpanded && <MemberDetail member={member} />}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;