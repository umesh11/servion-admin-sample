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
      fetch('http://localhost:8000/admin', {
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
    <div className='container'>
      <h2>Add New Admin</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>ID:</label>
        <input type="text" id="id" name="id" required value={id} onChange={(e) => setId(e.target.value)} />
        {id.length === 0 && validate && <span className='errorMsg'>Please enter Id</span>}

        <label htmlFor='item'>Item:</label>
        <input type="text" id="item" name="item" required value={item} onChange={(e) => setItem(e.target.value)} />
        {item.length === 0 && validate && <span className='errorMsg'>Please enter Item</span>}
        <label htmlFor='price'>Price:</label>
        <input type="text" id="price" name="price" required value={price} onChange={(e) => setPrice(e.target.value)}/>
        {price.length === 0 && validate && <span className='errorMsg'>Please enter price</span>}

        <label htmlFor='cass'>Cass:</label>
        <input type="text" id="cass" name="cass"required value={cass} onChange={(e) => setCass(e.target.value)} />
        {cass.length === 0 && validate && <span className='errorMsg'>Please enter cass</span>}

        <div>
         <button className="btn btn-save">Save</button>
         <Link to='/' className='btn btn-back'>Back</Link>
        </div>
      </form>
    </div>
  )
}


export default CreateAdmin;