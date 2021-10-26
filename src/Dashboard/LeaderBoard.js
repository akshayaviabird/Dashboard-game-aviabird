import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Loader from "../components/common/loader";

const LeaderBoard = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLloading] = useState(false);
  useEffect(() => {
    setIsLloading(true);
    fetchUser();
  }, []);
  const fetchUser = () => {
    setIsLloading(true);
    fetch("http://localhost:3000/api/v1/leaderbaord")
      .then((response) => response.json())
      .then((data) => {
       setIsLloading(true);
        setResult(data.data);
        setIsLloading(false);
      })
      .catch(() => {
        setIsLloading(false);
      })
      .finally(() => {
        setIsLloading(false);
      });
  };
//   console.log("aaaaa", result,isLoading);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="row" style={{ margin: "1px" }}>
          <div className="col-sm-12">
            <h2>LeaderBoard</h2>
          </div>
          <div className="col-sm-12" style={{ marginTop: "10px" }}>
            {/* {[1, 2, 3, 4, 5, 6].map(p => <LeaderData data={result} />)} */}
            {/* {re} */}
          
            {result.map((item) => {
              return <LeaderData data={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

const LeaderData = ({ data }) => { 
  return (
      <Card style={{marginBottom:'11px'}}>  
      <p>{new Date(data.date).toLocaleDateString()}</p>
      {data.score.sort(function (a, b) {return b.points - a.points}).slice(0,3).map((item)=>{
          return(
            <div style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-sm-12">
                <div
                  style={{
                    background: "#FF80AB",
                    display: "flex",
                    justifyContent: "space-around",
                    borderRadius: "10px",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <div
                    style={{ width: "40px", height: "38px", borderRadius: "40px" }}
                  >
                    <img
                      src="https://pbs.twimg.com/media/EYQBiFZWoAwiWOx.jpg"
                      alt=""
                      style={{ width: "100%", height: "100%", borderRadius: "100%" }}
                    />
                  </div>
                  <div>{item.username}</div>
                  <div>
                    <b>{item.points}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
      })}
  </Card>
  );
};

export default LeaderBoard;
