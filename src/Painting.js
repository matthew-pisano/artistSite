import React from 'react';
import { makeTiles } from './common';
import { Header, Footer, FocusGallery } from "./Components";

function Painting() {
    let gallery = [
        {title: "Bath", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/bath.jpg"},
        {title: "Boots", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/boots.jpg"},
        {title: "Closet", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/closet.jpg"},
        {title: "Hands", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/contrastinghands.jpg"},
        {title: "Daylight Savings", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/daylightsavingweb.jpg"},
        {title: "Bodies", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/normalizebodies.jpg"},
        {title: "Cosmic Owl", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/owl.jpg"},
        {title: "Pearl Abstract", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/pearlabstract.jpg"},
        {title: "Pearl Fauvism", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/pearlfauv.jpg"},
        {title: "Pearl Realism", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/pearlrealism.jpg"},
        {title: "Relaxation", composition: "Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/painting/relaxation.jpg"},
    ];
    return (
        <div>
            <FocusGallery/>
            <div id="mainContent">
                <Header/>
                <div style={{width: "100%"}} className="w3-display-container">
                    <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px", marginTop: "25px"}} src="https://lightsail-image-repo.s3.amazonaws.com/painting/paintbanner.webp"/>
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
        </div>
    );
}

export default Painting;