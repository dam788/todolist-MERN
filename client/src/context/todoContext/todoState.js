import { useReducer } from 'react';
import TodoContext from './todoContext';
import { todoReducer } from './todoReducer';
import axios from 'axios';
import {
  GET_TODO,
  ERROR_TODO,
  DELETE_TODO,
  ADD_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  TOGGLE_FORM,
  FILTER_SELECT,
  CLEAN_TODO,
} from '../type';

const InitialStale = {
  tasks: [],
  taskedit: [],
  error: false,
  form: false,
  filter: 'All',
};

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, InitialStale);

  const getTodos = async () => {
    const res = await axios.get('/tasks');
    try {
      dispatch({
        type: GET_TODO,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_TODO,
      });
    }
  };

  const addTodo = async (tasks) => {
    try {
      const res = await axios.post('/tasks', tasks);
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_TODO,
      });
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: ERROR_TODO,
      });
    }
  };

  const completeTodo = async (task) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      await axios.patch(`/tasks/${task._id}`, task, config);
      dispatch({
        type: COMPLETE_TODO,
        payload: task,
      });
    } catch (error) {
      dispatch({
        type: ERROR_TODO,
      });
    }
  };

  const editTask = (task) => {
    dispatch({
      type: EDIT_TODO,
      payload: task,
    });
  };

  const updateTask = async (task) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      await axios.patch(`/tasks/${task._id}`, task, config);
      dispatch({
        type: UPDATE_TODO,
        payload: task,
      });
    } catch (error) {
      dispatch({
        type: ERROR_TODO,
      });
    }
  };

  const toogleForm = () => {
    dispatch({
      type: TOGGLE_FORM,
    });
  };

  const filterSelect = (selection) => {
    dispatch({
      type: FILTER_SELECT,
      payload: selection,
    });
  };

  const cleanTasks = async (task) => {
    try {
      await axios.delete('/tasks', { complete: true });

      dispatch({
        type: CLEAN_TODO,
        payload: task.complete,
      });
    } catch (error) {
      dispatch({
        type: ERROR_TODO,
      });
    }
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          // estado
          tasks: state.tasks,
          taskedit: state.taskedit,
          form: state.form,
          filter: state.filter,
          //actionType que ejecuta el reducer
          getTodos,
          deleteTodo,
          addTodo,
          completeTodo,
          editTask,
          updateTask,
          toogleForm,
          filterSelect,
          cleanTasks,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};
