
import React, { useState } from 'react';
import SubjectList from '../components/component/SubjectList';
import AddSubjectList from '../components/component/AddSubjectList'; 

const SubjectManagement = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics', teacher: 'Mr. John' },
    { id: 2, name: 'Science', teacher: 'Ms. Jane' },
    { id: 3, name: 'History', teacher: 'Mr. Smith' }
  ]);
  
  const [view, setView] = useState('list'); 
  const [editingSubject, setEditingSubject] = useState(null); 
  
  const handleAddSubject = () => {
    setEditingSubject(null);
    setView('add');
  };

  const handleEditSubject = (subject) => {
    setEditingSubject(subject);
    setView('add');
  };

  const handleDeleteSubject = (subjectId) => {
    setSubjects(subjects.filter((subject) => subject.id !== subjectId));
  };

  const handleSaveSubject = (subject) => {
    if (editingSubject) {
      setSubjects(subjects.map((s) => (s.id === subject.id ? subject : s)));
    } else {
      setSubjects([...subjects, { ...subject, id: subjects.length + 1 }]); 
    }
    setView('list');
  };

  const handleCancel = () => {
    setView('list');
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">
          {view === 'list' ? 'Manage Subjects' : 'Add/Edit Subject'}
        </h2>
        {view === 'list' ? (
          <button
            onClick={handleAddSubject}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Subject
          </button>
        ) : (
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Back
          </button>
        )}
      </div>

      {view === 'list' ? (
        <SubjectList
          subjects={subjects}
          onEdit={handleEditSubject}
          onDelete={handleDeleteSubject}
        />
      ) : (
        <AddSubjectList
          subject={editingSubject} 
          onSave={handleSaveSubject}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default SubjectManagement;
