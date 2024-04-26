import React, { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO_MUTATION } from '../graphql/mutations';
import { GET_TODOS_QUERY } from '../graphql/queries';

const AddTodoForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [addTodo, { loading, error }] = useMutation(ADD_TODO_MUTATION, {
    variables: { title, description },
    refetchQueries: [{ query: GET_TODOS_QUERY }]
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    addTodo({
      variables: {
        title: title,
        description: description
      }
    });
    setTitle('');
    setDescription('');
  }, [title, description, addTodo]);

  return (
    <div className="relative p-4 bg-white rounded shadow-lg">
      <button onClick={onClose} className="absolute top-0 right-0 p-2">
        &times;
      </button>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" disabled={loading} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Create Todo
        </button>
        {error && <p className="mt-2 text-sm text-red-500">Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default AddTodoForm;
