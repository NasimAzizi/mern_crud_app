import React, { useEffect, useState } from 'react'
import './user.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const User = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/users");
                setUsers(response.data);
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };
        fetchData();
    }, [])

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:8000/api/delete/user/${userId}`)
        .then((response) => {
            setUsers((prevUser) => prevUser.filter((user) => user._id !== userId))
            toast.success(response.data.message, {position: "top-center"})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
  return (
    <div className='userTable'>
        <Link to='/add' className='btn btn-primary' type='button'>Add User<i className='fa-solid fa-user-plus'></i></Link>

        {users.length === 0 ? (
            <div className='no-data'>No user found, please add new user</div>
        ):   <table className='table table-bordered'>
        <thead>
            <tr>
                <th scope='col'>S.No.</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Address</th>
                <th scope='col'>Actions</th>
            </tr>
        </thead>
        <tbody>
           {users.map((user, index) => {
            return(
                <tr>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td className='actionButtons'>
                        <Link to={`/update/`+user._id} className='btn btn-info'>
                            <i className='fa-solid fa-pen-to-square'></i>
                        </Link>
                        <button className='btn btn-danger' onClick={() => deleteUser(user._id)}>
                            <i className='fa-solid fa-trash'></i>
                        </button>
                    </td>
                </tr>
            )
           })}
        </tbody>
    </table>}

      
    </div>
  )
}

export default User