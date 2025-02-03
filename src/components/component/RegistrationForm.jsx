import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    setSuccess(true);

    console.log('Registration successful:', { username, email, password });

    
    setTimeout(() => {
      navigate('/school-login');
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-red-200">
  
      <div className="w-1/2 h-full hidden md:block">
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/141/861/original/register-now-icon-in-comic-style-registration-cartoon-illustration-on-isolated-background-member-notification-splash-effect-sign-business-concept-vector.jpg"
          alt="Registration Illustration"
          className="w-full h-full object-cover"
        />
      </div>

    
      <div className="w-full md:w-1/2 h-full p-6 bg-white rounded-lg shadow-md flex flex-col justify-center">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-bold">Register</h2>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4">
            Registration successful! Redirecting to login...
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border rounded p-2 w-full bg-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded p-2 w-full bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded p-2 w-full bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border rounded p-2 w-full bg-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            disabled={success} 
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
