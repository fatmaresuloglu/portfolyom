// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Yeni eklediğimiz satır

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero /> {/* Navbar'ın hemen altına ekledik */}
    </div>
  )
}

export default App
