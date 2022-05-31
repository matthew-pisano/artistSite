import React from 'react';
import { makeTiles } from './common';
import { Header, Footer } from "./Components";

function Drawing() {
    let gallery = [
        {title: "", composition: "", src: ""},
    ];
    return (
        <div id="mainContent">
            <Header/>
            <div style={{width: "100%"}} className="w3-display-container">
                <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px", marginTop: "25px"}} src="https://static.wixstatic.com/media/15a179_610b8a5825b4433eba04a5277760ad46~mv2.jpg/v1/fill/w_1200,h_496,al_c,q_85/15a179_610b8a5825b4433eba04a5277760ad46~mv2.webp"/>
                <div className="w3-padding w3-display-middle" style={{width: "100%"}}>
                    <h2 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "#8ea685", textAlign: "center", 
                        fontSize: "10vw", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Drawing</h2>
                </div>
            </div>
            <div className="cardHolder w3-display-container w3-row">
                {makeTiles(gallery)}
            </div>
            <Footer/>     
        </div>
    );
}

export default Drawing;