import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Comments from './pages/Comments/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
