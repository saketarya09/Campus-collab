import React from 'react';
import { Link } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { auth } from '../../config/firebase';
import './Navbar.css';
import dylogo from "./DYPlogo.png";

const Navbar = ({ userData, imageUrl }) => {
    const user = getAuth().currentUser; // Gets the currently signed-in user

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Assuming logout() is a method passed as a prop that updates state or redirects
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <div className="navbar">
            <nav>
        
                <div className='logo'>
                    <img src={dylogo} />
                    <h1>DYPIU</h1>
                </div>
               <div>
               <ul>
                    <li><Link to='/HomePage'>Home</Link></li>
                    <li><Link to='/Profile'>Profile</Link></li>
                    <li><Link to='/Gallery'>Gallery</Link></li>
                    <li><Link to='/Admin'>Admin</Link></li>
                    <li><Link to='/Contact'>Contact us</Link></li>
                    {user && (
                        <li><Link to='' onClick={handleLogout}>Logout</Link></li>
                    )}
                </ul>
               </div>

            </nav>
        </div>
    );
};

export default Navbar;
