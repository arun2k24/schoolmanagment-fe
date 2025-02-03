import React, { useState } from 'react';
import SubjectManagement from '../Management/SubjectManagement';
import TeacherManagement from '../Management/TeacherManagement';
import StudentManagement from '../Management/StudentManagement';

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState('students');
  const [notifications, setNotifications] = useState({ students: [], teachers: [] });
  const [newNotification, setNewNotification] = useState('');
  const [selectedUser, setSelectedUser] = useState('students');

  const renderView = () => {
    switch (currentView) {
      case 'students':
        return <StudentManagement />;
      case 'subjects':
        return <SubjectManagement />;
      case 'teachers':
        return <TeacherManagement />;
      case 'notifications':
        return renderNotifications();
      default:
        return <StudentManagement />;
    }
  };

  const handleAddNotification = () => {
    if (newNotification) {
      setNotifications((prev) => {
        const updatedNotifications = { ...prev };
        updatedNotifications[selectedUser].push(newNotification);
        return updatedNotifications;
      });
      setNewNotification('');
    }
  };

  const renderNotifications = () => (
    <div className="bg-yellow-200 shadow-md rounded-lg p-6 w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Manage Notifications</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-4">
          <button
            className={`py-2 px-4 rounded ${
              selectedUser === 'students' ? 'bg-blue-700' : 'hover:bg-blue-600'
            }`}
            onClick={() => setSelectedUser('students')}
          >
            Students
          </button>
          <button
            className={`py-2 px-4 rounded ${
              selectedUser === 'teachers' ? 'bg-blue-700' : 'hover:bg-blue-600'
            }`}
            onClick={() => setSelectedUser('teachers')}
          >
            Teachers
          </button>
        </div>
        <input
          type="text"
          value={newNotification}
          onChange={(e) => setNewNotification(e.target.value)}
          placeholder="Write a notification"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddNotification}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mt-2"
        >
          Add Notification
        </button>
      </div>
      <ul className="bg-white p-4 rounded-lg shadow-md">
        {notifications[selectedUser].map((notification, index) => (
          <li key={index} className="py-2 flex justify-between items-center border-b">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex w-screen h-screen">
      
      <aside className="w-1/5 bg-blue-500 text-white p-6">
        <h2 className="text-2xl font-bold mb-5">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <button
              className={`block w-full py-2 px-4 rounded ${
                currentView === 'students' ? 'bg-blue-700' : 'hover:bg-blue-600'
              }`}
              onClick={() => setCurrentView('students')}
              title="Manage student-related tasks"
            >
              Manage Students
            </button>
          </li>
          <li>
            <button
              className={`block w-full py-2 px-4 rounded ${
                currentView === 'subjects' ? 'bg-blue-700' : 'hover:bg-blue-600'
              }`}
              onClick={() => setCurrentView('subjects')}
              title="Manage subject-related tasks"
            >
              Manage Subjects
            </button>
          </li>
          <li>
            <button
              className={`block w-full py-2 px-4 rounded ${
                currentView === 'teachers' ? 'bg-blue-700' : 'hover:bg-blue-600'
              }`}
              onClick={() => setCurrentView('teachers')}
              title="Manage teacher-related tasks"
            >
              Manage Teachers
            </button>
          </li>
          <li>
            <button
              className={`block w-full py-2 px-4 rounded ${
                currentView === 'notifications' ? 'bg-blue-700' : 'hover:bg-blue-600'
              }`}
              onClick={() => setCurrentView('notifications')}
              title="View Notifications"
            >
              Notifications
            </button>
          </li>
        </ul>
      </aside>

    
      <main className="w-4/5 p-6 bg-gray-100 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div>{renderView()}</div>
      </main>
    </div>
  );
};

export default AdminDashboard;
