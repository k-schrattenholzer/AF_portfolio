import './App.module.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/header.jsx'
import Home from './views/Home/Home.jsx'
import About from './views/About/About.jsx'
import Contact from './views/Contact/Contact.jsx'

function App() {
  return (
      <BrowserRouter>
      <main>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App;
