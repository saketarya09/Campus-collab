import React, { useEffect, useState } from "react";
import { db, storage } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { ref, getDownloadURL } from 'firebase/storage';
import "./event.css";

const Events = () => {
  const [eventlist, seteventList] = useState([]);
  const eventCollectionRef = collection(db, "events");

  const geteventList = async () => {
    try {
      const data = await getDocs(eventCollectionRef);
      const eventData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Fetch image URLs for each event
      const eventsWithImages = await Promise.all(eventData.map(async (event) => {
        if (event.image) {
          const imageRef = ref(storage, event.image);
          try {
            const imageURL = await getDownloadURL(imageRef);
            return { ...event, imageURL };
          } catch (error) {
            console.error('Error fetching image URL: ', error);
            return { ...event, imageURL: null };
          }
        }
        return { ...event, imageURL: null };
      }));

      seteventList(eventsWithImages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    geteventList();
  }, []);

  return (
    <div className="event-page">
      <div className="event">
        <h1>Welcome, Our events meet your dream functions.</h1>
        <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
          {eventlist.map((event) => (
            <div key={event.id} className="card d-flex position-relative flex-column">
              <Link to={`/Showevents/${event.id}`} className="link-style">
                <div className="imgContainer">
                  {event.imageURL ? (
                    <img src={event.imageURL} alt={event.name} />
                  ) : (
                    <img src="/default-image.jpg" alt="Default" />
                  )}
                </div>
                <div className="content">
                  <h2>{event.name}</h2>
                  <p>{event.about}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
