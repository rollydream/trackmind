import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 📊 Analytics
import { initGA4, trackPageView } from './analytics/ga4';
import { initSnowplow } from './analytics/snowplow';

// 초기화
initGA4();
initSnowplow();

// 첫 페이지뷰 기록
trackPageView(window.location.pathname + window.location.search);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
