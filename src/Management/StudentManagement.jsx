import React, { useState } from 'react';


const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div>
      <ul className="bg-yellow-200 p-4 rounded-lg shadow-md">
        {students.map((student, index) => (
          <li key={index} className="py-2 flex justify-between items-center">
            <span>{student.name}</span>
            <div>
            
              <button
                onClick={() => onEdit(student)}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 mr-2"
              >
                Edit
              </button>

    
              <button
                onClick={() => onDelete(student.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


const AddStudent = ({ student, onSave, onCancel }) => {
  const [studentInfo, setStudentInfo] = useState(student || { name: '', id: '', age: '' });


  const handleChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };


  const handleSave = () => {
    onSave(studentInfo);
  };

  return (
    <div className="bg-yellow-200 shadow-md rounded-lg p-6 w-full mx-auto my-6">
      <h3 className="text-2xl font-semibold">{student ? 'Edit Student' : 'Add New Student'}</h3>

      <div className="mt-4">
        <label className="block mb-2">Student Name</label>
        <input
          type="text"
          name="name"
          value={studentInfo.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter student name"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Student ID</label>
        <input
          type="text"
          name="id"
          value={studentInfo.id}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter student ID"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Age</label>
        <input
          type="text"
          name="age"
          value={studentInfo.age}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter student age"
        />
      </div>

      <div className="mt-4">
        
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          {student ? 'Save Changes' : 'Add Student'}
        </button>

    
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};


const StudentManagement = () => {
  const [view, setView] = useState('list');
  const [students, setStudents] = useState([
    { name: 'John Doe', id: 'S123', age: '16' },
    { name: 'Jane Smith', id: 'S124', age: '17' },
  ]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [notifications, setNotifications] = useState([]); 

  
  const toggleView = () => {
    setView(view === 'list' ? 'add' : 'list');
  };

  
  const handleSaveStudent = (student) => {
    if (editingStudent) {
      setStudents(
        students.map((s) => (s.id === student.id ? student : s))
      );
      setNotifications([...notifications, 'Student details updated successfully.']);
    } else {
      setStudents([...students, student]);
      setNotifications([...notifications, 'New student added successfully.']);
    }
    setEditingStudent(null);
    setView('list');
  };

  
  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setView('add');
  };


  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    setNotifications([...notifications, 'Student deleted successfully.']);
  };

  
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      
      {notifications.length > 0 && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="mb-2">{notification}</li>
            ))}
          </ul>
          <button
            onClick={clearNotifications}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 mt-2"
          >
            Clear Notifications
          </button>
        </div>
      )}

  
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">
          {view === 'list' ? 'Manage Students' : 'Add Student'}
        </h2>
        <button
          onClick={toggleView}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {view === 'list' ? 'Add Student' : 'Back to List'}
        </button>
      </div>

      
      {view === 'list' ? (
        <StudentList
          students={students}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />
      ) : (
        <AddStudent
          student={editingStudent}
          onSave={handleSaveStudent}
          onCancel={() => setView('list')}
        />
      )}
    </div>
  );
};

export default StudentManagement;
