import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const handleAdminSubmit = () => {
    console.log("handleAdminSubmit");
    navigate("/Admin");
  };

  return (
    <div className="bg-green-200 w-screen h-screen flex items-center justify-center">
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://i.pinimg.com/originals/94/09/7e/94097e458fbb22184941be57aaab2c8f.png"
          alt="Ryan International School"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="hero bg-green-200 min-h-screen flex items-center justify-center">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6 text-xl text-rose-500 font-semibold">Ryan International School</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="button"
                    onClick={handleAdminSubmit}
                    className="btn btn-primary"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

   
        </div>
  
  );
}

export default Admin;
