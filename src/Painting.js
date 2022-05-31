import React from 'react';
import { makeTiles } from './common';
import { Header, Footer } from "./Components";

function Painting() {
    let gallery = [
        {title: "", composition: "", src: ""},
    ];
    return (
        <div id="mainContent">
            <Header/>
            <div style={{width: "100%"}} className="w3-display-container">
                <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px", marginTop: "25px"}} src="https://static.wixstatic.com/media/15a179_7695616d9f054d17bd6502aeb3bc0afe~mv2.jpg/v1/fill/w_1899,h_750,al_c,q_85,usm_0.66_1.00_0.01/15a179_7695616d9f054d17bd6502aeb3bc0afe~mv2.webp"/>
                <div className="w3-padding w3-display-middle" style={{width: "100%"}}>
                    <h2 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "#8ea685", textAlign: "center", 
                        fontSize: "10vw", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Painting</h2>
                </div>
            </div>
            <div className="cardHolder w3-display-container w3-row">
                {makeTiles(gallery)}
            </div>
            <Footer/>     
        </div>
    );
}

export default Painting;