import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

function ViewAdmin() {
  const {adminId} = useParams();
  const [adminData, setAdminData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8000/admin/${adminId}`).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setAdminData(data);
    }).catch((err) => {
      console.log(err.message);
    })
   }, [])

  return (
    <div className='container'>
      <h1>Admin Details</h1>
    { adminData &&  <div className='details'>
        <p><strong>ID:</strong>{adminData.id}</p>
        <p><strong>Item:</strong>{adminData.item}</p>
        <p><strong>Price:</strong>{adminData.price}</p>
        <p><strong>Cass:</strong>{adminData.cass}</p>
      </div>}
      <Link to='/' class='btn btn-back'>Back</Link>
    </div>
  )
}

export default ViewAdmin