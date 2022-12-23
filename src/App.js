import './App.css';
import Header from './components/header/Header';
import Navigate from './components/navigate/Navigate';
import About from './components/about/About'
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

function App() {
  return (
   <>
    <Header />
    <Navigate />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
   </>   
  );
}

export default App;
