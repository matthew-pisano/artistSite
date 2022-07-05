import React from 'react';
import { useNavigate } from "react-router-dom";
import {focusImage, selectedCard} from "./common";

let links = [
    {title: "Home", path: "/"},
    {title: "Ghost Exhibition", path: "/ghost"},
    {title: "Sins", path: "/sins"},
    {title: "Sculpture", path: "/sculpture"},
    {title: "Painting", path: "/painting"},
    {title: "Drawing", path: "/drawing"},
    {title: "Figure Drawings", path: "/figure"},
    {title: "Still Lives", path: "/stills"},
    {title: "Exhibitions", path: "/exhibitions"},
    {title: "Bio", path: "/bio"},
];

function unFocusImage(){
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("focusedContent").style.display = "none";
}
function prevCard(){
    //document.getElementById("mainContent").parentElement
    if(selectedCard.previousElementSibling !== null)
        focusImage(selectedCard.previousElementSibling.id);
    else focusImage(selectedCard.parentElement.children[selectedCard.parentElement.children.length-1].id);
}
function nextCard(){
    if(selectedCard.nextElementSibling !== null)
        focusImage(selectedCard.nextElementSibling.id);
    else focusImage(selectedCard.parentElement.children[0].id);
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
                <button className="w3-button" style={{float: "right", fontSize: "40px", fontWeight: "lighter"}} 
                onClick={() => unFocusImage()}>X</button>
            </div>
            <div className="w3-cell-row" style={{height: "100%"}}>
                <div id="leftGalHolder" className="w3-cell" style={{height: "100%", verticalAlign: "middle"}}>
                    <button id="leftGalButton" className="w3-button galleryButton" onClick={() => prevCard()}>&lt;</button>
                </div>
                <div id="galleryImg" className="w3-cell">
                    <img id="focusedImage" style={{borderStyle: "double", borderWidth: "10px", borderColor: "whitesmoke"}} alt=''/>
                </div>
                <div id="rightGalHolder" className="w3-cell" style={{height: "100%", verticalAlign: "middle"}}>
                    <button id="rightGalButton" className="w3-button galleryButton" onClick={() => nextCard()}>&gt;</button>
                </div>
                <div id="galleryTextHolder" className="w3-cell">
                    <div id="galleryText">
                        <p id="focusedText" style={{paddingLeft: "5%", textAlign: "center"}}></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Header, Footer, FocusGallery};