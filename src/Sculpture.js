import React from 'react';
import { makeTiles } from './common';
import { Header, Footer, FocusGallery } from "./Components";

function Sculpture() {
    let gallery = [
        {title: "Chairy Devito", composition: "A life sized moving office chair featuring Danny Devito's face emerging from the seat, made from cardboard and brown paper", src: "https://static.wixstatic.com/media/15a179_45a2346fed0446e39ffe154272b354a4~mv2.jpg/v1/fit/w_1300,h_1182,q_90/15a179_45a2346fed0446e39ffe154272b354a4~mv2.webp"},
        {title: "Chairy Devito", composition: "A life sized moving office chair featuring Danny Devito's face emerging from the seat, made from cardboard and brown paper", src: "https://static.wixstatic.com/media/15a179_db85aa3293284a27a54fd7983294b988~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_db85aa3293284a27a54fd7983294b988~mv2.webp"},
        {title: "Cult Box", composition: "Revolving box show casing four unique faces. Three line work masks are able to articulate to fit on all four faces. The pole above is used as a handle to spin the box. With a wire skull ( resembling the skull mask ) tops the handle.\nCardboard, Homemade 12\"x12\" paper, Marker, Wire, Found objects, and Paint", src: "https://static.wixstatic.com/media/15a179_5c1339b87f4b447b82edf80bc1616d68~mv2.jpg/v1/fit/w_1400,h_1182,q_90/15a179_5c1339b87f4b447b82edf80bc1616d68~mv2.webp"},
        {title: "Cult Box", composition: "Revolving box show casing four unique faces. Three line work masks are able to articulate to fit on all four faces. The pole above is used as a handle to spin the box. With a wire skull ( resembling the skull mask ) tops the handle.\nCardboard, Homemade 12\"x12\" paper, Marker, Wire, Found objects, and Paint", src: "https://static.wixstatic.com/media/15a179_71f71967c1404e62816651b4fcd498cb~mv2.jpg/v1/fit/w_1600,h_1182,q_90/15a179_71f71967c1404e62816651b4fcd498cb~mv2.webp"},
        {title: "Cult Box", composition: "Revolving box show casing four unique faces. Three line work masks are able to articulate to fit on all four faces. The pole above is used as a handle to spin the box. With a wire skull ( resembling the skull mask ) tops the handle.\nCardboard, Homemade 12\"x12\" paper, Marker, Wire, Found objects, and Paint", src: "https://static.wixstatic.com/media/15a179_589de4bd8ec344a08421d03dbaecf54f~mv2.jpg/v1/fit/w_1390,h_1182,q_90/15a179_589de4bd8ec344a08421d03dbaecf54f~mv2.webp"},
        {title: "Wire mask", composition: "Prints of homemade paper, paper mached onto a Styrofoam mannequin head. Aluminum wire in a skull like form.", src: "https://static.wixstatic.com/media/15a179_cfca4298690f4ae0b38ed67b4c358445~mv2.jpg/v1/fit/w_1600,h_1182,q_90/15a179_cfca4298690f4ae0b38ed67b4c358445~mv2.webp"},
        {title: "Croc", composition: "An identical replica of a Croc shoe. The Length is 30\" inches, scaled to three times the size of a normal shoe. Cardboard, Brown Paper, and Ink.", src: "https://static.wixstatic.com/media/15a179_610b8a5825b4433eba04a5277760ad46~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_610b8a5825b4433eba04a5277760ad46~mv2.webp"},
        {title: "Tension", composition: "Sculpture made from air dry clay, yarn, found objects, and acrylic paint.", src: "https://static.wixstatic.com/media/15a179_735ef78a219b4858bb09633c558f90bd~mv2.jpg/v1/fit/w_1600,h_1182,q_90/15a179_735ef78a219b4858bb09633c558f90bd~mv2.webp"},
        {title: "Wave", composition: "Sculpture made from clothes pins", src: "https://static.wixstatic.com/media/15a179_f6411acde840466e9fb40fd7c7143589~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_f6411acde840466e9fb40fd7c7143589~mv2.webp"},
        {title: "Wave", composition: "Sculpture made from clothes pins", src: "https://static.wixstatic.com/media/15a179_3941316b70974760a9d36a6372903e62~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_3941316b70974760a9d36a6372903e62~mv2.webp"},
        {title: "Reclining Cork Chair", composition: "A wine cork shaped into a chair", src: "https://static.wixstatic.com/media/15a179_07289640d86240eea6ef853b4eeb4d73~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_07289640d86240eea6ef853b4eeb4d73~mv2.webp"},
        {title: "Cork Swivel Chair", composition: "A wine cork shaped into a chair", src: "https://static.wixstatic.com/media/15a179_8ab661bc146e4d499952cc469dc203d9~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_8ab661bc146e4d499952cc469dc203d9~mv2.webp"},
        {title: "Mushroom Lamp", composition: "A fully functioning lamp, sculpted to look like an abstracted mushroom form. Created from found objects, paper, paper clay, foam board, and acrylic paint.", src: "https://static.wixstatic.com/media/15a179_46f0b1122a98475ea14044e755a5de30~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_46f0b1122a98475ea14044e755a5de30~mv2.webp"},
        {title: "The Red Scare", composition: "Foam and paper clay sculpted into a abstract form, and painted with acrylic paint.", src: "https://static.wixstatic.com/media/15a179_cf8bc3472770453dab538851c8bb6e64~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_cf8bc3472770453dab538851c8bb6e64~mv2.webp"},
        {title: "Decomposition", composition: "A plastic mask, paper mached and sculpted with paper clay. Moss and mushrooms created from foam board and paper clay, decorated the back of the head. Everything is painted with acrylic paint.", src: "https://static.wixstatic.com/media/15a179_c4a07fa7e2aa4caaa5bc0cccba9424f7~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_c4a07fa7e2aa4caaa5bc0cccba9424f7~mv2.webp"},
        {title: "Decomposition", composition: "A plastic mask, paper mached and sculpted with paper clay. Moss and mushrooms created from foam board and paper clay, decorated the back of the head. Everything is painted with acrylic paint.", src: "https://static.wixstatic.com/media/15a179_14b226c1e12f450d9659d26f735bf2ee~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_14b226c1e12f450d9659d26f735bf2ee~mv2.webp"},
        {title: "Decomposition", composition: "A plastic mask, paper mached and sculpted with paper clay. Moss and mushrooms created from foam board and paper clay, decorated the back of the head. Everything is painted with acrylic paint.", src: "https://static.wixstatic.com/media/15a179_95c611cfb49a4e12a0d707fc4450b4d6~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_95c611cfb49a4e12a0d707fc4450b4d6~mv2.webp"},
        {title: "Decomposition", composition: "A plastic mask, paper mached and sculpted with paper clay. Moss and mushrooms created from foam board and paper clay, decorated the back of the head. Everything is painted with acrylic paint.", src: "https://static.wixstatic.com/media/15a179_763afe571929476d940e66f9f67ffd1c~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_763afe571929476d940e66f9f67ffd1c~mv2.webp"},
        {title: "Cliffside Hotel", composition: "Architectural model made from cardboard, foam board, paper clay, plastic sheets, paper, and acrylic paint.", src: "https://static.wixstatic.com/media/15a179_fbecd19f2dfd4aae80eb98bd5c3652d2~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_fbecd19f2dfd4aae80eb98bd5c3652d2~mv2.webp"},
        {title: "Cliffside Hotel", composition: "Architectural model made from cardboard, foam board, paper clay, plastic sheets, paper, and acrylic paint.", src: "https://static.wixstatic.com/media/15a179_eb8518c939574592999fd18065822591~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_eb8518c939574592999fd18065822591~mv2.webp"},
        {title: "Cliffside Hotel", composition: "Architectural model made from cardboard, foam board, paper clay, plastic sheets, paper, and acrylic paint.", src: "https://static.wixstatic.com/media/15a179_16931f5b830847aaa435e0dd881f07f8~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_16931f5b830847aaa435e0dd881f07f8~mv2.webp"},
        {title: "Cliffside Hotel", composition: "Architectural model made from cardboard, foam board, paper clay, plastic sheets, paper, and acrylic paint.", src: "https://static.wixstatic.com/media/15a179_f0e4454a3f294b09ab4cefa5fdc35f66~mv2.jpg/v1/fit/w_1790,h_1182,q_90/15a179_f0e4454a3f294b09ab4cefa5fdc35f66~mv2.webp"},
    ];
    return (
        <div>
            <FocusGallery/>
            <div id="mainContent">
                <Header/>
                <div style={{width: "100%"}} className="w3-display-container">
                    <img style={{width: "100%", height: "auto", display: "block", marginBottom: "100px", marginTop: "25px"}} src="https://static.wixstatic.com/media/15a179_610b8a5825b4433eba04a5277760ad46~mv2.jpg/v1/fill/w_1200,h_496,al_c,q_85/15a179_610b8a5825b4433eba04a5277760ad46~mv2.webp"/>
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