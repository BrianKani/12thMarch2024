import Navbar from './Components/Navbar/Navbar.js';
import Intro from './Components/Intro/Intro.js';
import Skills from './Components/Skills/Skills.js';
import Works from './Components/Works/works.js';
import Contact from './Components/Contact/contact.js';
import Footer from './Components/Footer/footer.js';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Intro />
    <Skills />
    <Works />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
