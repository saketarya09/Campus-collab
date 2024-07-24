import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { db,storage } from '../../config/firebase';
import { collection, getDocs,doc,getDoc,addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ref, uploadBytes,getDownloadURL } from 'firebase/storage';
import './Chapter.css'
const Chapter = () => {
    const [pdf, setPdf] = useState(null);
        const [chaptername, setchaptername] = useState(null);
        const [branch, setbranch] = useState(null);
        const [subject, setsubject] = useState(null);
        const [Year, setYear] = useState(null);
        const navigate = useNavigate()

        const handleFileChange = (e) => {
          if (e.target.files[0]) {
            setPdf(e.target.files[0]);
          }
        };
      
        // Function to handle PDF upload
        const handleUpload = async () => {
          if (pdf) {
            // Upload PDF to Firebase Storage in the "pdf" folder
            const pdfRef = ref(storage, `pdf/${pdf.name}`);
            await uploadBytes(pdfRef, pdf);
            
      
            // Get download URL of the uploaded PDF
            const downloadURL = await getDownloadURL(pdfRef);
      
            // Store download URL in Firestore
            try {
              const subcollectionRef = collection(db, "branch", "bV8ePgxge93kqUZEmE5t", "pdf"); // Subcollection reference
              await addDoc(subcollectionRef, { chaptername: chaptername, pdfURL: downloadURL, branch:branch , subject:subject,Year:Year }); // Store download URL as a document in the subcollection
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
    <>
    <div className='syllabus'>

    <h2>Upload Chapter</h2>
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
                  placeholder="chaptername"
                  value={chaptername}
                  onChange={(e) => setchaptername(e.target.value)} 
                />

                <input
                  className="email"
                  type="text" 
                  name="prn"
                  placeholder="subject"
                  value={subject}
                  onChange={(e) => setsubject(e.target.value)} 
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
    <input type="file" accept="application/pdf" onChange={handleFileChange} />
     <button onClick={handleUpload} className="btn-primary">Upload</button>
    </div>
    </div>
        
    </>
  )
}

export default Chapter