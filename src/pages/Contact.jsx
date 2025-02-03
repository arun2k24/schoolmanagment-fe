import React, { useState } from 'react';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto my-10 p-6 text-center w-screen bg-green-300">
      <h1 className="text-3xl font-bold mb-8 text-black">Contact Us</h1>

      <div className="flex flex-col md:flex-row justify-around items-center mb-8 space-y-6 md:space-y-0">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-black">School Address</h2>
          <p className='text-black'>123 School Street</p>
          <p className='text-black'>City, State, ZIP Code</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-black">Phone Numbers</h2>
          <p className='text-black'>Main Office: (123) 456-7890</p>
          <p className='text-black'>Admissions: (123) 456-7891</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-black">Email Addresses</h2>
          <p className='text-black'>General: info@school.com</p>
          <p className='text-black'>Admissions: admissions@school.com</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 border-spacing-2"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-bold mb-2">Your Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-violet-500 text-white px-6 py-2 rounded-lg hover:bg-violet-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093725!2d144.96305781531666!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ceed11!2sSchool!5e0!3m2!1sen!2s!4v1649050661007!5m2!1sen!2s"
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          title="School Location"
        ></iframe>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-bold mb-4">Message Sent Successfully!</h2>
            <p>Thank you for contacting us. We will get back to you shortly.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
