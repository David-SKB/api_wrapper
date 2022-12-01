import React, { useState, useEffect } from "react";
import './App.css';
import { useParams } from "react-router-dom";
import UserPage from "./components/UserPage";
import {getUser} from "./api/UserAPI";

function LoadUser(props) {
const dataLoaded = props.dataLoaded;
const userId = props.userId;
const userData = props.userData;

  // Check if user id has been passed and exists
  if (userData === 404) {
    // User does not exist
    return (
      <div className="UserPage">User {userId} not found...</div>
    );
  } else if (!props.userId) {
    // No user id passed via url
    return (
      <div className="UserPage">User ID not present in URL...</div>
    );
  } else {
    // Load UserPage component once user data has been retrieved
    return (
      <div className="UserPage">
        {dataLoaded && <UserPage userData={userData} userId={userId} />}
      </div>
    );
  }
}

function App() {
  // Hook used to access path paramaters
  const urlParams = useParams();
  const userId = urlParams.userId;
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userData, setUserData] = useState([]);
  // Debug
  console.log("[APP] URL PARAMS: " + JSON.stringify(urlParams));
  console.log("[APP] USER ID: " + userId);

  // Retrieve user information from API on component load
  useEffect(() => {
    console.log("[APP] LOADING USER DATA: " + dataLoaded);
    getUser(userId).then((response) => {
      setUserData(response);
      setDataLoaded(true);
      console.log("[APP] USER DATA: " + JSON.stringify(response));
    });
  }, []);

  return (
    <div>
      <header className="App-header">
        <div>Full-Stack Engineer: Line-Up Coding Exercise - David Okeke</div>
      </header>
      <LoadUser userData={userData} userId={userId} dataLoaded={dataLoaded}/>
    </div>
  );
}

export default App;
