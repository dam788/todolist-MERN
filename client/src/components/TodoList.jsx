import { useContext, useEffect } from 'react';
import TodoContext from '../context/todoContext/todoContext';
import Todo from './Todo';

import { tasksFilter } from '../helpers/filter';

const TodoList = () => {
  const { tasks, filter, getTodos } = useContext(TodoContext);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // filtrado con funcion a través de helpers
  const getTasks = tasksFilter(tasks, filter);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2'>
        {tasks.length < 1 ? (
          <div className='text-gray-400 font-semibold text-2xl text-center col-span-full bg-gray-100 rounded-md p-2'>
            😸 Get started adding a new task
          </div>
        ) : (
          getTasks.map((task) => {
            return <Todo key={task._id} task={task} />;
          })
        )}
      </div>
    </>
  );
};

export default TodoList;
