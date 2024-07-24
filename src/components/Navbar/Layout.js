// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; // Adjust the import path as necessary

const Layout = ({ children }) => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/' || location.pathname === '/Signup';

    return (
        <div>
            {!isAuthPage && <Navbar />}
            {children}
        </div>
    );
};

export default Layout;
