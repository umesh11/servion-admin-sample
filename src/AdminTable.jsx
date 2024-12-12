import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminTable() {
   const navigate = useNavigate('');
   const[admin, setAdmin] = useState([]);
   useEffect(() => {
    fetch('http://localhost:3000/admin').then((res) => {
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
      fetch(`http://localhost:3000/admin/${id}`, {
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
    <div>
        <h2 className='container-fluid text-center bg-blue py-3'>Admin Records</h2>

        <div className='container-fluid container-lg'>

          <div className="table-responsive">
            <table className="table table-bordered table-dark table-striped align-middle w-auto m-auto">
              <caption className='caption-top w-25'>
                <Link to="/admin/create" className='btn btn-warning mb-2 d-inline-flex align-items-center justify-content-center'>

                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cloud-plus fs-5" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>
                  <span className='ms-1'>Add New</span>
                </Link>
              </caption>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th colSpan="2">Cass</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
              
                  {admin && admin.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.item}</td>
                      <td>{item.price}</td>
                      <td>{item.cass}</td>
                      
                      <td>
                        <div className="d-flex gap-2 modify-buttons">
                          <button onClick={() => viewDetails(item.id)} className='btn btn-primary d-inline-flex align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-binoculars" viewBox="0 0 16 16">
    <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"/>
  </svg>
                            <span className='ms-1'>View</span>
                          </button>

                          <button onClick={() => editDetails(item.id)} className='btn btn-success d-inline-flex align-items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
  </svg>
                            <span className='ms-1'>Edit</span>
                          </button>

                          <button onClick={() => deleteDetails(item.id)} className='btn btn-danger d-inline-flex align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg>
                            <span className='ms-1'>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              
              
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default AdminTable;