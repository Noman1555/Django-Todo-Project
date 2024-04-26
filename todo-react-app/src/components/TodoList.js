import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { GET_TODOS_QUERY } from '../graphql/queries';

const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS_QUERY);
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <h1 className="text-2xl font-bold text-center p-5">Todo List</h1>
      <button onClick={handleOpenForm} className="mb-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Todo
      </button>
      {showForm && <AddTodoForm onClose={handleCloseForm} />}
      <ul>
        {data.allTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
