import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../config/firebase'
import { storage } from '../../config/firebase'
import { addDoc,collection } from 'firebase/firestore'
import {ref,uploadBytes} from 'firebase/storage'
import { v4 } from 'uuid'

const Createevents = () => {
    let navigate = useNavigate();
    const [EventId, setEventId] = useState('');
    const [newEventName, setEventName] = useState('');
    const [eventAdmin, seteventAdmin] = useState('');
    const [newdescription, setdescription] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [clubName, setclubName] = useState('');
    const paths = `event/${v4()}-${imageUpload?.name}`; 
    const [aboutevent, setaboutevent] = useState('');
    const [eventdate, seteventdate] = useState('');
    const [eventtime, seteventtimer] = useState('');
    const [eventvenue, seteventvenue] = useState('');


    const eventCollectionRef = collection(db, 'events');

    const uploadFile = () => {
        if (imageUpload === null) return;
    
        const imageRef = ref(storage, paths);
    
        return uploadBytes(imageRef, imageUpload).then((snapshot) => {
          console.log('Image uploaded successfully');
        });
      };

      const onSubmitClub = async () => {
        try {
          const docRef = await addDoc(eventCollectionRef, {
            EventId: EventId, // Use camelCase for property names
            name: newEventName,
            admin: eventAdmin,
            description: newdescription,
            image: paths,
            clubname:clubName,
            about:aboutevent,
            date:eventdate,
            time:eventtime,
            venue:eventvenue

          });
    
          console.log('Document written with ID: ', docRef.id);
    
          await uploadFile();
          navigate("/Events")
        } catch (err) {
          console.error('Error adding document: ', err);
        }
      };


  return (
    <div className='vertical-container'>
    <div className='clubtype'>
      <div>
        <h1>Create Event</h1>
        <br></br>
        <br></br>
      <input
        placeholder="Club name "
        type='string'
        value={clubName}
        onChange={(e) => setclubName(e.target.value)}
      />
       <input
        placeholder="Event ID"
        type='number'
        value={EventId}
        onChange={(e) => setEventId(e.target.value)}
      />
      <input
        placeholder="Event name"
        type='string'
        value={newEventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        placeholder="Event Admin"
        type='string'
        value={eventAdmin}
        onChange={(e) => seteventAdmin(e.target.value)}
      />
      <input
        placeholder="Description "
        type='string'
        value={newdescription}
        onChange={(e) => setdescription(e.target.value)}
      />

      <input
        placeholder="About Event "
        type='string'
        value={aboutevent}
        onChange={(e) => setaboutevent(e.target.value)}
      />

      <input
        placeholder="Date "
        type='date'
        value={eventdate}
        onChange={(e) => seteventdate(e.target.value)}
      />

      <input
        placeholder="Time "
        type='time'
        value={eventtime}
        onChange={(e) => seteventtimer(e.target.value)}
      />

      <input
        placeholder="Venue "
        type='String'
        value={eventvenue}
        onChange={(e) => seteventvenue(e.target.value)}
      />


      <input type="file"  className='file-input' onChange={(event) => setImageUpload(event.target.files[0])} />
    </div>
    <button className='btn-primary' onClick={onSubmitClub}>Submit Club</button>
  </div>
  </div>
  )
}

export default Createevents
