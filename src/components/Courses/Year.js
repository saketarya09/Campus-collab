import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { db,storage } from '../../config/firebase';
import { collection, getDocs,doc,getDoc,addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ref, uploadBytes,getDownloadURL } from 'firebase/storage';

const Year = () => {
    const [cardimg, setcardimg] = useState(null);
        
    const [branch, setbranch] = useState(null);
    
    const [Year, setYear] = useState(null);
    const navigate = useNavigate()

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
          setcardimg(e.target.files[0]);
        }
      };
    
      // Function to handle PDF upload
      const handleUpload = async () => {
        if (cardimg) {
          // Upload PDF to Firebase Storage in the "pdf" folder
          const cardimgRef = ref(storage, `cardimg/${cardimg.name}`);
          await uploadBytes(cardimgRef, cardimg);
          
    
          // Get download URL of the uploaded PDF
          const downloadURL = await getDownloadURL(cardimgRef);
    
          // Store download URL in Firestore
          try {
            const subcollectionRef = collection(db, "branch", "bV8ePgxge93kqUZEmE5t", branch); // Subcollection reference
            await addDoc(subcollectionRef, 
                { 
                
                cardimg: downloadURL, 
                 
                
                Year:Year
            }); // Store download URL as a document in the subcollection
            console.log("PDF upload and link stored successfully!");
            navigate("/courses")
          } catch (error) {
            console.error("Error storing PDF link in Firestore:", error);
          }
        } else {
          console.log('No PDF file selected.');
        }
      };
  return (
    <div>
         <>
    <div className='syllabus'>

                <input
                  className="email"
                  type="text" 
                  name="prn"
                  placeholder="Branch"
                  value={branch}
                  onChange={(e) => setbranch(e.target.value.toLowerCase())} 
                />

                <input
                  className="email"
                  type="text" 
                  name="prn"
                  placeholder="year"
                  value={Year}
                  onChange={(e) => setYear(e.target.value)} 
                />


    <div>
    <h2>Upload card img</h2>
    <input type="file" onChange={handleFileChange} />
     <button onClick={handleUpload}>Upload</button>
    </div>
    </div>     
    </>
    </div>
  )
}

export default Year