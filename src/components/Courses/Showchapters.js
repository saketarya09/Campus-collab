import React from 'react';
import { collection, query, where, getDocs ,getDoc,doc} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useParams, useNavigate,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './Showchapters.css';

const Showchapters = () => {
    const userId = localStorage.getItem("userId");
    const { subject } = useParams();
    const Year = new URLSearchParams(window.location.search).get("Year");
    const [userData, setUserData] = useState(null);
    const [chapterdata, setChapterdata] = useState([]);

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

    const branch = userData ? userData.branch : null; 

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                if (branch && Year && subject) { // Check if branch, Year, and subject are defined
                    const q = query(collection(db, "branch", "bV8ePgxge93kqUZEmE5t", "pdf"), 
                                    where("branch", "==", branch), 
                                    where("Year", "==", Year),
                                    where("subject", "==", subject));
                    
                    const querySnapshot = await getDocs(q);
                    const coursesData = [];
                    querySnapshot.forEach((doc) => {
                        // Add each document's data to the array
                        coursesData.push({ id: doc.id, ...doc.data() });
                    });
                    
                    // Set the fetched data to the state variable
                    setChapterdata(coursesData);
                    console.log(chapterdata);
                } else {
                    console.log("Branch, Year, or subject is undefined.");
                }
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };
    
        fetchDocuments();
    }, [branch, Year, subject]);

  return (
    <div className='chapters'>
      <section className="playlist-videos">
                <h1 className="heading">Course Overview</h1>
                <div className="box-container">
                {chapterdata.map((course, index) => (
                        <div className="box">
                            <img src="/pdf.png" alt="" />
                            
                            <a href={course.pdfURL}> <h3>{course.chaptername}</h3> </a>
                            
                        </div>
                 ))}
                </div>
            </section>
    </div>
  )
}

export default Showchapters