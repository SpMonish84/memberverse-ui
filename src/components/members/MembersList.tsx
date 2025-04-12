
import React, { useState, useEffect } from 'react';
import { Member } from '@/lib/types';
import MemberCard from './MemberCard';
import SearchBar from '../layout/SearchBar';
import { ChevronDown } from 'lucide-react';

interface MembersListProps {
  members: Member[];
}

const MembersList: React.FC<MembersListProps> = ({ members }) => {
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(members);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  useEffect(() => {
    // Filter and sort members when members array, search term, or sort order changes
    const filtered = members.filter(member => 
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    
    setFilteredMembers(sorted);
  }, [members, searchTerm, sortOrder]);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  
  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="w-full md:w-72">
            <SearchBar 
              onSearch={handleSearch} 
              placeholder="Search members..." 
            />
          </div>
          <div>
            <button
              onClick={toggleSortOrder}
              className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {filteredMembers.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No members found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMembers.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MembersList;
