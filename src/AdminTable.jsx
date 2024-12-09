import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminTable() {
   const navigate = useNavigate('');
   const[admin, setAdmin] = useState([]);
   useEffect(() => {
    fetch('http://localhost:8000/admin').then((res) => {
      return res.json();
    }).then((data) => {
      setAdmin(data);
    }).catch((err) => {
      console.log(err.message);
    })
   }, [])

   const viewDetails = (id) => {
    navigate(`/admin/view/${id}`);
   }

   const editDetails = (id) => {
    navigate(`admin/edit/${id}`);
   }

   const deleteDetails = (id) => {
    if(window.confirm('Are you sure you want to delete this admin ?')){
      fetch(`http://localhost:8000/admin/${id}`, {
        method: 'DELETE',
        header: {
          "content-type": "application/json",
        },
      }).then((res) => {
        alert('Admin Data deleted successfully');
        navigate('/')
        window.location.reload();
      })
      .catch((err) => console.log(err.message))
    } 
   }


  return (
    <div className='container'>
        <h2>Admin Records</h2>
        <div className='table-container'>
          <Link to="/admin/create">Add New</Link>
          <table>
            <thead>
              <tr>Sl No</tr>
              <tr>Item</tr>
              <tr>Price</tr>
              <tr>Cass</tr>
            </thead>
            <tbody>
            
                {admin && admin.map((item) => (
                  <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.cass}</td>
                  
                    <td>
                    <button onClick={() => viewDetails(item.id)} className='btn btn-info'>View</button>
                    <button onClick={() => editDetails(item.id)} className='btn btn-primary'>Edit</button>
                    <button onClick={() => deleteDetails(item.id)} className='btn btn-secondary'>Delete</button>
                  </td>
                  </tr>
                ))}
             
            
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default AdminTable;