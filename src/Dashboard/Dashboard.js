import React from 'react';
import Profile from './Profile';
import PlayGames from './PlayGames';
import LeaderBoard from './LeaderBoard';

const Dashboard = () => {


    return (
        <div style={{ textAlign: "center" }}>
            <div className="row" style={{ width: "70%", margin: 'auto', marginTop: '5px' }}>
                <div className="col-sm-12" style={{ backgroundColor: '#BA68C8', lineHeight: '0.3', borderRadius: ' 15px' }} ><DashHead /></div>
                <div className="col-sm-3" style={{ border: "5px solid white", backgroundColor: '#A597b0', borderRadius: '15px' }}><Profile /></div>
                <div className="col-sm-6" style={{ border: "5px solid white", backgroundColor: '#C0A7C5', borderRadius: '15px' }} ><PlayGames /></div>
                <div className="col-sm-3" style={{ border: "5px solid white", backgroundColor: '#878A8D', borderRadius: '15px' }}><LeaderBoard /></div>
            </div>
        </div>
    )
}

const DashHead = () => {
    return (
        <>
            <h2>Aviabird Fun Zone</h2>
            <p>Team builging games</p>
        </>
    )
}

export default Dashboard;