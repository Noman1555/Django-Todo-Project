
# React and Django Todo Project

This project is an implementation of a Todo application using Django as the backend and React for the frontend. The React app (`todo-react-app`) is set up alongside Django applications to create a full-stack web application that manages todo lists.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete Todos.
- **Real-Time Updates**: Utilizes efficient communication between the frontend and backend to ensure state is synchronized across all clients.

### Assumptions and Improvements

- **Assumptions**:
  - The user is familiar with basic operations of a todo application.
  - Users require real-time update capabilities without needing to refresh their browsers.

- **Improvements**:
  - Implementing WebSocket for real-time updates could enhance user experience by providing instant updates across sessions.
  - Adding user authentication to allow multiple users to manage their personal todo lists securely.

## Demo

Here you can include a GIF or a set of screenshots demonstrating the application's functionality:

(link)

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


## Conclusion

This README provides all necessary information to get the project set up locally, run tests, and understand the API.
