import React from 'react';
let selectedCard = null;

function focusImage(cardId){
    let card = document.getElementById(cardId);
    selectedCard = card;
    document.getElementById("focusedImage").src = card.children[0].src;
    document.getElementById("focusedText").innerHTML = card.children[1].children[0].innerHTML+"<br>"+card.children[1].children[1].innerHTML;
    document.getElementById("focusedContent").style.display = "block";
    document.getElementById("mainContent").style.display = "none";
}

function makeTiles(gallery){
    let seenTitles = [];
    return gallery.map((value, idx) => {
        let seen = seenTitles.includes(value.title);
        console.log(value.title, seen);
        seenTitles.push(value.title);
        return (
            <div id={idx+"-GhostCard"} key={value.title+seenTitles.length} style={{width: "300px", height: "auto", margin: "auto", padding: "2%", display: !seen ? "inline" : "none"}} className="w3-display-container" onClick={() => focusImage(idx+"-GhostCard")}>
                <img style={{width: "100%", height: "auto"}} className="hoverBlur" src={value.src} alt=""/>
                <div className="w3-padding w3-display-middle hoverLabel">
                    <h3 style={{textAlign: "center", color: "whitesmoke", fontFamily: "rozha one,serif", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>{value.title}</h3>
                    <p style={{textAlign: "center", color: "whitesmoke", fontFamily: "rozha one,serif"}}>{value.composition}</p>
                </div>
            </div>
        );
    });
}

export {focusImage, selectedCard, makeTiles};