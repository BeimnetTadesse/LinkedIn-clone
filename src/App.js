import React, { useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import "./App.css";
import Feed from "./Feed";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        // user logged in
      } else {
        // user logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
