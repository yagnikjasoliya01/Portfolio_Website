import logo from "../assets/yj.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
          <a 
          href="https://www.linkedin.com/in/yagnik-jasoliya-268984267/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}>
            <FaLinkedin />
          </a>
          
          <a 
          href="https://github.com/yagnikjasoliya01" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}
          >
            <FaGithub />
          </a>

          <a 
          href="https://x.com/2Yagnik54463" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}
          >
            <FaSquareXTwitter />
          </a>

          {/* <a 
          href="https://www.instagram.com/yagnik_2005" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', textDecoration: 'none', color: 'inherit' }}
          >
            <FaInstagram />
          </a> */}

          
          
        </div>
    </nav>
  )
}

export default Navbar