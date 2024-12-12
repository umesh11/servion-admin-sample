import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminCartTable() {

  const navigate = useNavigate('');
  const[admin, setAdmin] = useState([]);
  const[quantities, setQuantities] = useState({}); //to store quantities for each item
  const[checkBoxChecked, setCheckBoxChecked] = useState({});
  const[totalPrice, setTotalPrice] = useState({});
  const[grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/admin').then((res) => {
      return res.json();
    }).then((data) => {
      setAdmin(data);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])

  const handleQuantityChange = (id, value, price) => {

    const newQuantity = value ? parseInt(value) : 0; // Convert value input to number or set to 0 if empty

    setQuantities( (prev)=> ({
      ...prev,
      [id]: newQuantity,
      // Eg: {...prev, 4: 23 }
    }))

    // Total
    setTotalPrice( (prev)=> ({
      ...prev,
      [id]:  price * newQuantity,
    }))

  }

  const handleCheckboxSelectChange = (id, value) => {

    setCheckBoxChecked( (prev)=> ({
      ...prev,
      [id]: value, //this value is checkbox's boolean
    }))

    setQuantities( (prev)=> ({
      ...prev,
      [id]: 0, // Set default to 0
      // Eg: {...prev, 4: 23 }
    }))

    // Total
    setTotalPrice( (prev)=> ({
      ...prev,
      [id]:  0
    }))

  }


  useEffect(() => {
    const sumTotal = Object.values(totalPrice).reduce((acc, curVal) => acc + curVal, 0)
    setGrandTotal(sumTotal);
  }, [totalPrice])


  return (
    <div className='container-fluid container-lg'>
      <div className="table-responsive">
          <table className="table table-bordered table-dark table-striped align-middle w-auto m-auto">   
              <thead>
              <tr>
                <th>Id</th>
                <th>Item</th>
                <th>Select</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              </thead>
              <tbody className="table-group-divider">
                
                {admin && admin.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.item}</td>
                  <td>
                    <div className="form-check form-switch ps-0 mb-0">
                        <label className="form-check-label" htmlFor={item.id}>
                        <span className='me-2 small'>No</span>

                        <input 
                            className="form-check-input ms-0 float-none" 
                            type="checkbox" 
                            onChange={(e)=> handleCheckboxSelectChange(item.id, e.target.checked)} 
                        />

                        <span className='ms-2 small'>Yes</span>
                        </label>
                    </div>
                  </td>

                  {checkBoxChecked[item.id] && <>
                    <td>${item.price}</td>
                    <td>
                        <input 
                        className="form-control input-quantity bg-dark text-white" 
                        type="number" 
                        aria-label="Quantity input" 
                        value={quantities[item.id]}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value, item.price) }
                        />
                    </td>
                    
                    <td>
                        {/* Calculate total price */}
                        {totalPrice[item.id] ? totalPrice[item.id] : 0}
                    </td>
                  </>}
                </tr>
                ))}
              </tbody>

              <tfoot>
              <tr className='table-warning'>
                  <th scope="row" colSpan="4">Grand Total</th>
                  <td>
                    {/* Grand Total of Quantity */}
                    {
                        Object.keys(quantities).length &&
                        Object.values(quantities).reduce( (acc, curVal) => acc + curVal, 0)
                    }
                  </td>
                  <td>
                    {/* Grand total of Price */}
                    {grandTotal}
                  </td>
              </tr>
              </tfoot>
          </table>
      </div>
    </div>
  )
}

export default AdminCartTable