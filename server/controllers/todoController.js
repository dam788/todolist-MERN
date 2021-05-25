import Todo from '../models/Todo.js';

const getTodos = async (req, res) => {
  try {
    const getTodos = await Todo.find();
    res.json(getTodos);
  } catch (err) {
    res.json({ message: 'error retrieving todos' });
  }
};

const postTodo = async (req, res) => {
  const todo = new Todo({
    ...req.body,
  });

  try {
    const newTodo = await todo.save();
    res.json(newTodo);
  } catch (err) {
    res.json({ message: 'error saving todo' });
  }
};

const updateTodo = async (req, res) => {
  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updateTodo);
  } catch (err) {
    res.json({ message: `error updating todo with id ${req.params.id}` });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const removeTodo = await Todo.remove({ _id: req.params.id });
    res.json(removeTodo);
  } catch (err) {
    res.json({ message: 'error removing todos' });
  }
};

const deleteFalse = async (req, res) => {
  try {
    const removeFalse = await Todo.deleteMany({ complete: true });
    res.json(removeFalse);
  } catch (error) {}
};

export { getTodos, postTodo, updateTodo, deleteTodo, deleteFalse };
