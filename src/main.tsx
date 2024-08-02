// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Moviespage from './Pages/Moviespage/Moviespage';
import Homepage from './Pages/Homdpage/Homepage'; 
import Description from './Pages/Description/Description';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Moviespage />} />
          <Route path='movie_name/' element={<Description/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
