import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CreateAdmin = () => {
    const navigate = useNavigate();
    const[id, setId] = useState('');
    const[item, setItem] = useState('');
    const[price, setPrice] = useState('');
    const[cass, setCass] = useState('');
    const[validate, setValidate] = useState(false);


    const handleSubmit = (e) => {
      e.preventDefault();
      setValidate(true);
      const adminData = {id, item, price, cass}
      fetch('http://localhost:3000/admin', {
        method: 'POST',
        header: {
          "content-type": "application/json",
        },
        body: JSON.stringify(adminData)
      }).then((res) => {
        alert('Admin Data submitted successfully');
        console.log(res);
        navigate('/')
      })
      .catch((err) => console.log(err.message))
    }
  return (
    <div className='container-fluid bg-blue-gradient py-4 vh-100 d-flex align-items-center'>
      <div className="card col-md-6 col-lg-4 mx-auto">
        <div className="card-body">
          <h2 className='text-center h3 mb-3'>Add New Admin</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor='id' className="form-label">ID:</label>
              <input className='form-control' type="text" id="id" name="id" required value={id} onChange={(e) => setId(e.target.value)} />
              {id.length === 0 && validate && <span className='errorMsg'>Please enter Id</span>}
            </div>
            <div className="mb-3">
              <label htmlFor='item' className="form-label">Item:</label>
              <input className='form-control' type="text" id="item" name="item" required value={item} onChange={(e) => setItem(e.target.value)} />
              {item.length === 0 && validate && <span className='errorMsg'>Please enter Item</span>}
            </div>
            <div className="mb-3">
              <label htmlFor='price' className="form-label">Price:</label>
              <input className='form-control' type="text" id="price" name="price" required value={price} onChange={(e) => setPrice(e.target.value)}/>
              {price.length === 0 && validate && <span className='errorMsg'>Please enter price</span>}
            </div>
            <div className="mb-3">
              <label htmlFor='cass' className="form-label">Cass:</label>
              <input className='form-control' type="text" id="cass" name="cass"required value={cass} onChange={(e) => setCass(e.target.value)} />
              {cass.length === 0 && validate && <span className='errorMsg'>Please enter cass</span>}
            </div>
          
            <div className="justify-content-md-between d-md-flex">
              <Link to='/' className='btn btn-secondary d-inline-flex align-items-center justify-content-center mt-1 btn-back'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
                <span className=''>Back</span>
              </Link>

              <button className="btn btn-primary d-inline-flex align-items-center justify-content-center mt-1 btn-save">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
  <path d="M11 2H9v3h2z"/>
  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
</svg>
                <span className='ms-1'>Save</span>
              </button>
            </div>
            
          </form>

        </div>
      </div>
    </div>
  )
}


export default CreateAdmin;