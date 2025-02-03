import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto my-10 p-5 text-center bg-violet-200 w-screen h-30">
      <div className='text-black font-bold h-full w-screen pt-5 text-2xl text-center'>
      <h2 className='text-center'>Principel</h2>
        <div className="md:w-screen h-full  flex items-center me-12">
         <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"/>
       
        </div>

    
        <div className="w-full md:pl-10 mt-5 md:mt-0">
        
          <h1 className="text-1xl justify-center font-bold mb-2 text-center">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to our school management system! Our mission is to provide a seamless and engaging educational experience for students, teachers, and parents. 
            We believe in fostering an environment that encourages learning and personal growth while efficiently managing school operations.
          </p>
          <p className="text-lg mb-4">
            Our platform features real-time attendance tracking, easy fee payments, comprehensive dashboards for admins, teachers, and students, and much more. 
            We are dedicated to enhancing communication and simplifying processes for everyone involved in the educational journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
