import React from 'react';

const TeacherList = ({ teachers, onEditTeacher, onDeleteTeacher }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td className="py-2 px-4 border-b">{teacher.id}</td>
              <td className="py-2 px-4 border-b">{teacher.name}</td>
              <td className="py-2 px-4 border-b">{teacher.subject}</td>
              <td className="py-2 px-4 border-b space-x-2">
                <button
                  onClick={() => onEditTeacher(teacher)}
                  className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteTeacher(teacher.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
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

export default TeacherList;
