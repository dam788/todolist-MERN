export const tasksFilter = (tasks, filter) => {
  switch (filter) {
    case 'All':
      return tasks;

    case 'Completed':
      const taskCompleted = tasks.filter((task) => task.complete === true);

      return taskCompleted;

    case 'Incompleted':
      const taskIncompleted = tasks.filter(
        (task) => task.complete === false
      );

      return taskIncompleted;

    default:
      return tasks;
  }
};
