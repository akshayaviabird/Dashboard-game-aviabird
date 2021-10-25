import React from "react";

const Profile = () => {
    return (
        <>
            <div>
                <div><h2>Profile</h2></div>
                <div style={{ width: '200px', height: '200px', borderRadius: '150px', border: '1px solid black', margin: 'auto', marginTop: '50px' }}><img scr="https://pbs.twimg.com/media/EYQBiFZWoAwiWOx.jpg" alt="" /></div>
                <div style={{ marginTop: '20px', marginBottom: '10px' }}><h3>User Name</h3></div>
                <div style={{ textAlign: 'left' }}><UserInfo /></div>
                <div><button
                    style={{
                        width: '230px', backgroundColor: "#795EBF",
                        color: "white",
                        fontSize: "1.5em",
                        border: "none",
                        borderRadius: "8px",
                        marginBottom: "10px",
                        marginTop: '40px'
                    }}

                >SignOut</button></div>
            </div>
        </>
    )
}

const UserInfo = () => {
    return (
        <>
            <p><b>Email:</b></p>
            <p><b>Designation: </b></p>
            <p><b>No. of Games</b></p>
            <p><b>Winner:</b></p>
            <p><b>Last Login:</b></p>
        </>
    )
}

export default Profile;