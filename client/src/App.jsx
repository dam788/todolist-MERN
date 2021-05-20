import Form from './components/Form.jsx';
import TodoList from './components/TodoList.jsx';
import Filter from './components/Filter.jsx';

const App = () => {
  return (
    <>
      <div className='bg-gray-700 text-center p-4 font-bold'>
        <h1 className='text-5xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 select-none'>
          <i className='fi-rr-edit text-gray-500 mr-4 text-4xl'></i>
          TODO MERN
        </h1>
      </div>
      <div className='container mx-auto my-3'>
        <Form />
        <Filter />
        <TodoList />
      </div>
    </>
  );
};

export default App;
