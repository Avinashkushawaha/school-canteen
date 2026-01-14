// src/pages/CreateStudentPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const CreateStudentPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
const onSubmit = async (data) => {
  try {
    const studentData = {
      name: data.name,
      referralCode: `STU${Date.now()}`, // Generate unique code
      totalSpent: 0
    };
    
    await api.createStudent(studentData);
    alert('Student created successfully!');
    navigate('/students');
  } catch (error) {
    alert('Error creating student');
    console.error(error);
  }
};
  
  return (
    <div className="container mx-auto p-6 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Create Student</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Student Name</label>
          <input 
            {...register('name', { required: 'Name is required' })}
            className="w-full border p-2 rounded"
            placeholder="Enter student name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Create Student
        </button>
      </form>
    </div>
  );
};

export default CreateStudentPage;