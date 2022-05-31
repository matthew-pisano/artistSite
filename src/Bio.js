import React from 'react';
import { Header, Footer } from "./Components";

function Bio() {
    return (
        <div id="mainContent">
            <Header/>
            <div style={{marginTop: "50px"}} className="w3-display-container w3-cell-row">
                <div className="w3-cell cellHolder">
                    <img src="KyliePhoto.png"/>
                </div>
                <div className="w3-cell cellText" style={{backgroundColor: "#aac79f", height: "auto"}}>
                    <div style={{paddingTop: "75px"}}>
                        <h1 style={{width: "80%", margin: "auto", backgroundColor: "rgba(41, 41, 41, 0.8)", color: "whitesmoke", textAlign: "center", 
                            fontSize: "50px", borderColor: "black", borderStyle: "solid", borderWidth: "5px", fontFamily: "rozha one,serif"}}>About the Artist</h1>
                    </div>
                    <p style={{textAlign: "center", width: "80%", margin: "auto", padding: "50px"}}><b>Kylie Williams</b></p>
                    <p style={{width: "80%", margin: "auto", padding: "10px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum lectus placerat blandit maximus. 
                        Integer porta libero non pretium dictum. Praesent finibus egestas lacus sed malesuada. 
                        Integer sed mi fermentum, aliquam enim at, placerat lectus. Maecenas arcu nisl, imperdiet luctus commodo vitae, 
                        sodales quis odio. Sed dictum, mauris quis feugiat ullamcorper, lectus enim maximus urna, non gravida ipsum nunc in dolor.  
                    </p>
                    <p style={{width: "80%", margin: "auto", padding: "10px"}}>
                        Sed vehicula, arcu in laoreet elementum, odio mauris tristique leo, sodales euismod leo lacus vitae elit. 
                        Fusce malesuada, diam ut viverra dictum, ante nisl fermentum neque, vel tempor metus turpis finibus orci. 
                        Cras volutpat dolor eget luctus interdum. Aliquam erat volutpat. Phasellus nec convallis velit, quis finibus ex. 
                        Duis faucibus congue urna, quis pretium dui eleifend a. Nunc consectetur vel arcu vitae vulputate. 
                        Fusce vestibulum velit id dolor consequat imperdiet. Quisque eu lorem aliquet, aliquet massa at, ultrices eros.</p>
                </div>
            </div>
            <Footer/>     
        </div>
    );
}

export default Bio;