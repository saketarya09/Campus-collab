import React from 'react'
import { Link } from 'react-router-dom';
import './Admin.css';
const Admin = () => {
  return (
     <>
    
    <div className='admin-page'>
    <h1>Admin Page</h1>
      <button className='admin-btns'><Link to='/createclub'>Create New Club</Link></button>
      <br></br>
      <button className="admin-btns"><Link to="/createevents">Create event</Link></button>
      <br></br>
      <button className='admin-btns'><Link to='/chapter'>Upload Syllabus</Link></button>
      <br></br>
      <button className='admin-btns'><Link to='/Subject'>Create Subject </Link></button>
      <br></br>
      <button className='admin-btns'><Link to='/Year'>Add Year  </Link></button>
          </div>
          </>
  )
}

export default Admin
