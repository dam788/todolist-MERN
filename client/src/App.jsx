import Form from './components/Form.jsx';
import TodoList from './components/TodoList.jsx';
import Filter from './components/Filter.jsx';

const App = () => {
  return (
    <>
      <div className='bg-gray-700 p-3 font-bold'>
        <div className='container mx-auto'>
          <h1 className='text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400 select-none opacity-80 hover:opacity-100'>
            <i className='fi-rr-edit mr-2 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'></i>
            TODO MERN
          </h1>
        </div>
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
