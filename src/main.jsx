// /src/index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot for React 18
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';



// Render the app inside the root element using React 18's createRoot
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
