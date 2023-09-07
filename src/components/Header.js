import FoodImg from "../images/restauranfood.jpg";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  return (
    <header>
      <div id="header-sec">
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="button-styles" onClick={() => navigate('/booking')}>
            Reserve a table
          </button>
        </article>
        <div>
          <img src={FoodImg} alt="" />
        </div>  
      </div>    
    </header>
  )
}

export default Header;