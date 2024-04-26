import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TODO_MUTATION } from '../graphql/mutations';

const TodoItem = ({ todo }) => {
  const [updateTodo, { loading, error }] = useMutation(UPDATE_TODO_MUTATION);

  const toggleCompleted = useCallback(() => {
    updateTodo({ variables: { id: todo.id, completed: !todo.completed } });
  }, [todo, updateTodo]);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <li className={`flex justify-between items-center p-4 border-b border-gray-300 ${todo.completed ? 'bg-gray-200' : 'bg-white'}`}>
      <span className={`flex-1 ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
        {todo.title} - {todo.completed ? 'Done' : 'Pending'}
        {todo.description}
      </span>
      <button onClick={toggleCompleted} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Mark as {todo.completed ? 'Pending' : 'Done'}
      </button>
    </li>
  );
};

export default TodoItem;
