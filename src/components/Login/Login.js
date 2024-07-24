import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { db } from "../../config/firebase";
import { collection, where, getDocs, query } from "firebase/firestore";
import smallImage from "./GoogleLogo.png";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const setUserIdInLocalStorage = (userId) => {
    localStorage.setItem("userId", userId);
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const collectionRef = collection(db, "students");
      const querySnapshot = await getDocs(
        query(collectionRef, where("email", "==", email))
      );

      if (querySnapshot.empty) {
        console.log("User not found");
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userId = userDoc.id;

      await signInWithEmailAndPassword(auth, email, password);

      setUserIdInLocalStorage(userId);

      navigate("/HomePage");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      const collectionRef = collection(db, "students");
      const querySnapshot = await getDocs(
        query(collectionRef, where("email", "==", googleUser.email))
      );

      if (querySnapshot.empty) {
        console.log("User not found");
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userId = userDoc.id;

      setUserIdInLocalStorage(userId);

      navigate("/HomePage");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Campus Collab</h1>
          <p>Explore, engage, and excel with Campus Collab. Ignite your academic collaborations and fuel your campus connections. Start your journey with Campus Collab now!</p>
          <span>Don't you have an account?</span>
          <Link to="/Signup">
            <button>Sign up</button>
          </Link>
        </div>

        <div className="right">
          <h1>Welcome Back!</h1>
          <br></br>
          <form onSubmit={signIn}>
            <input className="email" type="email" name="email" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="email" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="btn">
              <button type="submit" className="btn-primary">Sign In</button>
            </div>
            <div className="btn">
              <button onClick={signInWithGoogle} className="btn-google">
                <img src={smallImage} alt="Small Icon" style={{ height: '24px', width: 'auto', marginRight: '8px' , borderRadius: '5px' }} /> Sign In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
