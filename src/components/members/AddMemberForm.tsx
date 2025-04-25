
import React, { useState } from 'react';
import { Member } from '@/lib/types';
import { CalendarIcon, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AddMemberFormProps {
  onAddMember: (newMember: Member) => void;
  onCancel: () => void;
}

const AddMemberForm: React.FC<AddMemberFormProps> = ({ onAddMember, onCancel }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [focus, setFocus] = useState('');
  const [joinedDate, setJoinedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [interestsInput, setInterestsInput] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!role.trim()) {
      newErrors.role = 'Role is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newMember: Member = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim(),
      focus: focus.trim(),
      joinedDate,
      interests: interestsInput.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
    };

    onAddMember(newMember);
    toast({
      title: "Member added",
      description: `${name} has been added to the directory.`,
    });
    
    // Reset form
    setName('');
    setRole('');
    setFocus('');
    setJoinedDate(new Date().toISOString().split('T')[0]);
    setInterestsInput('');
    setErrors({});
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Add New Member</h2>
        <button 
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name <span className="text-red-500">*</span></label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Doe"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="role" className="form-label">Role <span className="text-red-500">*</span></label>
          <input
            id="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md ${errors.role ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Founder, Mentor, Member, etc."
          />
          {errors.role && <span className="text-red-500 text-sm">{errors.role}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="focus" className="form-label">Focus Area</label>
          <input
            id="focus"
            type="text"
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="AI Ethics, Leadership, etc."
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="joinedDate" className="form-label">Joined Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input
              id="joinedDate"
              type="date"
              value={joinedDate}
              onChange={(e) => setJoinedDate(e.target.value)}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="interests" className="form-label">Interests (comma separated)</label>
          <input
            id="interests"
            type="text"
            value={interestsInput}
            onChange={(e) => setInterestsInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Mindfulness, AI Ethics, Programming"
          />
          <span className="text-xs text-gray-500">E.g., Mindfulness, AI Ethics, Programming</span>
        </div>
        
        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-community-600 hover:bg-community-700"
          >
            Add Member
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMemberForm;
