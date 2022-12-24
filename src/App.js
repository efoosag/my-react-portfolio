import './App.css';
import Header from './components/header/Header';
import Navigate from './components/navigate/Navigate';
import About from './components/about/About'
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
   <>
    <Header />
    <Navigate />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
   </>   
  );
}

export default App;
