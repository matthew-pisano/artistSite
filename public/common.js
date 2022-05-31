//let cards = [];
let selectedCard = null;
function focusImage(card){
    selectedCard = card;
    document.getElementById("focusedImage").src = card.children[0].src;
    document.getElementById("focusedText").innerHTML = card.children[1].children[0].innerHTML+"<br>"+card.children[1].children[1].innerHTML;
    document.getElementById("focusedContent").style.display = "block";
    document.getElementById("mainContent").style.display = "none";
}
function unFocusImage(){
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("focusedContent").style.display = "none";
}
function prevCard(){
    if(selectedCard.previousElementSibling !== null)
        focusImage(selectedCard.previousElementSibling);
}
function nextCard(){
    if(selectedCard.nextElementSibling !== null)
        focusImage(selectedCard.nextElementSibling);
}
/*function init(){
    let cardHolder = document.getElementById("cardHolder");
    for(let i=0; i<cardHolder.children.length; i++)
        cards.push(cardHolder.children[i]);
}
window.onload = init;*/