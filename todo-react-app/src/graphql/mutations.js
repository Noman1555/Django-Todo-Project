import { gql } from '@apollo/client';

export const UPDATE_TODO_MUTATION = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, completed: $completed) {
      todo {
        id
        title
        description
        completed
        createdAt
      }
    }
  }
`;

export const ADD_TODO_MUTATION = gql`
  mutation AddTodo($title: String!, $description: String) {
    addTodo(title: $title, description: $description) {
      todo {
        id
        title
        description
        completed
        createdAt
      }
    }
  }
`;
