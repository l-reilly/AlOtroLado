import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home"
import { AboutAuthor } from "./pages/aboutAuthor"
import { TheBook } from './pages/theBook';
import { Nav } from './components/Nav';


ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/author" element={<AboutAuthor />} />
      <Route path="/book" element={<TheBook />} />
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
