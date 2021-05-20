import React from 'react';
import Todo from './Todo';

const TodoList = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2'>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </>
  );
};

export default TodoList;
