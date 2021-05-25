import { useContext } from 'react';
import TodoContext from '../context/todoContext/todoContext';

const Filter = () => {
  const { filter, filterSelect } = useContext(TodoContext);

  const handleFIlter = ({ target }) => {
    filterSelect(target.innerText);
  };

  return (
    <div>
      <div className='flex justify-center mt-14'>
        {filter === 'All' ? (
          <span
            className='text-green-500 text-lg cursor-pointer hover:text-blue-500 select-none'
            onClick={handleFIlter}
          >
            All
          </span>
        ) : (
          <span
            className='text-gray-400 text-lg cursor-pointer hover:text-gray-600 select-none'
            onClick={handleFIlter}
          >
            All
          </span>
        )}

        <span className='text-gray-300 mx-4 select-none cursor-default'>
          |
        </span>

        {filter === 'Completed' ? (
          <span
            className='text-green-500 text-lg cursor-pointer hover:text-blue-500 select-none'
            onClick={handleFIlter}
          >
            Completed
          </span>
        ) : (
          <span
            className='text-gray-400 text-lg cursor-pointer hover:text-gray-600 select-none'
            onClick={handleFIlter}
          >
            Completed
          </span>
        )}

        <span className='text-gray-300 mx-4 select-none cursor-default'>
          |
        </span>

        {filter === 'Incompleted' ? (
          <span
            className='text-green-500 text-lg cursor-pointer hover:text-blue-500 select-none'
            onClick={handleFIlter}
          >
            Incompleted
          </span>
        ) : (
          <span
            className='text-gray-400 text-lg cursor-pointer hover:text-gray-600 select-none'
            onClick={handleFIlter}
          >
            Incompleted
          </span>
        )}
      </div>
      <hr className='mt-1 border-gray-300 mx-2' />
      <h3 className='text-gray-300 text-4xl font-black text-center mb-8 mt-6 select-none'>
        {filter} Tasks
      </h3>
    </div>
  );
};

export default Filter;
