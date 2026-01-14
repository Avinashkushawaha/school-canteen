import { create } from "zustand";

const useStore = create((set) => ({
  snacks: [],
  students: [],
  orders: [],
  
  setSnacks: (snacks) => set({ snacks }),
  setStudents: (students) => set({ students }),
  addStudent: (student) => set((state) => ({ 
    students: [...state.students, student] 
  })),
  addOrder: (order) => set((state) => ({ 
    orders: [...state.orders, order] 
  })),
}));

export default useStore;