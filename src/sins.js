import React from 'react';
import { Header, Footer, FocusGallery } from "./Components";
import {makeTiles} from "./common";
import greed1 from "./assets/sins/greed1.jpg";
import greed2 from "./assets/sins/greed2.jpg";
import envy1 from "./assets/sins/envy1.jpg";
import envy2 from "./assets/sins/envy2.jpg";
import lust1 from "./assets/sins/lust1.jpg";
import lust2 from "./assets/sins/lust2.jpg";
import wrath1 from "./assets/sins/wrath1.jpg";
import wrath2 from "./assets/sins/wrath2.jpg";

function Sins() {
    let gallery = [
        {title: "Greed", composition: "Paper Clay, Cardboard, and Paint", src: greed1},
        {title: "Greed", composition: "Paper Clay, Cardboard, and Paint", src: greed2},
        {title: "Envy", composition: "Paper Clay, Cardboard, and Paint", src: envy1},
        {title: "Envy", composition: "Paper Clay, Cardboard, and Paint", src: envy2},
        {title: "Lust", composition: "Paper Clay, Cardboard, and Paint", src: lust1},
        {title: "Lust", composition: "Paper Clay, Cardboard, and Paint", src: lust2},
        {title: "Wrath", composition: "Paper Clay, Cardboard, and Paint", src: wrath1},
        {title: "Wrath", composition: "Paper Clay, Cardboard, and Paint", src: wrath2},
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