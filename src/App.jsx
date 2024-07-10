import './App.css'
import About from './Components/About'
import Fees from './Components/Fees'
import Home from './Components/Home'
import Key from './Components/Key'
import Navbar from './Components/Navbar'
import Recognitions from './Components/Recognitions'
import OtherCourses from './Components/OtherCourses'
import Jobprospects from './Components/jobprospects'
import { useEffect } from 'react'
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const upButton = document.getElementById('scroll-up-button');
      const downButton = document.getElementById('scroll-down-button');
      if (window.scrollY > 300) {
        upButton.style.display = 'block';
      } else {
        upButton.style.display = 'none';
      }
      if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 300) {
        downButton.style.display = 'block';
      } else {
        downButton.style.display = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Key />
      <Recognitions />
      <Fees />
      <Jobprospects />
      <OtherCourses/>
      <About />
      <a href="https://wa.link/02818i" target='_blank'>
        <button
          className="text-2xl fixed bottom-20 right-5 bg-green-600 mb-12 text-white p-2 rounded-full shadow-lg transition duration-300"
 data-aos="fade-left"
        >
          <FaWhatsapp />
        </button>
      </a>
      <button
        id="scroll-up-button"
        onClick={scrollToTop}
        className="fixed bottom-20 right-5 keyBg text-white p-2 rounded-full shadow-lg hover:graditentBg transition duration-300"
        style={{ display: 'none' }}
      >
        <FaCaretUp />
      </button>

      <button
        id="scroll-down-button"
        onClick={scrollToBottom}
        className="fixed bottom-5 right-5 keyBg text-white p-2 rounded-full shadow-lg transition duration-300"
      >
        <FaCaretDown />
      </button>
    </>
  )
}

export default App
