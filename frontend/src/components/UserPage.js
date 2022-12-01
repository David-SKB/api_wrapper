import React from "react";

function DisplayUser(props) {
  const userData = props.userData;
  return (
      <div>
          <img src={userData.avatar} alt="logo" />
          <div>
              <div>ID: {userData.id}</div>
              <div>Email: {userData.email}</div>
              <div>First Name: {userData.first_name}</div>
              <div>Last Name: {userData.last_name}</div>
          </div>
      </div>
  );
}

function UserPage(props) {
    console.log("[UP] USER DATA: " + props.userData);
    return (
        <DisplayUser userData={props.userData} />
    );
}

export default UserPage;
