import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { signout, isAutheticated } from "../api/auth";
import ProfileImg from '../rohit.png';

const Profile = () => {
  const history = useHistory();
  const [profile, setProfile] = useState("");
  
  

  useEffect(() => {
    const data = isAutheticated();
    if (!data) {
      history.push("/");
    } else {
      findMe();
    }
  }, [history]);


  const findMe = () => {
    const token = JSON.parse(localStorage.getItem("jwt")).token;
    fetch("/api/v1/user/me", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setProfile(result.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleLogout = () => {
    signout();
    history.push("/");
  };
  return (
    <>
      <div>
        <div>
          <h2>Profile</h2>
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "150px",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <img src={profile.image? `/imageme/${profile.image}`:ProfileImg} style={{ height: '198px', width: '198px', borderRadius: '150px' }} alt="ProfileImg" />
        </div>
        <div style={{ marginTop: "20px", marginBottom: "10px", color: '#E0E0E0' }}>
          <h3>{profile ? profile.name.toUpperCase() : "Name"}</h3>
        </div>
        <div style={{ textAlign: "left",marginTop:'54px' }}>
          <UserInfo userInfo={profile} />
        </div>
        <div>
          <button
            style={{
              width: "230px",
              backgroundColor: "#82B1FF",
              // color: "white",
              fontSize: "1.5em",
              border: "none",
              borderRadius: "8px",
              marginBottom: "10px",
              marginTop: "40px",
            }}
            onClick={handleLogout}
          >
            SignOut
          </button>
        </div>
      </div>
    </>
  );
};

const UserInfo = (props) => {
  console.log('sdd',props.userInfo)
  
  return (
    <>
       <div style={{display:'flex'}}> 
      <p>User Email Id:</p>
        <h4 style={{fontSize:'18px',marginLeft:'24px',color:'darkorange'}}>
        {props.userInfo ? props.userInfo.email : "" }
      </h4> 
      </div>
      {/* <p>
        <b>No. of Games</b>
      </p>
      <p>
        <b>Winner:</b>
                <p>Email:&emsp;{props.userInfo ? props.userInfo.email : ""}</p>

      </p> */} 
      <div style={{display:'flex'}}> 
      <p>Last Login Date:</p>
        <h4 style={{fontSize:'18px',marginLeft:'24px',color:'darkorange'}}>
        {props.userInfo ? new Date(props.userInfo.lastActive).toLocaleDateString()+ '' : ""}
      </h4> 
      </div>
      <div style={{display:'flex'}}> 

      <p>Last Login Time:</p>
        <h4 style={{fontSize:'18px',marginLeft:'24px',color:'darkorange'}}>
       {props.userInfo ? new Date(props.userInfo.lastActive).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',hour12: true })+ '' : ""}
      </h4> 
      </div>
 
    </>
  );
};

export default Profile;
