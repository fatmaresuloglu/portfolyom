// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Yeni eklediğimiz satır
import About from './components/About';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero /> {/* Navbar'ın hemen altına ekledik */}
      <About />
    </div>
  )
}

export default App
