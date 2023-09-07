import { Link } from 'react-router-dom';
import Logo from "../images/Logo.svg"

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>  
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href="/#About">About</a>
          </li>
          <li>
            <a href="/#Menu">Menu</a>
          </li>
          <li>
            <a href="/#Reservations">Reservations</a>
          </li>
          <li>
            <a href="/#Order">Order Online</a>
          </li>
          <li>
            <a href="/#Login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;