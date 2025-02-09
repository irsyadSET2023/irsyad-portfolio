import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(68,51,238,0.05)_25%,rgba(68,51,238,0.05)_50%,transparent_50%,transparent_75%,rgba(68,51,238,0.05)_75%)] bg-[length:24px_24px]" />
      <div className="fixed inset-0 -z-10 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
