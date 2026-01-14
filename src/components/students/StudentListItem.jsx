// src/components/students/StudentListItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentListItem = ({ student }) => {
  const navigate = useNavigate();
  
  return (
    <div className="border p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="font-bold">{student.name}</h3>
        <p className="text-sm text-gray-600">Code: {student.referralCode}</p>
        <p className="text-sm">Total Spent: ₹{student.totalSpent || 0}</p>
      </div>
      <button 
        onClick={() => navigate(`/students/${student.id}`)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        View Details
      </button>
    </div>
  );
};

export default StudentListItem;