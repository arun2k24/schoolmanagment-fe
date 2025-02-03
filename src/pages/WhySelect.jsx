import React from 'react';

function WhySelect() {
  return (
    <div className="bg-white py-12 border-x-rose-300">
      <h2 className="text-center text-red-500  text-2xl font-bold mb-10">Why Choose Rayan International School</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
        
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>We strive to create a positive learning environment at Rayan International School  .</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>We have a knowledgeable and enthusiastic staff.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>Our parents and community are wonderfully involved.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>The curriculum followed is in accordance with the CBSE.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>Smart boards are used in each class.</p>
            </div>
          </div>

        
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>We utilize project-based learning.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>Our labs are well equipped.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>Our library is a treasure trove of books.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>Robotics, Edu Sports, Karate are taught at Rayan International School.</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-2">✓</span>
              <p className='text-black'>At Rayan International School, the child has a safe and secure environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhySelect;
