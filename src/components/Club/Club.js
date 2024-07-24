import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './club.css';

const Club = () => {
  const [clublist, setClubList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const clubCollectionRef = collection(db, 'club');

  useEffect(() => {
    const getClubList = async () => {
      try {
        const data = await getDocs(clubCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setClubList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getClubList();
  }, []);

  const truncateDescription = (description, wordsCount) => {
    const words = description.split(' ');
    if (words.length > wordsCount) {
      return words.slice(0, wordsCount).join(' ') + '...';
    }
    return description;
  };

  const handleSlide = (direction) => {
    setCurrentSlide(prev => direction === 'prev' ? (prev > 0 ? prev - 1 : clublist.length - 1) : (prev < clublist.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className='club-page'>
      <div className='cards'>
        <h1>Welcome to Dypiu Clubs</h1>
        <h3>College clubs are the kaleidoscope of campus life, where diverse passions converge, friendships blossom, and students find the colors that paint their academic journey. We're thrilled to have you as a member. Get ready for exciting events, engaging discussions, and a vibrant community.</h3>

        <TransitionGroup className='card-slider'>
          {clublist.slice(currentSlide, currentSlide + 3).map((club, index) => (
            <CSSTransition key={index} timeout={500} classNames='slide'>
              <div className='item'>
                <Link to={`/Showclub/${club.id}`}>
                  <h2>{club.name}</h2>
                </Link>
                <small>{truncateDescription(club.description, 70)}</small>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      <div className='navigation-buttons'>
        <button className='prev-btn' onClick={() => handleSlide('prev')}>&#9665;</button>
        <button className='next-btn' onClick={() => handleSlide('next')}>&#9655;</button>
      </div>
    </div>
  );
};

export default Club;
