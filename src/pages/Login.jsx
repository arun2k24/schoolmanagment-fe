import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student');
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate(); 

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdminLogin) {
      console.log('Logging in as Admin');
      navigate('/admin-dashboard');
    } else if (role === 'student') {
      console.log('Logging in as Student');
      navigate('/student-dashboard');
    } else if (role === 'teacher') {
      console.log('Logging in as Teacher');
      navigate('/teacher-dashboard');
    }
  };

  const toggleAdminLogin = () => {
    setIsAdminLogin(!isAdminLogin);
  };

  return (
    <div
      className="flex h-screen bg-cover justify-center items-center bg-center"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/1172344.jpg')`,
      }}
    >
      <div className="w-full lg:w-1/2 flex items-center justify-center h-full p-4">
        <div className="w-full max-w-md bg-white bg-opacity-80 p-8 border border-gray-300 shadow-lg rounded-md">
          <h2 className="text-3xl font-bold text-center mb-6">
            {isAdminLogin ? 'Admin Login' : 'Login'}
          </h2>

  
          <form onSubmit={handleSubmit}>
            {!isAdminLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Login as:
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="student"
                      checked={role === 'student'}
                      onChange={handleRoleChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2">Student</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="teacher"
                      checked={role === 'teacher'}
                      onChange={handleRoleChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2">Teacher</span>
                  </label>
                </div>
              </div>
            )}

      
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>

          
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>

          
            <div className="mb-4 text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

          
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          
          <div className="text-center mt-4">
            <button
              onClick={toggleAdminLogin}
              className="text-sm text-indigo-600 hover:underline"
            >
              {isAdminLogin
                ? 'Switch to Student/Teacher Login'
                : 'Switch to Admin Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
