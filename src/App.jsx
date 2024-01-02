import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Layout/Navbar';
import Footer from './component/Layout/Footer';

import './App.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Notfound from './component/pages/Notfound';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12 text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<Notfound />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
