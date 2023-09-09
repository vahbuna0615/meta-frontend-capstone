import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.svg"

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
            <Link to='/underConstruction'>About</Link>
          </li>
          <li>
            <Link to='/underConstruction'>Menu</Link>
          </li>
          <li>
            <Link to='/booking'>Reservations</Link>
          </li>
          <li>
            <Link to='/underConstruction'>Order Online</Link>
          </li>
          <li>
            <Link to='/underConstruction'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;