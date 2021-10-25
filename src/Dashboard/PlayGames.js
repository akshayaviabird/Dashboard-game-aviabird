import React from "react";

const PlayGames = () => {
    return (
        <>
            <div className="row" style={{ margin: '1px' }}>
                <div className="col-sm-12">
                    <h2>Play Games</h2>
                </div>
                <div className="col-sm-12"
                    style={{
                        marginTop: '10px',
                        overflowY: "scroll",
                        height: "80vh"
                    }}>
                    {[1, 2, 3].map(x => <GameCard />)}
                </div>
            </div>
        </>
    )
}

const GameCard = () => {
    return (
        <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-sm-12">
                <div style={{ background: '#35B6D0', margin: 'auto', width: '90%', display: 'flex', justifyContent: 'space-between', borderRadius: '10px', boxShadow: "0px 5px 0px 5px grey" }}>
                    <div style={{ paddingLeft: '10%', textAlign: 'left' }} >
                        <h3 style={{ color: 'white' }}>Game Name</h3>
                        <p>Game description</p>
                        <button style={{
                            width: '187px', backgroundColor: "#795EBF",
                            color: "white",
                            fontSize: "1.5em",
                            border: "none",
                            borderRadius: "8px",
                            marginBottom: "10px",
                            marginRight: '10px',
                        }}>Play</button>
                    </div>
                    <div style={{ width: '150px', height: '128px' }}>
                        <img src="https://pbs.twimg.com/media/EYQBiFZWoAwiWOx.jpg" alt="" style={{ width: '100%', height: '100%', borderRadius: '0 10px 10px 0' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayGames;