import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Comingsoon.css';

const Comingsoon = () => {
  return (
    <div className='comingsoon'>
      <h1>Commin Soon!</h1>
      <p>Connect Us for more Details.</p>
      <button className='btn-primary btn'><Link to='/Contact'>Connect us</Link></button>
    </div>
  )
}

export default Comingsoon
