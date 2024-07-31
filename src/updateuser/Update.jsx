import React, { useEffect, useState } from 'react';
import './update.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: ""
  });

  const navigate = useNavigate();
  const { id } = useParams(); // Move this line up

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
      axios.get(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/update/user/${id}`, user);
      toast.success(response.data.message, { position: "top-center" });
      navigate('/');
    } catch (error) {
      console.log('Error submitting form:', error.response ? error.response.data : error.message);
      toast.error('Failed to update user', { position: "top-center" });
    }
  };
  

  return (
    <div className='addUser'>
      <Link type='button' to='/' className='btn btn-secondary'>
        <i className='fa-solid fa-backward'></i> Back
      </Link>
      <h3>Update User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id='name'
            value={user.name}
            onChange={inputHandler}
            name='name'
            autoComplete='off'
            placeholder='Enter your name'
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id='email'
            value={user.email}
            onChange={inputHandler}
            name='email'
            autoComplete='off'
            placeholder='Enter your email'
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id='address'
            value={user.address}
            onChange={inputHandler}
            name='address'
            autoComplete='off'
            placeholder='Enter your address'
          />
        </div>
        <div className="inputGroup">
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
