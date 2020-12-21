import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import Home from './pages/Home/Home';

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);