import React, { useEffect,useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useParams, useNavigate,Link } from 'react-router-dom';
import { db } from '../../config/firebase';
import './Coursedetails.css'

const Coursedetails = () => {
  const { Year } = useParams();
  const branch = new URLSearchParams(window.location.search).get("name");
  const [coursedetail, setcoursedetail] = useState([]);
  
  useEffect(() => {
    const fetchDocuments = async () => {
        try {
            if (branch && Year) { 
                const q = query(collection(db, "branch", "bV8ePgxge93kqUZEmE5t", "subjects"), 
                                where("branch", "==", branch), 
                                where("Year", "==", Year));
                
                const querySnapshot = await getDocs(q);
                const coursesData = [];
                querySnapshot.forEach((doc) => {
                    coursesData.push({ id: doc.id, ...doc.data() });
                });
                setcoursedetail(coursesData);
                console.log(coursedetail);
            } else {
                console.log("Branch or Year is undefined.");
            }
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };

    fetchDocuments();
}, [branch, Year]);



return (
    <>
    <div className='course-details'>
      <section className="playlist-videos">
        <h1 className="heading">Subjects</h1>
        <div className="box-container">
          {coursedetail.map((course, index) => (
            <div className="box" key={index}>
              <img src={course.cardimg} alt="" />
              <Link to={`/Showchapters/${course.subject}?Year=${course.Year}`}>
                <h3>{course.subject}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
  
};

export default Coursedetails;