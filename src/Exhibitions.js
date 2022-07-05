import React from 'react';
import { makeTiles } from './common';
import { Header, Footer, FocusGallery } from "./Components";

function Exhibitions() {
    let gallery = [
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib1.jpg"},
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib2.jpg"},
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib3.jpg"},
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib4.jpg"},
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib5.jpg"},
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib6.jpg"},
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib7.jpg"},
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib8.jpg"},
        {title: "Ulster Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/finalexhib9.jpg"},
        {title: "Owl Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/owlexhib1.jpg"},
        {title: "Owl Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/owlexhib2.jpg"},
        {title: "Owl Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/owlexhib3.jpg"},
        {title: "Owl Exhibition", composition: "Sculpture", src: "https://lightsail-image-repo.s3.amazonaws.com/exhibitions/owlcinema.jpg"},
    ];
    return (
        <div>
            <FocusGallery/>
            <div id="mainContent">
                <Header/>
                <div style={{width: "100%"}} className="w3-display-container">
                    <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px", marginTop: "25px"}} src="https://lightsail-image-repo.s3.amazonaws.com/exhibitions/exhibbanner.jpg"/>
                    <div className="w3-padding w3-display-middle" style={{width: "100%"}}>
                        <h2 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "#8ea685", textAlign: "center", 
                            fontSize: "10vw", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Exhibitions</h2>
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

export default Exhibitions;