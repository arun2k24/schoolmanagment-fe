import React from 'react';

const SubjectList = () => {
  const subjects = [
    { id: 1, name: 'Mathematics', teacher: 'Mr. John' },
    { id: 2, name: 'Science', teacher: 'Ms. Jane' },
    { id: 3, name: 'History', teacher: 'Mr. Smith' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subject List</h2>
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
              <td className="border px-4 py-2">{subject.name}</td>
              <td className="border px-4 py-2">{subject.teacher}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectList;