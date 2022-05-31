import React from 'react';
import { Header, Footer } from "./Components";

function Home() {
    return (
        <div id="mainContent">
            <Header/>
            <div className="w3-display-container" style={{width: "100%", paddingTop: "20px"}}>
                <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px"}} alt=""
                    src="https://static.wixstatic.com/media/15a179_dffc80953abd4e04b1e668fce4875da5~mv2.jpg/v1/fill/w_1899,h_974,al_c,q_85,usm_0.66_1.00_0.01/15a179_dffc80953abd4e04b1e668fce4875da5~mv2.webp"/><br/>
                <div className="w3-padding w3-display-topmiddle">
                    <h3 style={{textAlign: "center", color: "#ffffff", fontFamily: "rozha one,serif"}}>
                        Welcome to the art portfolio of</h3>
                    <h1 style={{textAlign: "center", fontSize: "50px", borderStyle: "solid", borderWidth: "5px", 
                        backgroundColor: "rgba(142, 166, 133, 0.8)", fontFamily: "rozha one,serif"}}>Kylie<br/>Williams</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;