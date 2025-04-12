
import React, { useState, useEffect } from 'react';
import { Member } from '@/lib/types';
import { getStoredMembers, saveMembers } from '@/lib/memberData';
import PageTransition from '@/components/ui/PageTransition';
import MembersList from '@/components/members/MembersList';
import AddMemberForm from '@/components/members/AddMemberForm';
import { UserPlus } from 'lucide-react';

const MembersDirectory = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Load members from localStorage on component mount
  useEffect(() => {
    setMembers(getStoredMembers());
  }, []);

  const handleAddMember = (newMember: Member) => {
    const updatedMembers = [...members, newMember];
    setMembers(updatedMembers);
    saveMembers(updatedMembers);
    setShowAddForm(false);
  };

  return (
    <PageTransition>
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="page-title mb-4 md:mb-0">Member Directory</h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-community-600 hover:bg-community-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-community-500"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            {showAddForm ? "Cancel" : "Add New Member"}
          </button>
        </div>
        
        {showAddForm ? (
          <div className="mb-8">
            <AddMemberForm 
              onAddMember={handleAddMember} 
              onCancel={() => setShowAddForm(false)} 
            />
          </div>
        ) : null}
        
        <MembersList members={members} />
      </div>
    </PageTransition>
  );
};

export default MembersDirectory;
