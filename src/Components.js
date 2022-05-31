import React from 'react';
import { useNavigate } from "react-router-dom";
import {focusImage, selectedCard} from "./common";

let links = [
    {title: "Home", path: "/"},
    {title: "Ghost Exhibition", path: "/ghost"},
    {title: "Sculpture", path: "/sculpture"},
    {title: "Painting", path: "/painting"},
    {title: "Drawing", path: "/drawing"},
    {title: "Bio", path: "/bio"},
];

function unFocusImage(){
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("focusedContent").style.display = "none";
}
function prevCard(){
    if(selectedCard.previousElementSibling !== null)
        focusImage(selectedCard.previousElementSibling.id);
}
function nextCard(){
    if(selectedCard.nextElementSibling !== null)
        focusImage(selectedCard.nextElementSibling.id);
}

function Header(){
    let navigate = useNavigate();
    return (
        <header>
            <div className="w3-row w3-display-container" style={{width: "100%", backgroundColor: "#8ea685", paddingBottom: "25px", 
                    paddingLeft: "5%", paddingRight: "5%", borderStyle: "double", borderWidth: "10px 0px", borderColor: "whitesmoke"}}>                
                <div className="w3-half w3-row w3-display-container" style={{width: "100%", marginLeft: "auto", marginRight: "auto"}}>
                    <div className="w3-quarter">
                        <p style={{textAlign: "center", display: "flex", justifyContent: "center", alignContent: "center", 
                            flexDirection: "column", fontFamily: "rozha one,serif"}} className="circle"><b>K. G. W.</b></p>
                    </div>
                    <div className="w3-rest w3-mobile">
                        <h1 style={{width: "100%", textAlign: "center", fontFamily: "rozha one,serif"}}><b>Kylie Williams</b></h1>
                        <div id="headLinks" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", borderStyle: "solid", 
                                borderWidth: "3px 0px", borderColor: "whitesmoke"}} className="w3-display-container w3-row">
                            {
                                links.map(value => {
                                    return (
                                        <button key={value.title} className="w3-col w3-button w3-mobile" style={{width: "150px", margin: "auto", color: "#8ea685",
                                            backgroundColor: "#1a1a1a"}} onClick={() => navigate(value.path)}>{value.title}</button>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
function Footer(){
    return (
        <footer>
            <div style={{width: "auto", display: "flex", flexWrap: "wrap", justifyContent: "center", borderStyle: "double",
                    borderWidth: "10px 0px", borderColor: "whitesmoke"}}  className="w3-display-container w3-row">
                {
                   links.map(value => {
                    return (
                        <button key={value.title} className="w3-col w3-button w3-mobile" style={{width: "150px", margin: "auto", color: "#8ea685",
                            backgroundColor: "#1a1a1a"}} onClick={() => window.open(value.path, '_self')}>{value.title}</button>
                    );
                }) 
                }
            </div>
        </footer>
    );
}

function FocusGallery(){
    return (
        <div id="focusedContent" style={{width: "100%", display: "none", backgroundColor: "#8ea685"}}>
            <div className="w3-row w3-display-container" style={{width: "100%"}}>
                <button className="w3-button" style={{float: "right", fontSize: "40px"}} 
                onClick={() => unFocusImage()}>X</button>
            </div>
            <div className="w3-cell-row">
                <button className="w3-button w3-cell galleryButton" onClick={() => prevCard()}>&lt;</button>
                <div className="w3-cell w3-display-container" style={{backgroundColor: "red"}/*{marginLeft: "10%", marginRight: "10%", marginBottom: "10%"}*/}>
                    <img id="focusedImage" className="w3-half" style={{borderStyle: "double", borderWidth: "10px", borderColor: "whitesmoke", display: "none"}} alt=''/>
                    <span id="focusedText" className="w3-half" style={{paddingLeft: "5%", backgroundColor: "rgba(41, 41, 41, 0.8)", 
                        color: "whitesmoke", textAlign: "center", fontSize: "30px", borderStyle: "double", borderWidth: "10px 0px", borderColor: "whitesmoke", display: "none"}}></span>
                </div>
                <button className="w3-button w3-cell galleryButton" onClick={() => nextCard()}>&gt;</button>
            </div>
            {/*<div className="w3-row w3-display-container" style={{width: "100%"}}>
                <button className="w3-button w3-half galleryButton"
                onClick={() => prevCard()}>&lt;</button>
                <button className="w3-button w3-half galleryButton"
                onClick={() => nextCard()}>&gt;</button>
            </div>*/}
        </div>
    );
}

export {Header, Footer, FocusGallery};