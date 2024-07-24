import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, getDocs, where, query, collection } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faPalette, faFileCode, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import "./Showclub.css";


const Showclub = () => {
  const { clubid } = useParams();
  const [clubData, setClubData] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [events, setEvents] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollBtnActive, setIsScrollBtnActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      setIsScrollBtnActive(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const docRef = doc(db, 'club', clubid);
        const club = await getDoc(docRef);
        setClubData(club.data());
      } catch (error) {
        console.error('Error fetching club data:', error);
      }
    };

    fetchClubData();
  }, [clubid]);

  useEffect(() => {
    const fetchImages = async () => {
      if (clubData && clubData.images && clubData.images.length > 0) {
        const imagePromises = clubData.images.map(async (imagePath) => {
          const imageRef = ref(storage, imagePath);
          try {
            const imageUrl = await getDownloadURL(imageRef);
            return imageUrl;
          } catch (error) {
            console.error('Error fetching image URL: ', error);
            return null;
          }
        });

        const resolvedImageUrls = await Promise.all(imagePromises);
        setImageUrls(resolvedImageUrls.filter((url) => url !== null));
      }
    };

    fetchImages();
  }, [clubData]);

  useEffect(() => {
    const fetchEvents = async () => {
      if (clubData && clubData.name) {
        const collectionRef = collection(db, 'events');
        const querySnapshot = await getDocs(
            query(collectionRef, where('clubname', '==', clubData.name))
        );

        if (querySnapshot.empty) {
          console.log(`No events found for clubname: ${clubData.name}`);
          setEvents([]);
          return;
        }

        const eventsData = [];
        querySnapshot.forEach((doc) => {
          eventsData.push({ id: doc.id, ...doc.data() });
        });

        setEvents(eventsData);
      }
    };

    fetchEvents();
  }, [clubData]);

    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <>
      <div className="showclub">
        <div className={`scrollToTop-btn ${isScrollBtnActive ? 'active' : ''}`} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>

        {clubData ? (
          <>
            <section className="main" id="main">
             

              <div className="content">
                <h2><b>Welcome to our Club</b></h2>
                <div>
                  <h2><br /><span>{clubData.name}</span></h2>
                </div>
                <p>College clubs offer a vibrant platform for students to explore their interests beyond academics, fostering personal growth and skill development. Joining a club provides opportunities to connect with like-minded peers, fostering friendships and a sense of community. Engaging in club activities allows students to discover new passions, hone leadership skills, and enhance their resumes. By joining clubs, students can create memorable experiences, enriching their college journey and preparing them for future endeavors. Don't miss out on the chance to broaden your horizons and make lasting memories—take the leap and join a college club today!</p>
                <button className='btn-primary'>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRZ-MOhZTRAc7Y-IR0atzENVNvCUtSGZbljlk55HgIXVYfuA/viewform?usp=sf_link">Register now!</a>
                </button>
                <div className="media-icons">
                </div>
              </div>

              {imageUrls.length > 0 && (
                <div className='club-img'>
                  <div className="image-container">
                    {imageUrls.map((imageUrl, index) => (
                      <img key={index} src={imageUrl} className="clubimg" alt={`Image ${index + 1}`} />
                    ))}
                  </div>
                </div>
              )}
            </section>

            <section className="about1" id="about1">
              <div className="title">
                <h2 className="section-title">About Us</h2>
              </div>
              <div className="content">
                <div className="column col-left">
                  <div className="img-card">
                    {/* Insert club image here */}
                    {/* <img src="" alt="" /> */}
                  </div>
                </div>
                <div className="column col-right">
                  <h2 className="content-title">Hey There! Know About us</h2>
                  <p className="paragraph-text">
                    {clubData.aboutclub}
                  </p>
                </div>
              </div>
            </section>

            
            <section className="about2" id="about2">
              <div className="title">
                <h2 className="section-title">Description</h2>
              </div>
              <div className="content">
                <div className="column col-left">
                  <div className="img-card">
                  </div>
                </div>
                <div className="column col-right">
                  <h2 className="content-title"><b>Admin: </b>{clubData.admin}<b><br></br>Established on: </b>{clubData.established}</h2>
                  <p className="paragraph-text">
                  {clubData.description}
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <p>Loading club information...</p>
        )}

        {events.length > 0 && (
          <section className="events">
            <div className="title">
              <h2 className="section-title">Recent events</h2>
            </div>
            <div className="content">
              {events.map((event) => (
                <div className="event" key={event.id}>
                  <h3>{event.name}</h3>
                  <p>{isExpanded ? event.description : `${event.description.substring(0, 600)}...`}</p>
      <button onClick={toggleDescription}>
        {isExpanded ? 'See Less' : 'See More'}
      </button>
                </div>
              ))}
            </div>
            <h2 className='end'>Thank You!</h2>
          </section>
        )}
      </div> 
      <footer>
            <h2> Dypiu website &copy; all rights reserved</h2>
        </footer>  
    </>
  );

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
};

export default Showclub;
