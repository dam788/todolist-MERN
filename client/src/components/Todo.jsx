import React from 'react';

const Todo = () => {
  return (
    <>
      <div className='border-gray-600 bg-white hover:shadow-lg rounded-md pt-6 pb-4 px-4 relative '>
        <i className='fi-rr-cross-small absolute text-gray-400 right-5 text-xl top-0 -right-0 hover:text-gray-600 cursor-pointer'></i>
        <h2 className='text-center font-semibold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
          ESTOY ESCRIBIENDO
        </h2>
        <p className='text-gray-500'>
          lorem ipsum dolor no se que cosa estoy podfsdfsdfsdf dfsdf sdf
          sdf sdf sd fsd f k
        </p>
        <hr className='mt-3' />
        <div className='grid grid-cols-4 mt-3'>
          <i className='fi-rr-pencil text-center text-gray-400 py-1 rounded-sm hover:bg-gray-100 hover:text-gray-600 col-start-2 cursor-pointer'></i>
          <i className='fi-rr-check text-center text-gray-400 py-1 rounded-sm hover:bg-gray-100 hover:text-gray-600 cursor-pointer'></i>
        </div>
      </div>
    </>
  );
};

export default Todo;
