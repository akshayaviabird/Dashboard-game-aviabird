import React, { useEffect, useState } from "react";
import PokerLogo from '../../src/card-logo.jpg'
import Qq from '../../src/Qq.gif';
import './PlayGame.css';
const PlayGames = () => {

    const [livegameList, setLivegameList] = useState([])

    useEffect(() => {
        fetchLiveGame()
    }, [])

    const fetchLiveGame = () => {
        fetch('/api/v1/livegame')
            .then((response) => response.json())
            .then((result) => {
                let livegames = result.data.filter((item) => item.live === true)
                if (result.success) {
                    setLivegameList(livegames)
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="row" style={{ margin: '1px' }}>
                <div className="col-sm-12">
                    <h2>Play Games</h2>
                </div>
                <div className="col-sm-12">
                    <a target="_blank" href="https://aviapoker.herokuapp.com" rel="noreferrer"><button style={{
                        width: '187px', backgroundColor: "#795EBF",
                        color: "white",
                        fontSize: "1.5em",
                        border: "none",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        marginRight: '10px',
                    }}> Host Game</button></a>
                </div>
                <div className="col-sm-12"
                    style={{
                        marginTop: '10px',

                        overflowY: "scroll",
                        height: "75vh"
                    }}>
                    {livegameList.length !== 0 ? livegameList.map((item) => <GameCard item={item} />) :
                        <div> <div className="blinkk" style={{ margin: 'auto', marginTop: '115px', fontWeight: 'bold', fontFamily: 'auto', fontSize: '5em' }}>
                            <div>No Live Games!</div>
                            <div>Host One</div>
                        </div>
                            <marquee direction="right"><img style={{ width: '350px', height: '200px' }} src={Qq} alt="" /> <span style={{ fontSize: '4em', fontWeight: "bold", color: 'tomato' }}>Games</span></marquee>
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

const GameCard = ({ item }) => {

    return (
        <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-sm-12">
                <div className='card_game' style={{ background: '#35B6D0', margin: 'auto', width: '90%', display: 'flex', justifyContent: 'space-between', borderRadius: '10px', boxShadow: "0px 5px 0px 5px grey" }}>
                    <div style={{ paddingLeft: '10%', textAlign: 'left' }} >
                        <h3 style={{ color: 'white' }}>Avia-Poker</h3>
                        <p style={{ fontWeight: 'bold', color: 'black' }}><span class="logged-in blink">●</span>&nbsp;{item.name}</p>
                        <a href={item.url} target="_blank" rel="noreferrer"> <button style={{
                            width: '187px', backgroundColor: "#795EBF",
                            color: "white",
                            fontSize: "1.5em",
                            border: "none",
                            borderRadius: "8px",
                            marginBottom: "10px",
                            marginRight: '10px',
                        }}>Play</button></a>
                    </div>
                    <div style={{ width: '150px', height: '128px' }}>
                        <img src={PokerLogo} alt="" style={{ width: '100%', height: '100%', borderRadius: '0 10px 10px 0' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayGames;