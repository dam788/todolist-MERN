import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
};

const Form = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-6 mx-2 justify-content-stretch'>
      <form
        className='bg-blue-100 md:col-start-2 md:col-end-6  rounded-md lg:col-start-3 lg:col-end-5 pb-10'
        onSubmit={handleSubmit}
      >
        <h2 className='text-gray-500 font-semibold text-center text-2xl p-2'>
          Add a new task
        </h2>

        <div className='px-4 pt-4'>
          <label
            htmlFor='title'
            className='block mr-2 text-gray-500 font-semibold'
          >
            Title
          </label>
          <input
            type='text'
            id='title'
            className='w-full p-1 bg-blue-100 focus:bg-white'
            placeholder='write a title...'
          />
        </div>
        <div className='px-4 pt-4'>
          <label
            htmlFor='description'
            className='block mr-2 text-gray-500 font-semibold'
          >
            Description
          </label>
          <input
            type='text'
            id='description'
            className='w-full p-1 bg-blue-100 focus:bg-white'
            placeholder='write a short description...'
          />
        </div>
        <div className='px-4 pt-6 relative flex justify-center'>
          <button className='bg-blue-500 py-2 rounded-full text-white absolute w-16 h-16 opacity-80 hover:opacity-100 hover:shadow-lg'>
            <i className='fi-rr-plus text-2xl'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
