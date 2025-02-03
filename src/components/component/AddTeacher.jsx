import React, { useState, useEffect } from 'react';

const AddTeacher = ({ teacher, onSaveTeacher, onCancel }) => {
  const [formData, setFormData] = useState({
    id: teacher?.id || '',
    name: teacher?.name || '',
    subject: teacher?.subject || '',
  });

  useEffect(() => {
    if (teacher) {
      setFormData(teacher);
    }
  }, [teacher]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveTeacher(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-yellow-200 p-4 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex space-x-4">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Save
        </button>
        <button onClick={onCancel} type="button" className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddTeacher;
