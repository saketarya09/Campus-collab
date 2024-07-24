import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Navbar/Layout'; 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import Admin from './components/Admin/Admin';
import Contact from './components/Contact/Contact.js'
import Gallery from './components/Gallery/Gallery.js';
import HomePage from './components/Home/HomePage';
import Club from './components/Club/Club';
import Showclub from './components/Club/Showclub';
import Createclub from './components/Club/Createclub';
import Events from './components/Events/Events';
import Showevents from './components/Events/Showevents';
import Createevents from './components/Events/Createevents';
import Courses from './components/Courses/Courses';
import Chatbot from './components/chatbot/Chatbot';
import Chapter from './components/Courses/Chapter.js';
import  Coursedetails from './components/Courses/Coursedetails.js';
import Showchapters from './components/Courses/Showchapters.js';
import Year from './components/Courses/Year.js';
import Subject from './components/Courses/Subject.js';
import Quotes from './components/Explore/Quotes.js';
import Comingsoon from './components/Home/Comingsoon.js';

function App() {
    return (
        <div className="App">
            <Router>
                <Layout/>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/HomePage" element={<HomePage />} />
                        <Route path="/createclub" element={<Createclub />} />
                        <Route path="/club" element={<Club />} />
                        <Route path="/Showclub/:clubid" element={<Showclub />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Gallery" element={<Gallery />} />
                        <Route path="/Events" element={<Events />} />
                        <Route path="/Showevents/:eventid" element={<Showevents />} />
                        <Route path="/createevents" element={<Createevents />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/chatbot" element={<Chatbot />} />
                        <Route path="/chapter" element={<Chapter />} />
                        <Route path="/coursedetails/:Year" element={<Coursedetails />} />
                        <Route path="/Showchapters/:subject" element={<Showchapters />} />
                        <Route path="/Subject" element={<Subject />} />
                        <Route path="/Year" element={<Year />} />
                        <Route path="/Quotes" element={<Quotes />} />
                        <Route path="/Comingsoon" element={<Comingsoon/>}/> 
                    </Routes>
                <Chatbot />
            </Router>
        </div>
    );
}

export default App;