// src/components/snacks/OrderModal.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const OrderModal = ({ snack, students, onClose, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const submitOrder = (data) => {
    onSubmit({
      snackId: snack.id,
      studentId: data.studentId,
      quantity: parseInt(data.quantity)
    });
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Order {snack.name}</h2>
        
        <form onSubmit={handleSubmit(submitOrder)}>
          <div className="mb-4">
            <label className="block mb-2">Select Student</label>
            <select 
              {...register('studentId', { required: 'Student is required' })}
              className="w-full border p-2 rounded"
            >
              <option value="">Choose student...</option>
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
            {errors.studentId && <p className="text-red-500 text-sm">{errors.studentId.message}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Quantity (1-5)</label>
            <input 
              type="number" 
              {...register('quantity', { 
                required: 'Quantity is required',
                min: { value: 1, message: 'Min 1' },
                max: { value: 5, message: 'Max 5' }
              })}
              className="w-full border p-2 rounded"
            />
            {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
          </div>
          
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Place Order
            </button>
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;