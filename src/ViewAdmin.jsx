import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

function ViewAdmin() {
  const {adminId} = useParams();
  const [adminData, setAdminData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/admin/${adminId}`).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setAdminData(data);
    }).catch((err) => {
      console.log(err.message);
    })
   }, [])

  return (
    <div className='container-fluid bg-blue-gradient py-4 vh-100 d-flex align-items-center'>

      <div className="card col-md-6 col-lg-4 mx-auto">
        <div className="card-body">

              
          <div className='table-responsive'>

            <h1 className='text-center h3 mb-3'>Admin Details</h1>

            { adminData &&  
              <table className="table table-bordered">
                {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">ID</th>
                    <td>{adminData.id}</td>
                  </tr>
                  <tr>
                    <th scope="row">Item</th>
                    <td>{adminData.item}</td>
                  </tr>
                  <tr>
                    <th scope="row">Price</th>
                    <td colSpan="2">{adminData.price}</td>
                  </tr>
                  <tr>
                    <th scope="row">Cass</th>
                    <td colSpan="2">{adminData.cass}</td>
                  </tr>
                </tbody>
              </table>
            }
            
            <Link to='/' className='btn btn-secondary d-inline-flex align-items-center justify-content-center mt-1 btn-back'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
      </svg>
              <span className=''>Back</span>
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewAdmin