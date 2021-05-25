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

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case ERROR_TODO:
      return {
        ...state,
        error: true,
      };

    case GET_TODO:
      return {
        ...state,
        tasks: payload,
        error: false,
      };

    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, payload],
        error: false,
      };

    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== payload),
        error: false,
      };

    case COMPLETE_TODO:
      const completeTask = state.tasks.map((task) =>
        task._id === payload._id ? payload : task
      );

      return {
        ...state,
        tasks: completeTask,
        error: false,
      };

    case EDIT_TODO:
      return {
        ...state,
        taskedit: payload,
        error: false,
      };

    case UPDATE_TODO:
      const updateTask = state.tasks.map((task) =>
        task._id === payload._id ? payload : task
      );

      return {
        ...state,
        tasks: updateTask,
        error: false,
      };

    case TOGGLE_FORM:
      return {
        ...state,
        form: !state.form,
      };

    case FILTER_SELECT:
      return {
        ...state,
        filter: payload,
      };

    case CLEAN_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.complete !== true),
        error: false,
      };

    default:
      return state;
  }
};
