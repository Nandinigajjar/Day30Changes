import React from 'react';
import UsersList from './components/UsersList';
import AddUserForm from './components/AddUserForm';

function App() {
  return (
    <div className="App">
      <h1>User Management System</h1>
      <AddUserForm />
      <UsersList />
    </div>
  );
}

export default App;