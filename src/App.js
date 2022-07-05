import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Ghost from './Ghost';
import Sculpture from './Sculpture';
import Painting from './Painting';
import Drawing from './Drawing';
import Bio from './Bio';
import Sins from './sins';
import Figure from './Figure';
import Stills from './Stills';
import Exhibitions from './Exhibitions';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/ghost" element={<Ghost/>} />
                <Route path="/sculpture" element={<Sculpture/>} />
                <Route path="/painting" element={<Painting/>} />
                <Route path="/drawing" element={<Drawing/>} />
                <Route path="/figure" element={<Figure/>} />
                <Route path="/stills" element={<Stills/>} />
                <Route path="/sins" element={<Sins/>} />
                <Route path="/exhibitions" element={<Exhibitions/>} />
                <Route path="/bio" element={<Bio/>} />
            </Routes>
        </Router>
    );
}

export default App;
