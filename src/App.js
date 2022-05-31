import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Ghost from './Ghost';
import Sculpture from './Sculpture';
import Painting from './Painting';
import Drawing from './Drawing';
import Bio from './Bio';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/ghost" element={<Ghost/>} />
                <Route path="/sculpture" element={<Sculpture/>} />
                <Route path="/painting" element={<Painting/>} />
                <Route path="/drawing" element={<Drawing/>} />
                <Route path="/bio" element={<Bio/>} />
            </Routes>
        </Router>
    );
}

export default App;
