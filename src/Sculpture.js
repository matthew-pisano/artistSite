import React from 'react';
import { makeTiles } from './common';
import { Header, Footer, FocusGallery } from "./Components";

function Sculpture() {
    let gallery = [
        {title: "Chairy Devito", composition: "A life sized moving office chair featuring Danny Devito's face emerging from the seat, made from cardboard and brown paper", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/chairy1.webp"},
        {title: "Chairy Devito", composition: "A life sized moving office chair featuring Danny Devito's face emerging from the seat, made from cardboard and brown paper", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/chairy2.webp"},
        {title: "Cult Box", composition: "Revolving box show casing four unique faces. Three line work masks are able to articulate to fit on all four faces. The pole above is used as a handle to spin the box. With a wire skull ( resembling the skull mask ) tops the handle.\nCardboard, Homemade 12\"x12\" paper, Marker, Wire, Found objects, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/cult1.webp"},
        {title: "Cult Box", composition: "Revolving box show casing four unique faces. Three line work masks are able to articulate to fit on all four faces. The pole above is used as a handle to spin the box. With a wire skull ( resembling the skull mask ) tops the handle.\nCardboard, Homemade 12\"x12\" paper, Marker, Wire, Found objects, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/cult2.webp"},
        {title: "Cult Box", composition: "Revolving box show casing four unique faces. Three line work masks are able to articulate to fit on all four faces. The pole above is used as a handle to spin the box. With a wire skull ( resembling the skull mask ) tops the handle.\nCardboard, Homemade 12\"x12\" paper, Marker, Wire, Found objects, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/cult3.webp"},
        {title: "Wire mask", composition: "Prints of homemade paper, paper mached onto a Styrofoam mannequin head. Aluminum wire in a skull like form.", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/mask.webp"},
        {title: "Croc", composition: "An identical replica of a Croc shoe. The Length is 30\" inches, scaled to three times the size of a normal shoe. Cardboard, Brown Paper, and Ink.", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/croc.webp"},
        {title: "Tension", composition: "Sculpture made from air dry clay, yarn, found objects, and acrylic paint.", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/tension.webp"},
        {title: "Wave", composition: "Sculpture made from clothes pins", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/wave1.webp"},
        {title: "Wave", composition: "Sculpture made from clothes pins", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/wave2.webp"},
        {title: "Reclining Cork Chair", composition: "A wine cork shaped into a chair", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/cork1.webp"},
        {title: "Cork Swivel Chair", composition: "A wine cork shaped into a chair", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/cork2.webp"},
        {title: "Mushroom Lamp", composition: "A fully functioning lamp, sculpted to look like an abstracted mushroom form. Created from found objects, paper, paper clay, foam board, and acrylic paint.", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/lamp.webp"},
        {title: "The Red Scare", composition: "Foam and paper clay sculpted into a abstract form, and painted with acrylic paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/redscare.webp"},
        {title: "Eyes", composition: "Clay Sculpture on canvas", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/eyes.jpg"},
        {title: "Decomposition", composition: "A plastic mask, paper mached and sculpted with paper clay. Moss and mushrooms created from foam board and paper clay, decorated the back of the head. Everything is painted with acrylic paint.", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/decomp1.webp"},
        {title: "Decomposition", composition: "A plastic mask, paper mached and sculpted with paper clay. Moss and mushrooms created from foam board and paper clay, decorated the back of the head. Everything is painted with acrylic paint.", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/decomp2.webp"},
        {title: "Decomposition", composition: "A plastic mask, paper mached and sculpted with paper clay. Moss and mushrooms created from foam board and paper clay, decorated the back of the head. Everything is painted with acrylic paint.", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/decomp3.webp"},
        {title: "Decomposition", composition: "A plastic mask, paper mached and sculpted with paper clay. Moss and mushrooms created from foam board and paper clay, decorated the back of the head. Everything is painted with acrylic paint.", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/decomp4.webp"},
        {title: "Cliffside Hotel", composition: "Architectural model made from cardboard, foam board, paper clay, plastic sheets, paper, and acrylic paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/hotel1.webp"},
        {title: "Cliffside Hotel", composition: "Architectural model made from cardboard, foam board, paper clay, plastic sheets, paper, and acrylic paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/hotel2.webp"},
        {title: "Cliffside Hotel", composition: "Architectural model made from cardboard, foam board, paper clay, plastic sheets, paper, and acrylic paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/hotel3.webp"},
        {title: "Cliffside Hotel", composition: "Architectural model made from cardboard, foam board, paper clay, plastic sheets, paper, and acrylic paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sculpture/hotel4.webp"},
    ];
    return (
        <div>
            <FocusGallery/>
            <div id="mainContent">
                <Header/>
                <div style={{width: "100%"}} className="w3-display-container">
                    <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px", marginTop: "25px"}} src="https://lightsail-image-repo.s3.amazonaws.com/sculpture/crocbanner.webp"/>
                    <div className="w3-padding w3-display-middle" style={{width: "100%"}}>
                        <h2 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "#8ea685", textAlign: "center", 
                            fontSize: "10vw", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>Sculpture</h2>
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

export default Sculpture;