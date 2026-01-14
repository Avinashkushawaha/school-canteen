// src/pages/SnacksPage.jsx
import React, { useState, useEffect } from 'react';
import SnackCard from '../components/snacks/SnackCard';
import OrderModal from '../components/snacks/OrderModal';
import { api } from '../services/api';
import axios from 'axios';
import useStore from '../store/useStore';

const SnacksPage = () => {
  const [snacks, setSnacks] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedSnack, setSelectedSnack] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = async () => {
    try {
      const [snacksRes, studentsRes] = await Promise.all([
        api.getSnacks(),
        api.getStudents()
      ]);
      setSnacks(snacksRes.data);
      setStudents(studentsRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleOrderSubmit = async (orderData) => {
    try {

      const snackId = Number(orderData.snackId);
      const studentId = Number(orderData.studentId);

    //   const snack = snacks.find(s => s.id === parseInt(orderData.snackId));
    //   const student = students.find(s => s.id === parseInt(orderData.studentId));
     const snack = snacks.find(s => Number(s.id) === snackId);
     const student = students.find(s => Number(s.id) === studentId);
     
      if (!snack || !student) {
      console.error("Snack or Student not found", { snackId, studentId, snacks, students });
      return alert("Invalid snack or student selected");
    }

      const newOrder = {
         snackId: snack.id,
      studentId: student.id,
        // snackId: orderData.snackId,
        // studentId: parseInt(orderData.studentId),
        snackName: snack.name,
        quantity: orderData.quantity,
        payableAmount: snack.price * orderData.quantity,
        createdAt: new Date().toISOString()
      };

      await api.createOrder(newOrder);
     await axios.patch(`http://localhost:3001/snacks/${snack.id}`, {
        ordersCount: snack.ordersCount + orderData.quantity
      });

      // Update student total spent
      await axios.patch(`http://localhost:3001/students/${student.id}`, {
        totalSpent: student.totalSpent + newOrder.payableAmount
      });

      alert('Order placed successfully!');
      setSelectedSnack(null);
      loadData(); // Refresh data

    } catch (error) {
      alert('Error placing order');
      console.error('Order Error:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Snacks</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {snacks.map(snack => (
          <SnackCard 
            key={snack.id} 
            snack={snack} 
            onOrder={setSelectedSnack}
          />
        ))}
      </div>
      
      {selectedSnack && (
        <OrderModal 
          snack={selectedSnack}
          students={students}
          onClose={() => setSelectedSnack(null)}
          onSubmit={handleOrderSubmit}
        />
      )}
    </div>
  );
};

export default SnacksPage;