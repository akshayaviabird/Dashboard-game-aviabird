import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { signout, isAutheticated } from "../api/auth";

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
    fetch("http://localhost:3000/api/v1/user/me", {
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
            border: "1px solid black",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <img scr="https://pbs.twimg.com/media/EYQBiFZWoAwiWOx.jpg" alt="" />
        </div>
        <div style={{ marginTop: "20px", marginBottom: "10px" }}>
          <h3>{profile ? profile.name : "Name"}</h3>
        </div>
        <div style={{ textAlign: "left" }}>
          <UserInfo userInfo={profile} />
        </div>
        <div>
          <button
            style={{
              width: "230px",
              backgroundColor: "#795EBF",
              color: "white",
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
  return (
    <>
      <p>
        <b>Email:{props.userInfo ? props.userInfo.email : ""}</b>
      </p>
      <p>
        <b>Designation: </b>
      </p>
      <p>
        <b>No. of Games</b>
      </p>
      <p>
        <b>Winner:</b>
      </p>
      <p>
        <b>Last Login:</b>
      </p>
    </>
  );
};

export default Profile;
