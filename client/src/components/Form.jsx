import { useState, useContext, useEffect } from 'react';
import TodoContext from '../context/todoContext/todoContext';
import Swal from 'sweetalert2';

const Form = () => {
  const {
    tasks,
    form,
    taskedit,
    editTask,
    updateTask,
    addTodo,
    toogleForm,
    cleanTasks,
  } = useContext(TodoContext);

  const taskNull = taskedit.length === 0;

  const complete = tasks.some((task) => task.complete === true);

  const [add, setAdd] = useState({
    title: '',
    description: '',
  });

  //? modo edicion
  useEffect(() => {
    !taskNull &&
      setAdd({
        title: taskedit.title,
        description: taskedit.description,
      });
  }, [taskedit, taskNull]);

  const handleAdd = ({ target }) => {
    setAdd({
      ...add,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (add.title.length < 4 || add.description.length < 8) {
      return null;
    }

    // revisa si es edicion o nueva tarea
    if (taskNull) {
      // nueva tarea
      addTodo(add);
    } else {
      // editar campos y enviar
      taskedit.title = add.title;
      taskedit.description = add.description;

      updateTask(taskedit);
      editTask('');
    }
    setAdd({ title: '', description: '' });
    toogleForm();
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: true,
  });

  const handleClean = () => {
    swalWithBootstrapButtons
      .fire({
        title: 'Clean the Completes?',
        text: 'Do you not will be able to reverse the changes!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'no',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          cleanTasks(tasks);
          swalWithBootstrapButtons.fire(
            'Deleted!',
            `Clean the complete tasks 🤗`,
            'success'
          );
        }
      });
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-6 mx-2 justify-content-stretch'>
      {!form ? (
        <div className='md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-6 xl:col-start-3 xl:col-end-5 grid grid-cols-6 gap-2'>
          <button
            className='text-white bg-gradient-to-r from-green-400 to-blue-500 p-4 mt-4 text-xl opacity-90 hover:opacity-100 shadow-md hover:shadow-lg rounded-full col-start-1 col-end-6 z-10 '
            onClick={() => toogleForm()}
          >
            Add a new task
          </button>
          {complete ? (
            <button
              className='text-white bg-gradient-to-r from-green-400 to-blue-500 py-4 px-5 mt-4 text-xl opacity-90 hover:opacity-100 shadow-md hover:shadow-lg rounded-full w-16 place-self-end z-0 '
              onClick={handleClean}
            >
              <i className='fi-rr-broom'></i>
            </button>
          ) : (
            <button
              className='text-gray-200 bg-gray-300 py-4 px-5 mt-4 text-xl opacity-100 rounded-full w-16 place-self-end z-0 cursor-default'
              onClick={handleClean}
              disabled
            >
              <i className='fi-rr-broom'></i>
            </button>
          )}
        </div>
      ) : (
        <form
          className='bg-gray-300 md:col-start-2 md:col-end-6  rounded-md lg:col-start-3 lg:col-end-5 pb-10'
          onSubmit={handleSubmit}
        >
          <h2 className='text-gray-500 font-semibold text-center text-2xl p-2'>
            {taskNull ? 'Add a new task' : `Edit task "${taskedit.title}"`}
          </h2>

          <div className='px-4 pt-4'>
            <label
              htmlFor='title'
              className='block mr-2 text-gray-500 font-semibold'
            >
              Title
            </label>
            <input
              name='title'
              type='text'
              id='title'
              className='w-full p-1 bg-gray-300 focus:bg-gray-200'
              placeholder='write a title...'
              onChange={handleAdd}
              value={add.title}
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
              name='description'
              type='text'
              id='description'
              className='w-full p-1 bg-gray-300 focus:bg-gray-200'
              placeholder='write a short description...'
              onChange={handleAdd}
              value={add.description}
            />
          </div>
          <div className='px-4 pt-6 relative flex justify-center'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 py-2 rounded-full text-white absolute w-16 h-16 opacity-90 hover:opacity-100 hover:shadow-lg'>
              {taskNull ? (
                <i className='fi-rr-plus text-2xl'></i>
              ) : (
                <i className='fi-rr-pencil text-2xl'></i>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
