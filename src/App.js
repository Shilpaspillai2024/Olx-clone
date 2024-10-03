
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import Home from "./Pages/Home";
import "./App.css";
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import Post from './store/PostContext'


function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [firebase, setUser]);

  return (
    <div>
      <Post>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sell">
          <Create />
        </Route>
        <Route path="/view">
          <View/>
        </Route>
      </Router>

      </Post>
    </div>
  );
}

export default App;
