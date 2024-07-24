import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import { storage } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import "./Createclub.css";

const Createclub = () => {
  const navigate = useNavigate();
  const [ClubId, setClubId] = useState('');
  const [newclubName, setclubName] = useState('');
  const [clubAdmin, setclubAdmin] = useState('');
  const [newdescription, setdescription] = useState('');
  const [aboutclub, setaboutclub] = useState('');
  const [established, setestablished] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const pathsPrefix = `club/${v4()}-`;

  const clubCollectionRef = collection(db, 'club');

  const uploadFiles = async () => {
    if (!imageUpload || imageUpload.length === 0) return [];

    const uploadPromises = Array.from(imageUpload).map((image, index) => {
      const path = `${pathsPrefix}${index}-${image.name}`;
      const imageRef = ref(storage, path);
      return uploadBytes(imageRef, image);
    });

    try {
      // Wait for all uploads to complete
      await Promise.all(uploadPromises);

      // Return an array of paths after all uploads are complete
      return Array.from(imageUpload).map((_, index) => `${pathsPrefix}${index}-${imageUpload[index].name}`);
    } catch (error) {
      console.error('Error uploading images:', error);
      throw error; // Rethrow the error to handle it in the calling function
    }
  };

  const onSubmitClub = async () => {
    try {
      const imagePaths = await uploadFiles(); // Ensure that image uploads are complete before proceeding

      const docRef = await addDoc(clubCollectionRef, {
        clubId: ClubId,
        name: newclubName,
        admin: clubAdmin,
        description: newdescription,
        images: imagePaths,
        established:established,
        aboutclub:aboutclub // Store the array of paths in the Firestore document
      });

      console.log('Document written with ID: ', docRef.id);

      navigate('/club');
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  };

  return (
    <div className='vertical-container'>
      <div className='clubtype'>
        <div>
        <h7>Create Club</h7>
        <input
          placeholder="Club ID"
          type="number"
          value={ClubId}
          onChange={(e) => setClubId(e.target.value)}
        />
        <input
          placeholder="Club name"
          type="string"
          value={newclubName}
          onChange={(e) => setclubName(e.target.value)}
        />
        <input
          placeholder="Club Admin"
          type="string"
          value={clubAdmin}
          onChange={(e) => setclubAdmin(e.target.value)}
        />
        <input
          placeholder="Description "
          type="string"
          value={newdescription}
          onChange={(e) => setdescription(e.target.value)}
        />
         <input
          placeholder="aboutclub "
          type="string"
          value={aboutclub}
          onChange={(e) => setaboutclub(e.target.value)}
        />
        <input
          placeholder="Club ID"
          type="date"
          value={established}
          onChange={(e) => setestablished(e.target.value)}
        />
        <br></br>
        <br></br>

        <input type="file" className='file-input' multiple onChange={(event) => setImageUpload(event.target.files)} />
      </div>
      <button className='btn-primary' onClick={onSubmitClub}>Submit Club</button>
    </div>
    </div>
  );
};

export default Createclub;