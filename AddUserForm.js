import React, { useState } from 'react';
import axios from 'axios';

function AddUserForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', { name })
      .then(response => {
        console.log('User added successfully:', response.data);
        setName('');
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUserForm;