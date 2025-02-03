import React, { useState } from 'react';

function StudentDashboard({ studentId }) {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    studentId: 'S12345',
    phoneNumber: '123-456-7890',
    age: '16',
    sex: 'Male',
    address: '123 Main St, City, Country',
    fatherName: 'Mr. John Sr.',
    motherName: 'Mrs. Jane Doe',
    fatherOccupation: 'Engineer',
    motherOccupation: 'Teacher',
    picture: null,
  });

  const [subjects, setSubjects] = useState([
    { subject: 'Math', teacher: 'Mr. Smith', time: 'Mon, Wed, Fri - 10:00 AM' },
    { subject: 'Science', teacher: 'Ms. Johnson', time: 'Tue, Thu - 2:00 PM' },
    { subject: 'English', teacher: 'Mr. Williams', time: 'Mon, Fri - 1:00 PM' },
  ]);

  const [notifications, setNotifications] = useState([
    {
      message: 'Upcoming math exam on Monday.',
      date: '2025-01-20',
    },
    {
      message: 'Science project submission deadline extended to Friday.',
      date: '2025-01-22',
    },
    {
      message: 'Parent-teacher meeting scheduled for next week.',
      date: '2025-01-25',
    },
  ]);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, picture: file });
  };

  const handleSaveProfile = () => {
    alert('Profile updated successfully!');
  };

  const handleDeleteProfile = () => {
    setProfile({
      name: '',
      studentId: '',
      phoneNumber: '',
      age: '',
      sex: '',
      address: '',
      fatherName: '',
      motherName: '',
      fatherOccupation: '',
      motherOccupation: '',
      picture: null,
    });
  };

  return (
    <div className="flex w-screen">
      
      <aside className="w-1/5 bg-green-300 text-white p-6">
        <h2 className="text-2xl font-bold mb-5">Student Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <a href="#profile" className="block py-2 px-4 rounded hover:bg-gray-700">
              Profile
            </a>
          </li>
          <li>
            <a href="#subjects" className="block py-2 px-4 rounded hover:bg-gray-700">
              Subjects
            </a>
          </li>
          <li>
            <a href="#notifications" className="block py-2 px-4 rounded hover:bg-gray-700">
              Notifications
            </a>
          </li>
        </ul>
      </aside>

      
      <main className="w-4/5 p-6 bg-white">
      
        <div className="bg-yellow-200 shadow-md rounded-lg p-6 w-full mx-auto my-6" id="profile">
          <h2 className="text-2xl font-semibold mt-7">Profile</h2>

      
          <div className="flex flex-col items-center mt-4 bg-black">
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-3 p-2 border rounded"
            />
            {profile.picture && (
              <img
                src={URL.createObjectURL(profile.picture)}
                alt="Profile"
                className="mt-4 rounded-full w-24 h-24 object-cover"
              />
            )}
          </div>

          
          <div className="mt-5">
            <div className="space-y-4">
              <div>
                <label className="block font-semibold">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={profile.age}
                  onChange={handleProfileChange}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold">Sex:</label>
                <select
                  name="sex"
                  value={profile.sex}
                  onChange={handleProfileChange}
                  className="w-full p-2 border rounded bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold">Father's Name:</label>
                <input
                  type="text"
                  name="fatherName"
                  value={profile.fatherName}
                  onChange={handleProfileChange}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold">Mother's Name:</label>
                <input
                  type="text"
                  name="motherName"
                  value={profile.motherName}
                  onChange={handleProfileChange}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold">Contact Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={profile.phoneNumber}
                  onChange={handleProfileChange}
                  className="w-full p-2 border rounded bg-white"
                />
              </div>
            </div>

            <button
              onClick={handleSaveProfile}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Save Profile
            </button>
            <button
              onClick={handleDeleteProfile}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Delete Profile
            </button>
          </div>
        </div>

  
        <div id="subjects" className="mt-10">
          <h2 className="text-2xl font-semibold">Subjects</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border text-black border-gray-300 mt-5">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Subject</th>
                  <th className="py-2 px-4 border-b text-left">Teacher</th>
                  <th className="py-2 px-4 border-b text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{subject.subject}</td>
                    <td className="py-2 px-4 border-b">{subject.teacher}</td>
                    <td className="py-2 px-4 border-b">{subject.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
        <div id="notifications" className="mt-10">
          <h2 className="text-2xl text-black font-semibold">Notifications</h2>
          <div className="mt-5">
            {notifications.length > 0 ? (
              <ul>
                {notifications.map((notification, index) => (
                  <li key={index} className="bg-blue-100 p-4 rounded text-black mb-4">
                    <p>{notification.message}</p>
                    <small className="text-black">{notification.date}</small>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No notifications available.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
