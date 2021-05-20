import React from 'react';

const Filter = () => {
  return (
    <div>
      <div className='flex justify-center mt-14'>
        <span className='text-green-400 text-lg cursor-pointer hover:text-blue-500 select-none'>
          All
        </span>
        <span className='text-gray-300 mx-4 select-none cursor-default'>
          |
        </span>

        <span className='text-gray-400 text-lg cursor-pointer hover:text-gray-600 select-none'>
          Completed
        </span>
        <span className='text-gray-300 mx-4 select-none cursor-default'>
          |
        </span>
        <span className='text-gray-400 text-lg cursor-pointer hover:text-gray-600 select-none'>
          Incompleted
        </span>
      </div>
      <hr className='mt-1 border-gray-300 mx-2' />
      <h3 className='text-gray-300 text-5xl font-black text-center mb-8 mt-6 select-none'>
        Tasks
      </h3>
    </div>
  );
};

export default Filter;
