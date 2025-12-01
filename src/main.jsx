// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './LanguageContext'; // YENİ

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider> {/* Uygulamayı buraya sarıyoruz */}
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
