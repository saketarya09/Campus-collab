import React from 'react'
import { getDoc, doc } from 'firebase/firestore';
import { db,storage } from '../../config/firebase';
import { useState,useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import "./Profile.css"
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "students", userId);
        const club = await getDoc(docRef);
        setUserData(club.data());
      } catch (error) {
        console.error('Error fetching club data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    if (userData && userData.image) {
      const imageRef = ref(storage, userData.image);
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.error('Error fetching image URL: ', error);
        });
    }
  }, [userData]);

  return (
    <div className='profile-page'>
         {userData ? (
         <div className="pic-container">
         <div className="Pcontainer">
         <div className="card1">
         <div className="card-inner">
            <div className="front">
            {imageUrl && <img src={imageUrl} className='profile-img'/>}
                <h2>{userData.name}</h2>
                <p>Branch: {userData.branch}</p>
                <p>Prn: {userData.prn}</p>
                <p>D.o.b: {userData.dob}</p>
                <p>Email: {userData.email}</p>
                <button>hover me</button>
            </div>


            <div className="back">
            <img src= "/DYPIUlogo.jpg" alt="" className='profile-dylogo' />
            <p>Empowered to innovate and inspire, a proud <span>student</span> of DY Patil International University.</p>
                <img src= "/waving-hand.png" alt="" />
                <h1>{userData.name}</h1>
                
                <p>Branch: {userData.branch}</p>
                <p>Prn: {userData.prn}</p>
                <p>D.o.b: {userData.dob}</p>
                <p>Email: {userData.email}</p>
                <div className="row"> 
                    <a href="https://www.instagram.com/dypiu_akurdi?igsh=MTFzZGw4NWVsY3lxeg=="><img src="/instagram.png" alt="" /></a>
                    <a href="https://www.linkedin.com/company/d.-y.-patil-international-university/"><img src="/linkedin.jpg" alt="" /></a>
                    <button>follow</button>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>
      ) : (
        <p>Loading...</p>
      )}
</div>

  );
};
  


export default Profile
