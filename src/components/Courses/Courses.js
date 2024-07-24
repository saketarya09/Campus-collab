import  React from 'react'
import "./Courses.css"
import { db } from '../../config/firebase';
import { collection, getDocs,doc,getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Courses = () => {
    const userId = localStorage.getItem("userId");

const [userData, setUserData] = useState(null);
const [coursedata, setcoursedata] = useState([]);

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

// Corrected code to access the 'branch' property
const branch = userData ? userData.branch : null; 

useEffect(() => {
    const fetchCourseData = async () => {
        try {
            if (branch) {
                const subcollectionRef = collection(db, "branch", "bV8ePgxge93kqUZEmE5t", branch); // Reference to the 'Bca' subcollection under 'branch'
                const querySnapshot = await getDocs(subcollectionRef);
                const coursesData = querySnapshot.docs.map(doc => doc.data());
                setcoursedata(coursesData);
            } else {
                console.log("No branch specified!");
            }
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };

    fetchCourseData();
}, [branch]);
  return (
    <div className="courses-root">
    <section className="courses">
        <h1 className="heading">Our Courses</h1>
        {coursedata.map((course, index) => (
            <div className="box-container" key={index}>
                <div className="box">
                    <div className="tutor">
                        <div className="info">
                            <h3>{course.Year}</h3>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src={course.cardimg} alt="" />
                    </div>
                    <Link to={`/coursedetails/${course.Year}?name=${branch}`}>
                    <p  className="inline-btn">View Syllabus</p>
                    </Link>
                </div>
            </div>
        ))}
    </section>
</div>

 
  )
}

export default Courses