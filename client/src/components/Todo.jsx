import React, { useContext } from 'react';
import TodoContext from '../context/todoContext/todoContext';
import Swal from 'sweetalert2';

const Todo = ({ task }) => {
  let { _id, title, description, complete, date } = task;

  const { editTask, deleteTodo, completeTodo, toogleForm } =
    useContext(TodoContext);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: true,
  });

  const handleDelete = () => {
    swalWithBootstrapButtons
      .fire({
        title: 'Delete task?',
        text: 'Do you not will be able to reverse the changes!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'no',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteTodo(_id);
          swalWithBootstrapButtons.fire(
            'Deleted!',
            `Delete the task "${title}" 🤗`,
            'success'
          );
        }
      });
  };

  const handleComplete = () => {
    if (complete) {
      task.complete = false;
      return completeTodo(task);
    } else if (complete === false) {
      task.complete = true;
      return completeTodo(task);
    }
  };

  const handleEdit = () => {
    if (complete) return null;
    editTask(task);
    toogleForm();
  };

  return (
    <>
      {complete ? (
        <div className='flex flex-col border-gray-600 bg-white shadow-sm hover:shadow-lg rounded-md pt-6 pb-14 px-4 relative items-center'>
          <i
            className='fi-rr-cross-small absolute text-gray-400 right-5 text-xl top-0 -right-0 hover:text-gray-600 cursor-pointer'
            onClick={handleDelete}
          ></i>
          <h2 className='text-center text-xl mb-2 text-gray-400 to-blue-500 line-through font-bold'>
            {title}
          </h2>

          <p className='text-gray-300 line-through'>{description}</p>
          <p className='text-gray-300 text-sm'>{date.substring(10, -9)}</p>
          <div className='flex mt-10 absolute bottom-0 justify-center'>
            <i
              className='fi-rr-pencil text-center text-sm text-gray-300 py-1 rounded-sm p-2 m-2 select-none'
              onClick={handleEdit}
            >
              edit
            </i>

            <i
              className='fi-rr-check text-center text-green-400 py-1 rounded-sm hover:bg-gray-100 hover:text-green-600 hover:bg-green-100 cursor-pointer p-2 m-2 font-semibold select-none'
              onClick={handleComplete}
            >
              complete
            </i>
          </div>
        </div>
      ) : (
        <div className='flex flex-col border-gray-600 bg-white shadow-sm hover:shadow-lg rounded-md pt-6 pb-14 px-4 relative items-center'>
          <i
            className='fi-rr-cross-small absolute text-gray-400 right-5 text-xl top-0 -right-0 hover:text-gray-600 cursor-pointer'
            onClick={handleDelete}
          ></i>
          <h2 className='text-center font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 '>
            {title}
          </h2>
          <p className='text-gray-500'>{description}</p>
          <p className='text-gray-400 text-sm'>{date.substring(10, -9)}</p>
          <div className='flex mt-10 absolute bottom-0 justify-center'>
            <i
              className='fi-rr-pencil text-center text-sm text-gray-400 py-1 rounded-sm hover:bg-gray-200 hover:text-gray-600 cursor-pointer p-2 m-2 select-none'
              onClick={handleEdit}
            >
              edit
            </i>

            <i
              className='fi-rr-check text-center text-gray-400 py-1 rounded-sm hover:bg-gray-200 hover:text-gray-600 cursor-pointer p-2 m-2 select-none'
              onClick={handleComplete}
            >
              incomplete
            </i>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
