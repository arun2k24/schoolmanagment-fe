import React, { useState } from 'react';

const SubjectList = () => {
  
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics', teacher: 'Mr. John' },
    { id: 2, name: 'Science', teacher: 'Ms. Jane' },
    { id: 3, name: 'History', teacher: 'Mr. Smith' }
  ]);
  const [newSubject, setNewSubject] = useState({ name: '', teacher: '' });

  
  const handleAddSubject = () => {
    const newSubjectWithId = { ...newSubject, id: subjects.length + 1 };
    setSubjects([...subjects, newSubjectWithId]);
    setNewSubject({ name: '', teacher: '' });
  };

  
  const handleDeleteSubject = (id) => {
    setSubjects(subjects.filter(subject => subject.id !== id));
  };
  
  const handleSaveSubject = (id, updatedName, updatedTeacher) => {
    setSubjects(subjects.map(subject =>
      subject.id === id
        ? { ...subject, name: updatedName, teacher: updatedTeacher }
        : subject
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subject List</h2>

    
      <div className="mb-4">
        <input
          type="text"
          placeholder="Subject Name"
          value={newSubject.name}
          onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
          className="border px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Teacher Name"
          value={newSubject.teacher}
          onChange={(e) => setNewSubject({ ...newSubject, teacher: e.target.value })}
          className="border px-4 py-2 mr-2"
        />
        <button
          onClick={handleAddSubject}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          Add Subject
        </button>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Subject Name</th>
            <th className="py-2">Teacher</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td className="border px-4 py-2">{subject.id}</td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  value={subject.name}
                  onChange={(e) => subject.name = e.target.value} 
                  className="border px-4 py-2"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  value={subject.teacher}
                  onChange={(e) => subject.teacher = e.target.value} 
                  className="border px-4 py-2"
                />
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleSaveSubject(subject.id, subject.name, subject.teacher)}
                  className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => handleDeleteSubject(subject.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectList;
