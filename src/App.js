// App.js
import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import PriceListPage from './components/PriceListPage';
import SeaRemPage from './components/SeaRemPage';
import SeaRemConstructerPage from "./components/SeaRemContructorComponents/SeaRemConstructerPage";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components/Header/header.css';
import './components/ImageCarousel/imageCarousel.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pricelist" element={<PriceListPage />} />
                <Route path="/searem" element={<SeaRemPage />} />
                <Route path="/searem/generate" element={<SeaRemConstructerPage />} />
            </Routes>
        </Router>
    );
}

export default App;
