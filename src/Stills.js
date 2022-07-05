import React from 'react';
import { makeTiles } from './common';
import { Header, Footer, FocusGallery } from "./Components";

function Stills() {
    let gallery = [
        {title: "Bottles", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/bottlestill1.jpg"},
        {title: "Bottles2", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/bottlestill2.jpg"},
        {title: "Broke", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/brokestill.jpg"},
        {title: "Cups", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/cupstill.jpg"},
        {title: "E G G", composition: "Egg", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/eggcarton.jpg"},
        {title: "Face", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/facestill.jpg"},
        {title: "Gourd", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/gourdstill.jpg"},
        {title: "Grey", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/greystill.jpg"},
        {title: "Pitcher", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/pitcherstill.jpg"},
        {title: "Pumpkin", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/pumpkinstill.jpg"},
        {title: "Red", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/redstill.jpg"},
        {title: "Tower", composition: "Paper", src: "https://lightsail-image-repo.s3.amazonaws.com/stills/towerstill.jpg"},
    ];
    return (
        <div>
            <FocusGallery/>
            <div id="mainContent">
                <Header/>
                <div style={{width: "100%"}} className="w3-display-container">
                    <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px", marginTop: "25px"}} src="https://lightsail-image-repo.s3.amazonaws.com/stills/stillbanner.jpg"/>
                    <div className="w3-padding w3-display-middle" style={{width: "100%"}}>
                        <h2 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "#8ea685", textAlign: "center", 
                            fontSize: "10vw", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Still Lives</h2>
                    </div>
                </div>
                <div className="cardHolder w3-display-container w3-row">
                    {makeTiles(gallery)}
                </div>
                <Footer/>     
            </div>
        </div>
    );
}

export default Stills;