import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { useParams } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import './Showevents.css';

const Showevents = () => {
  const { eventid } = useParams();
  const [eventData, setEventData] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const docRef = doc(db, 'events', eventid);
        const event = await getDoc(docRef);
        setEventData(event.data());
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventid]);

  useEffect(() => {
    if (eventData && eventData.image) {
      const imageRef = ref(storage, eventData.image);
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.error('Error fetching image URL: ', error);
        });
    }
  }, [eventData]);

  return (
    <div>
      <div
        className="py-5 bg-light c2a1"
        style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149018547.jpg)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <h2>{eventData && eventData.name}</h2>
              <p className="font-weight-light text-white op-8">
                {eventData && eventData.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      {eventData ? (


<div class="showevents">
  <div class="image-and-details">
           {imageUrl && <img src={imageUrl} alt="Event" className="clubprofileimg" />}
           <div className='eventdetails'>
           <h2>Time: {eventData.time}</h2>
           <h2>Date: {eventData.date}</h2>
           <h2>Venue: {eventData.venue} </h2>
           </div>
           </div>
           <div className='description'>
          <p>{eventData.description}</p>
          </div>
          <div className='itbtn'>
          <a className="btn-primary" href="https://forms.gle/MdRjD9x4JWmEJf6z6">
                <span>Register now!</span>
              </a>
              </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Showevents;