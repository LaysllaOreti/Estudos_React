import React from "react";
import './index.css';
import App from './App.js';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App texto={{chamada:'Hello World!', chamada2:'My name is Layslla'}} />
  </React.StrictMode>
);