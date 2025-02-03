import React, { useState } from 'react';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');

  const handleAddStudent = () => {
    console.log(`Adding student: ${name}, Class: ${studentClass}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <input 
        type="text" 
        placeholder="Student Name" 
        className="border rounded p-2 w-full mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Class" 
        className="border rounded p-2 w-full mb-4"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
      />
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddStudent}
      >
        Add Student
      </button>
    </div>
  );
};

export default AddStudent;
