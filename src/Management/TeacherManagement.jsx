import React, { useState } from 'react';
import TeacherList from '../components/component/TeacherList';
import AddTeacher from '../components/component/AddTeacher';

const TeacherManagement = () => {
  const [view, setView] = useState('list');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'John Doe', subject: 'Mathematics' },
    { id: 2, name: 'Jane Smith', subject: 'English' },
    { id: 3, name: 'Mark Wilson', subject: 'Science' },
  ]);

  const handleAddTeacher = () => {
    setSelectedTeacher(null);
    setView('add');
  };

  const handleEditTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setView('edit');
  };

  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const handleSaveTeacher = (teacher) => {
    if (teacher.id) {
      setTeachers(teachers.map((t) => (t.id === teacher.id ? teacher : t)));
    } else {
      setTeachers([...teachers, { ...teacher, id: teachers.length + 1 }]);
    }
    setView('list');
  };

  const handleCancel = () => {
    setView('list');
    setSelectedTeacher(null);
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">
          {view === 'list' ? 'Manage Teachers' : view === 'edit' ? 'Edit Teacher' : 'Add Teacher'}
        </h2>
        <button
          onClick={() => (view === 'list' ? handleAddTeacher() : handleCancel())}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {view === 'list' ? 'Add Teacher' : 'Back to List'}
        </button>
      </div>

      {view === 'list' && (
        <TeacherList
          teachers={teachers}
          onEditTeacher={handleEditTeacher}
          onDeleteTeacher={handleDeleteTeacher}
        />
      )}
      {view !== 'list' && (
        <AddTeacher
          teacher={selectedTeacher}
          onSaveTeacher={handleSaveTeacher}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default TeacherManagement;
