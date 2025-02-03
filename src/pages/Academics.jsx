import React from 'react';

function Academics() {
  return (
    <>
      <h2 className="text-red-600 font-bold h-20 w-screen pt-5 text-3xl text-center">
        Academics
      </h2>
      <div className="flex flex-nowrap gap-10 px-10 py-20 overflow-x-auto">
        {[
          {
            title: 'Pre-Primary',
            image:
              'https://tse2.mm.bing.net/th?id=OIP.gLoWgQhP2TXmeCJAWP_VnwHaJn&pid=Api&P=0&h=180',
            bgColor: 'bg-rose-300',
          },
          {
            title: 'Primary',
            image:
              'https://tse4.mm.bing.net/th?id=OIP.ZSJnXgNSZe6BYbTZ8YttywHaLT&pid=Api&P=0&h=180',
            bgColor: 'bg-violet-300',
          },
          {
            title: 'Middle School',
            image:
              'https://tse1.mm.bing.net/th?id=OIP.AgSEnk-syA2eZCFUZYeXrAHaLH&pid=Api&P=0&h=180',
            bgColor: 'bg-green-300',
          },
          {
            title: 'Secondary',
            image:
              'https://tse3.mm.bing.net/th?id=OIP.CdCBHghVSFo33i1WsW5zXwHaHa&pid=Api&P=0&h=180',
            bgColor: 'bg-red-400',
          },
          {
            title: 'H Secondary',
            image:
              'https://tse3.mm.bing.net/th?id=OIP.LwSIy19ViJ9EpsYpYUXthwHaJ3&pid=Api&P=0&h=180',
            bgColor: 'bg-orange-300',
          },
        ].map(({ title, image, bgColor }, index) => (
          <div
            key={index}
            className={`${bgColor} card w-80 h-96 p-6 shadow-xl flex flex-col items-center`}
          >
            <figure className="w-full h-48">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full rounded-md"
              />
            </figure>
            <div className="card-body text-center flex-grow flex flex-col justify-between">
              <h2 className="card-title text-red-600">{title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Academics;
