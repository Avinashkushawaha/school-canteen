import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SnacksPage from './pages/SnacksPage';
import StudentsPage from './pages/StudentsPage';
import StudentDetailsPage from './pages/StudentDetailsPage';
import CreateStudentPage from './pages/CreateStudentPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <div className="container mx-auto flex gap-6">
            <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium">Snacks</Link>
            <Link to="/students" className="text-blue-500 hover:text-blue-700 font-medium">Students</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<SnacksPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/create" element={<CreateStudentPage />} />
          <Route path="/students/:id" element={<StudentDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
