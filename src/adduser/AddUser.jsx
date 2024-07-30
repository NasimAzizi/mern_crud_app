import React, { useState } from 'react'
import './adduser.css'
import { Link } from 'react-router-dom';

const AddUser = () => {

  const users = {
    name: "",
    email: "",
    address: ""
  }

  const [user, setUser] = useState(users);

  return (
    <div className='addUser'>
      <Link type='button' to='/'  className='btn btn-secondary'><i className='fa-solid fa-backward'></i> Back</Link>
      <h3>Add New User</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            id='name'
            name='name'
            autoComplete='off'
            placeholder='Enter your name'
             />
        </div>
        <div className='inputGroup'>
          <label htmlFor="name">E-mail:</label>
          <input 
            type="email"
            id='email'
            name='email'
            autoComplete='off'
            placeholder='Enter your email'
             />
        </div>
        <div className='inputGroup'>
          <label htmlFor="name">Address:</label>
          <input 
            type="text"
            id='address'
            name='address'
            autoComplete='off'
            placeholder='Enter your address'
             />
        </div>
        <div className="inputGroup">
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser