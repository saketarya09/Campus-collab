import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { storage } from "../../config/firebase";
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [prn, setPrn] = useState("");
  const [dob, setdob] = useState("");
  const [branch, setBranch] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const paths = `students/${v4()}-${imageUpload?.name}`;
  const navigate = useNavigate();
  const studentCollectionRef = collection(db, 'students');

  const uploadFile = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, paths);

    return uploadBytes(imageRef, imageUpload).then((snapshot) => {
      console.log('Image uploaded successfully');
    });
  };

  const onSubmit = async () => {
    try {
      const docRef = await addDoc(studentCollectionRef, {
        email: email,
        name: userName,
        prn: prn,
        dob: dob,
        image: paths,
        branch: branch
      });

      console.log('Document written with ID: ', docRef.id);
     
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  };

  const signUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return; // Add return here to prevent further execution
    }
    setError(""); // Clear any previous error message
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await uploadFile();
      await onSubmit();
      navigate("/");
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    } finally {
      setLoading(false); // Ensure loading is set to false after operation
    }
  };

  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h1>Campus Collab</h1>
          <p>Explore, engage, and excel with Campus Collab. Ignite your academic collaborations and fuel your campus connections. Start your journey with Campus Collab now!</p>
          <span>Already have an account?</span>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Sign Up</h1>
          <form>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              name="prn"
              placeholder="PRN"
              value={prn}
              onChange={(e) => setPrn(e.target.value)}
            />
             <input
              type="date"
              name="dob"
              placeholder="D.o.b"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />
            <input
              type="text" 
              name="branch"
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value.toLowerCase())} 
            />
            <input 
              type="file"
              className="file-input"
              onChange={(event) => setImageUpload(event.target.files[0])} 
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              disabled={loading}
              onClick={(e) => { e.preventDefault(); signUp(); }}
              className="btn-primary"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
