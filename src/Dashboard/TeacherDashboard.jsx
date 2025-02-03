import React, { useState, useEffect } from 'react';

function TeacherDashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [teacherInfo, setTeacherInfo] = useState({
    name: 'John Doe',
    id: 'T123456',
    email: 'john.doe@example.com',
    subjects: ['Math', 'Science', 'English'],
  });
  const [newSubject, setNewSubject] = useState('');
  const [notifications, setNotifications] = useState([
    'Class timings updated.',
    'New assignment added for Math.',
    'Meeting scheduled for Friday at 3 PM.',
  ]);

  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false); 
  };

  
  const handleAddSubject = () => {
    if (newSubject && !teacherInfo.subjects.includes(newSubject)) {
      setTeacherInfo((prev) => ({
        ...prev,
        subjects: [...prev.subjects, newSubject],
      }));
      setNewSubject('');
    }
  };

  const handleRemoveSubject = (subjectToRemove) => {
    setTeacherInfo((prev) => ({
      ...prev,
      subjects: prev.subjects.filter((subject) => subject !== subjectToRemove),
    }));
  };


  const handleAddNotification = (newNotification) => {
    setNotifications((prev) => [newNotification, ...prev]);
  };

  
  useEffect(() => {

    setTimeout(() => {
      handleAddNotification('Admin added a new notification for teachers!');
    }, 5000);
  }, []);

  return (
    <div className="flex w-screen">
      <aside className="w-1/5 bg-blue-300 text-black p-6">
        <h2 className="text-2xl font-bold mb-5">Teacher Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <a href="#profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</a>
          </li>
          <li>
            <a href="#subjects" className="block py-2 px-4 rounded hover:bg-gray-700">Subjects</a>
          </li>
          <li>
            <a href="#notifications" className="block py-2 px-4 rounded hover:bg-gray-700">Notifications</a>
          </li>
        </ul>
      </aside>

      <main className="w-4/5 bg-white p-10">
      
        <div className="bg-yellow-200 shadow-md rounded-lg p-6 w-full mx-auto my-6" id="profile">
          <h2 className="text-2xl text-black font-semibold mt-7">Profile</h2>

          {isEditing ? (
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label>Name:</label>
                <input
                  type="text"
                  value={teacherInfo.name}
                  onChange={(e) => setTeacherInfo({ ...teacherInfo, name: e.target.value })}
                  className="border p-1 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label>Email:</label>
                <input
                  type="email"
                  value={teacherInfo.email}
                  onChange={(e) => setTeacherInfo({ ...teacherInfo, email: e.target.value })}
                  className="border p-1 rounded w-full"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-700 mr-2">
                Save
              </button>
              <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">
                Cancel
              </button>
            </form>
          ) : (
            <>
              <h3 className="font-bold text-black">{teacherInfo.name}</h3>
              <p className='text-black'>ID: {teacherInfo.id}</p>
              <p className='text-black'>Email: {teacherInfo.email}</p>
              <div className="mt-4 flex space-x-4">
                <button onClick={handleEdit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Edit
                </button>
              </div>
            </>
          )}
        </div>

        
        <div id="subjects" className="mt-10">
          <h2 className="text-2xl text-black font-semibold">Subjects</h2>

          <div className="mb-4 text-black">
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              placeholder="Add a new subject"
              className="border p-2 rounded mr-2"
            />
            <button
              onClick={handleAddSubject}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Add Subject
            </button>
          </div>

          <ul className="bg-yellow-200 p-4 rounded-lg shadow-md">
            {teacherInfo.subjects.map((subject, index) => (
              <li key={index} className="flex justify-between items-center py-2">
                {subject}
                <button
                  onClick={() => handleRemoveSubject(subject)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

      
        <div id="notifications" className="mt-10">
          <h2 className="text-2xl text-black font-semibold">Notifications</h2>
          <ul className="bg-yellow-200 p-4 text-black rounded-lg shadow-md">
            {notifications.map((notification, index) => (
              <li key={index} className="py-2 border-b last:border-none">
                {notification}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default TeacherDashboard;
