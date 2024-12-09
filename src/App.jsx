import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAdmin from './CreateAdmin';
import AdminTable from './AdminTable';
import EditAdmin from './EditAdmin';
import ViewAdmin from './ViewAdmin';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<AdminTable />}></Route>
      <Route path='/admin/create' element={<CreateAdmin />}></Route>
      <Route path='/admin/edit/:adminId' element={<EditAdmin />}></Route>
      <Route path='/admin/view/:adminId' element={<ViewAdmin />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
