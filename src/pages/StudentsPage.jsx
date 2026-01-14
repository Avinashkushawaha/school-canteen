// src/pages/StudentsPage.jsx
import React, { useState, useEffect } from 'react';
import StudentListItem from '../components/students/StudentListItem';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    loadStudents();
  }, []);
  
  const loadStudents = async () => {
    try {
      const res = await api.getStudents();
      setStudents(res.data);
    } catch (error) {
      console.error('Error loading students:', error);
    }
  };
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <button 
          onClick={() => navigate('/students/create')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Student
        </button>
      </div>
      
      <div className="space-y-4">
        {students.map(student => (
          <StudentListItem key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;