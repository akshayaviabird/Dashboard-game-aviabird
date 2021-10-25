import React from "react";

const LeaderBoard = () => {
    return (
        <>
            <div className="row" style={{ margin: '1px' }}>
                <div className="col-sm-12">
                    <h2>LeaderBoard</h2>
                </div>
                <div className="col-sm-12" style={{ marginTop: '10px' }}>
                    {[1, 2, 3, 4, 5, 6].map(p => <LeaderData />)}
                </div>
            </div>
        </>
    )
}

const LeaderData = () => {
    return (
        <div style={{ marginTop: '10px' }}>
            <div className="row">
                <div className="col-sm-12">
                    <div style={{ background: '#FF80AB', display: 'flex', justifyContent: 'space-around', borderRadius: '10px', alignItems: 'center', padding: '5px' }}>
                        <div style={{ width: '40px', height: '38px', borderRadius: '40px' }}>
                            <img src="https://pbs.twimg.com/media/EYQBiFZWoAwiWOx.jpg" alt="" style={{ width: '100%', height: '100%', borderRadius: "100%" }} />
                        </div>
                        <div >
                            Name
                        </div>
                        <div >
                            <b>300</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard;