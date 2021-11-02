import React from 'react';
import Profile from './Profile';
import PlayGames from './PlayGames';
import LeaderBoard from './LeaderBoard';
// import BackLead from '../../src/Lead.png';
import Image from '../../src/images.jpeg';

const Dashboard = () => {


    return (
        <div style={{ textAlign: "center", backgroundImage: `url(${Image})`, height: "100vh" }}>
            <div className="row" style={{ width: "90%", margin: 'auto', marginTop: '5px' }}>
                <div className="col-sm-12" style={{ backgroundColor: 'darkcyan', lineHeight: '0.3', borderRadius: ' 15px', color: 'aliceblue' }} ><DashHead /></div>
                <div className="col-sm-3" style={{ border: "2px solid white", backgroundColor: '#006064', borderRadius: '15px', color: '#E0E0E0', boxShadow: '0 5px 8px 8px aquamarine' }}><Profile /></div>
                <div className="col-sm-6" style={{ border: "2px solid white", backgroundColor: '#0D47A1', borderRadius: '15px', color: '#82B1FF', boxShadow: '0 12px 8px 0 aquamarine' }} ><PlayGames /></div>
                <div className="col-sm-3" style={{ border: "2px solid white", backgroundColor: '#006064', borderRadius: '15px', boxShadow: '5px 5px 8px 5px aquamarine' }}><LeaderBoard /></div>
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