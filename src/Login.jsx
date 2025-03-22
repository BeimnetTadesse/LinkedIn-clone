import React, { useState } from "react";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  function register() {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  }

  function loginToApp(e) {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        // Check the error code
        if (error.code === "auth/invalid-email") {
          alert("Invalid email format. Please check your email address.");
        } else if (error.code === "auth/user-not-found") {
          alert("User not found. Please register first.");
        } else {
          alert("User not found. Please register first..");
        }
      });
  }
  
  return (
    <div className="login">
         <img src='data:image/png;base64,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' alt='logo'/>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (requied if registering) "
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Log In{" "}
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
