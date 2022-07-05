import React from 'react';
import { Header, Footer, FocusGallery } from "./Components";
import {makeTiles} from "./common";

function Ghost() {
    let gallery = [
        {title: "Hide n' Seek", composition: "Photography and Sculpture. Cardboard, Fabric, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/ghost/ghost1.webp"},
        {title: "Deep in Thought", composition: "Photography and Sculpture. Cardboard, Fabric, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/ghost/ghost2.webp"},
        {title: "Consideration", composition: "Photography and Sculpture. Cardboard, Fabric, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/ghost/ghost3.webp"},
        {title: "Remembrance of Youth", composition: "Photography and Sculpture. Cardboard, Fabric, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/ghost/ghost4.webp"},
        {title: "Acceptance", composition: "12\" Clay Sculpture Painted in Acrylic", src: "https://lightsail-image-repo.s3.amazonaws.com/ghost/okayghost.webp"},
        {title: "Solitude", composition: "20\"x 24\" Acrylic on Canvas", src: "https://lightsail-image-repo.s3.amazonaws.com/ghost/forestghost.webp"},
        {title: "Relaxation", composition: "16\"x 20\" Acrylic on Canvas", src: "https://lightsail-image-repo.s3.amazonaws.com/ghost/bathghost.webp"},
        {title: "Isolation", composition: "10\"x10\" Acrylic on Canvas", src: "https://lightsail-image-repo.s3.amazonaws.com/ghost/jarghost.webp"},
    ];
    return (
        <div>
            <FocusGallery/>
            <div id="mainContent">
                <Header/>
                <div style={{marginTop: "50px"}} className="w3-display-container w3-cell-row">
                    <div className="w3-cell cellHolder">
                        <img src="https://lightsail-image-repo.s3.amazonaws.com/ghost/cutghost.webp" alt=""/>
                    </div>
                    <div className="w3-cell cellText" style={{backgroundColor: "#aac79f", height: "auto"}}>
                        <div style={{paddingTop: "75px"}}>
                            <h1 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "whitesmoke", textAlign: "center", 
                                fontSize: "50px", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif"}}>
                                    A Journey into Mental Illness</h1>
                        </div>
                        <p style={{textAlign: "center", width: "80%", margin: "auto", padding: "50px"}}><b>Depression Through the Eyes of a Ghost</b></p>
                        <p style={{width: "80%", margin: "auto", padding: "10px"}}>
                            Depression Through the Eyes of a Ghost is an exhibition that I created in my senior year of high school. 
                            This exhibition is meant to describe depression and ways of coping with mental illness.
                        </p>
                        <p style={{width: "80%", margin: "auto", padding: "10px"}}>
                            I use art as an outlet to express my negative emotions. Therefore, the sympathetic ghost character was born. 
                            In many ways I identify with the ghost, enjoying nature and relaxing baths. However, symbolling an outcast, 
                            being isolated from society.</p>
                        <p style={{textAlign: "center", width: "80%", margin: "auto", padding: "50px"}}>
                            <b>For More Information on this Exhibition, Visit the Site Below</b>
                        </p>
                        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <button className="w3-button w3-mobile" style={{width: "auto", color: "#8ea685",
                            backgroundColor: "#1a1a1a"}} onClick={() => window.open('https://kyliewilliams858.wixsite.com/website','_self')}>Ghost Exhibition Site</button>
                        </div>
                    </div>
                </div>
                <div id="cardHolder" className="cardHolder w3-display-container w3-row">
                    {makeTiles(gallery)}
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Ghost;