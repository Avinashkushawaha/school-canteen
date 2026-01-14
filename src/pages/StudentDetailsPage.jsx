// src/pages/StudentDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';

const StudentDetailPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadStudentData();
  }, [id]);
  
  const loadStudentData = async () => {
    try {
      // Get student details
      const studentRes = await api.getStudentById(id);
      setStudent(studentRes.data);
      
      // Get all orders and filter by student ID
      const ordersRes = await api.getOrders();
       console.log('All orders:', ordersRes.data);
      const studentOrders = ordersRes.data.filter(
        order => String(order.studentId) === String(id)
      );
      console.log('Filtered orders:', studentOrders);
      setOrders(studentOrders);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) return <div className="container mx-auto p-6">Loading...</div>;
  if (!student) return <div className="container mx-auto p-6">Student not found</div>;
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{student.name}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-lg"><span className="font-semibold">Referral Code:</span> {student.referralCode}</p>
        <p className="text-lg"><span className="font-semibold">Total Spent:</span> ₹{student.totalSpent || 0}</p>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet</p>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg bg-white shadow">
              <p><span className="font-semibold">Snack:</span> {order.snackName}</p>
              <p><span className="font-semibold">Quantity:</span> {order.quantity}</p>
              <p><span className="font-semibold">Amount:</span> ₹{order.payableAmount}</p>
              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDetailPage;