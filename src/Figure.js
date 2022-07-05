import React from 'react';
import { makeTiles } from './common';
import { Header, Footer, FocusGallery } from "./Components";

function Figure() {
    let gallery = [
        {title: "Untitled1", composition: "Figure Drawing", src: "https://lightsail-image-repo.s3.amazonaws.com/figure/figure1.jpg"},
        {title: "Untitled2", composition: "Figure Drawing", src: "https://lightsail-image-repo.s3.amazonaws.com/figure/figure2.jpg"},
        {title: "Untitled3", composition: "Figure Drawing", src: "https://lightsail-image-repo.s3.amazonaws.com/figure/figure3.jpg"},
        {title: "Untitled4", composition: "Figure Drawing", src: "https://lightsail-image-repo.s3.amazonaws.com/figure/figure4.jpg"},
    ];
    return (
        <div>
            <FocusGallery/>
            <div id="mainContent">
                <Header/>
                <div style={{width: "100%"}} className="w3-display-container">
                    <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px", marginTop: "25px"}} src="https://lightsail-image-repo.s3.amazonaws.com/figure/figurebanner.jpg"/>
                    <div className="w3-padding w3-display-middle" style={{width: "100%"}}>
                        <h2 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "#8ea685", textAlign: "center", 
                            fontSize: "10vw", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Figure Drawings</h2>
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

export default Figure;