import React from 'react'

function DirectorsMessage() {
  return (
    <div className="bg-gray-200 py-10 w-screen h-auto">
      <div 
        className="container mx-auto w-full h-screen flex flex-col lg:flex-row items-center border-purple-200 justify-center lg:justify-between px-6 lg:px-12 bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url('https://www.obsbusiness.school/sites/obsbusiness.school/files/images/diferencia-entre-gerente-y-director.jpg')` }}
      >
        <div className="lg:ml-12 w-screen bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Director's Message</h2>
          <p className="text-black mb-4">
           Our mission is not merely to impart knowledge but to ignite a lifelong love for learning, foster creativity, and develop essential life skills that will empower our students to thrive in an ever-evolving world.
          </p>
          <p className="text-black mb-4" >To the parents and guardians, I extend my gratitude for your constant support and trust in our vision. Your involvement in your child’s education and active participation in school activities strengthen the foundation of their success.</p>
          <p className="text-black mb-4" >To the students, I encourage you to be curious, fearless in your pursuit of knowledge, and compassionate in your interactions. Remember that education is not just about grades but about developing a thirst for learning that lasts a lifetime.</p>
        </div>
      </div>
    </div>
  )
}

export default DirectorsMessage;
