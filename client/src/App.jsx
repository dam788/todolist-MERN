import Form from './components/Form.jsx';
import TodoList from './components/TodoList.jsx';

const App = () => {
  return (
    <>
      <div className='bg-gray-700 text-center p-4 font-bold'>
        <h1 className='text-5xl text-blue-500'>
          <i className='fi-rr-edit text-gray-500 mr-6 text-4xl'></i>
          TODO MERN
        </h1>
      </div>
      <div className='container mx-auto my-3'>
        <Form />

        <hr className='mt-14' />
        <h3 className='text-gray-200 text-5xl font-black text-center mb-8'>
          Tasks
        </h3>
        <TodoList />
      </div>
    </>
  );
};

export default App;
