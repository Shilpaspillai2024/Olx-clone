import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./store/FirebaseContext";
import firebase from "./firebase/config";
import Context from "./store/FirebaseContext";
import LoadingContextProvider from "./store/LoadingContext";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <LoadingContextProvider>
      <App />
      </LoadingContextProvider>
       
       
      
    </Context>
  </FirebaseContext.Provider>,

  document.getElementById("root")
);
