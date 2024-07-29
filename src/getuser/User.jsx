import React, { useEffect, useState } from 'react'
import './user.css'

const User = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                
            } catch (error) {
                console.log('Error fetching data', error);
            }
        }
    })
    
  return (
    <div className='userTable'>
        <button className='btn btn-primary' type='button'>Add User<i className='fa-solid fa-user-plus'></i></button>
        <table className='table table-bordered'>
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
                <tr>
                    <td>1</td>
                    <td>Nasim Azizi</td>
                    <td>Nasim@azizi.com</td>
                    <td>Kabul, Afghanistan</td>
                    <td className='actionButtons'>
                        <button className='btn btn-info'>
                            <i className='fa-solid fa-pen-to-square'></i>
                        </button>
                        <button className='btn btn-danger'>
                            <i className='fa-solid fa-trash'></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default User