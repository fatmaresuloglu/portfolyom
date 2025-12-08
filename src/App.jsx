// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Yeni eklediğimiz satır
import About from './components/About';
import Projects from './components/Projects'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero /> {/* Navbar'ın hemen altına ekledik */}
      <About />
      <Projects />
    </div>
  )
}

export default App
