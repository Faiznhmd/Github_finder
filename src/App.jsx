import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Layout/Navbar';
import Footer from './component/Layout/Footer';

import './App.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Alert from './component/pages/Alert';
import Product from './component/pages/product';
import Notfound from './component/pages/Notfound';
import { GithubProvider } from './context/Github/GitHubContext';
import { Alertprovider } from './context/Alert/Alertcontext';

const App = () => {
  return (
    <GithubProvider>
      <Alertprovider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12 text-white">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:login" element={<Product />} />
                <Route path="/notfound" element={<Notfound />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </Alertprovider>
    </GithubProvider>
  );
};

export default App;
