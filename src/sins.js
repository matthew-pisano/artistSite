import React from 'react';
import { Header, Footer, FocusGallery } from "./Components";
import {makeTiles} from "./common";

function Sins() {
    let gallery = [
        {title: "Greed", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/greed1.jpg"},
        {title: "Greed", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/greed2.jpg"},
        {title: "Envy", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/envy1.jpg"},
        {title: "Envy", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/envy2.jpg"},
        {title: "Lust", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/lust1.jpg"},
        {title: "Lust", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/lust2.jpg"},
        {title: "Wrath", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/wrath1.jpg"},
        {title: "Wrath", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/wrath2.jpg"},
        {title: "Gluttony", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/gluttony1.jpg"},
        {title: "Gluttony", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/gluttony2.jpg"},
        {title: "Gluttony", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/gluttony3.jpg"},
        {title: "Pride", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/pride1.jpg"},
        {title: "Pride", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/pride2.jpg"},
        {title: "Pride", composition: "Paper Clay, Cardboard, and Paint", src: "https://lightsail-image-repo.s3.amazonaws.com/sins/pride3.jpg"},
    ];
    return (
        <div>
            <FocusGallery/>
            <div id="mainContent">
                <Header/>
                <div style={{marginTop: "50px"}} className="w3-display-container w3-cell-row">
                    <div className="w3-cell cellHolder">
                        <img src="https://static.wixstatic.com/media/15a179_9050afdbffe6495ba605a438fa04c7c8~mv2.jpg/v1/fill/w_800,h_695,al_t,q_85/15a179_9050afdbffe6495ba605a438fa04c7c8~mv2.webp" alt=""/>
                    </div>
                    <div className="w3-cell cellText" style={{backgroundColor: "#aac79f", height: "auto"}}>
                        <div style={{paddingTop: "75px"}}>
                            <h1 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "whitesmoke", textAlign: "center", 
                                fontSize: "50px", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif"}}>
                                    The Seven Deadly Sins</h1>
                        </div>
                        <p style={{textAlign: "center", width: "80%", margin: "auto", padding: "50px"}}><b>A Re-interpretation</b></p>
                        <p style={{width: "80%", margin: "auto", padding: "10px"}}>
                            Sed vehicula, arcu in laoreet elementum, odio mauris tristique leo, sodales euismod leo lacus vitae elit. 
                            Fusce malesuada, diam ut viverra dictum, ante nisl fermentum neque, vel tempor metus turpis finibus orci. 
                            Cras volutpat dolor eget luctus interdum. Aliquam erat volutpat. Phasellus nec convallis velit, quis finibus ex. 
                            Duis faucibus congue urna, quis pretium dui eleifend a. Nunc consectetur vel arcu vitae vulputate. 
                            Fusce vestibulum velit id dolor consequat imperdiet. Quisque eu lorem aliquet, aliquet massa at, ultrices eros.
                        </p>
                        <p style={{width: "80%", margin: "auto", padding: "10px"}}>
                            Duis faucibus congue urna, quis pretium dui eleifend a. Nunc consectetur vel arcu vitae vulputate. 
                            Fusce malesuada, diam ut viverra dictum, ante nisl fermentum neque, vel tempor metus turpis finibus orci. 
                            Cras volutpat dolor eget luctus interdum. Aliquam erat volutpat. Phasellus nec convallis velit, quis finibus ex. 
                            Fusce vestibulum velit id dolor consequat imperdiet. Quisque eu lorem aliquet, aliquet massa at, ultrices eros.
                        </p>
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

export default Sins;