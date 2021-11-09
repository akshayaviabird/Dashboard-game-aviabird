import React, { useEffect, useState } from "react";
import PokerLogo from "../../src/card-logo.jpg"; 
import { Modal, Button } from "react-bootstrap";
import "./PlayGame.css";
const PlayGames = () => {
  const [livegameList, setLivegameList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [username,setUserName]=useState('')
  const [userEmail,setUserEmail]=useState('')


  useEffect(() => {
    fetchLiveGame();
    findMe()
  }, []);
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
        setUserName(result.data.name);
        setUserEmail(result.data.email)
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const fetchLiveGame = () => {
    fetch("/api/v1/livegame")
      .then((response) => response.json())
      .then((result) => {
        let livegames = result.data.filter((item) => item.live === true);
        if (result.success) {
          setLivegameList(livegames);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row" style={{ margin: "1px" }}>
        <div className="col-sm-12">
          <h2>Play Games</h2>
        </div>
        <div className="col-sm-12">
          <button
            onClick={() => setModalShow(true)}
            style={{
              width: "187px",
              backgroundColor: "#795EBF",
              color: "white",
              fontSize: "1.5em",
              border: "none",
              borderRadius: "8px",
              marginBottom: "10px",
              marginRight: "10px",
            }}
          >
            {" "}
            Host Game
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div
          className="col-sm-12"
          style={{
            marginTop: "10px",

            overflowY: "scroll",
            height: "75vh",
          }}
        >
          {livegameList.length < 1 && (
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-sm-12">
                <div
                  className="card_game"
                  style={{
                    background: "#35B6D0",
                    margin: "auto",
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: "10px",
                    height: "70px",
                  }}
                >
                  <div style={{ paddingLeft: "10%", textAlign: "left" }}>
                    <h3
                      style={{
                        color: "white",
                        marginLeft: "65px",
                        marginTop: "20px",
                      }}
                    >
                      No Live Game Found
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
          {livegameList.map((item) => (
            <GameCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const GameCard = ({ item }) => {
  const [username,setUserName]=useState('')
  const [userEmail,setUserEmail]=useState('')


  useEffect(() => { 
    findMe()
  }, []);
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
        setUserName(result.data.name);
        setUserEmail(result.data.email)
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-sm-12">
        <div
          className="card_game"
          style={{
            background: "#35B6D0",
            margin: "auto",
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "10px",
            boxShadow: "0px 5px 0px 5px grey",
          }}
        >
          <div style={{ paddingLeft: "10%", textAlign: "left" }}>
            <h3 style={{ color: "white" }}>Avia-Poker</h3>
            <p style={{ fontWeight: "bold" }}>
              <span class="logged-in blink">●</span>&nbsp;{item.name}
            </p>
            <a href={`${item.url}&username=${username}&email=${userEmail}`} target="_blank" rel="noreferrer">
              {" "}
              <button
                style={{
                  width: "187px",
                  backgroundColor: "#795EBF",
                  color: "white",
                  fontSize: "1.5em",
                  border: "none",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  marginRight: "10px",
                }}
              >
                Play
              </button>
            </a>
          </div>
          <div style={{ width: "150px", height: "128px" }}>
            <img
              src={PokerLogo}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0 10px 10px 0",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  const [username,setUserName]=useState('')
  const [userEmail,setUserEmail]=useState('')


  useEffect(() => { 
    findMe()
  }, []);
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
        setUserName(result.data.name);
        setUserEmail(result.data.email)
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          List Of Available Games
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <a
          target="_blank"
          href={`http://localhost:4000?username=${username}&email=${userEmail}/`}
          // href={`https://aviapoker.herokuapp.com`}
          rel="noreferrer"
        >
          <button
           onClick={props.onHide}
            style={{
              width: "187px",
              backgroundColor: "#795EBF",
              color: "white",
              fontSize: "1.5em",
              border: "none",
              borderRadius: "8px",
              marginBottom: "10px",
              marginRight: "10px",
            }}
          >
            {" "}
            Avia-Poker
          </button>
        </a>
        <a 
               target="_blank"
               href={`https://aviaguessword.herokuapp.com`}
               rel="noreferrer"
        >
        <button
          style={{
            width: "187px",
            backgroundColor: "#795EBF",
            color: "white",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "8px",
            marginBottom: "10px",
            marginRight: "10px",
          }}
        >
          {" "}
          Guessing-Word
        </button>
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modle-close" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PlayGames;
