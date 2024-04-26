
# React and Django Todo Project

This project is an implementation of a Todo application using Django Rest Framework as the backend and React for the frontend. The React app (`todo-react-app`) is set up alongside Django applications to create a full-stack web application that manages todo lists.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete Todos.
- **API Endpoints**
    - /api/todos/
    - /api/todos/<int:pk>/
- **GraphQL** Implemented GraphQL using graphene Django
- **Real-Time Updates**: Utilizes efficient communication between the frontend and backend to ensure state is synchronized across all clients.
- **APOLLO Client** Integrated Apollo Client in React to fetch and manage data in GraphQL API.

## Demo

Here you can include a GIF or a set of screenshots demonstrating the application's functionality:
<img width="750" alt="image" src="https://github.com/Noman1555/Django-Todo-Project/assets/164897336/03dad354-d99f-4a2d-adef-fd3a77772604">


## Local Setup Guidelines

### Backend Setup (Django)

1. Clone the repository:
   ```bash
   git clone https://github.com/Noman1555/Django-Todo-Project.git
   cd Django-Todo-Project
   ```

2. Set up a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Migrate the database:
   ```bash
   python manage.py migrate
   ```

5. Run the server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup (React)

1. Navigate to the React application directory:
   ```bash
   cd todo-react-app
   ```

2. Install npm packages:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```


## How to Run Test Cases

To run the test cases for both the backend and frontend:

### Backend Tests

```bash
cd Django-Todo-Project
python manage.py test
```

## Note

React is using GraphQL to fetch and manage the data from the backend but we have also implemented API endpoints in `view.py` file which can be hit from postman.


## Conclusion

This README provides all necessary information to get the project set up locally, run tests, and understand the API.
