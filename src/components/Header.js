import FoodImg from "../images/restauranfood.jpg"

const Header = () => {
  return (
    <header>
      <div id="header-sec">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nulla fuga sequi esse amet, magnam veritatis provident quis minima nesciunt molestiae!
        </p>
        <button>
          Reserve a table
        </button>
      </div>
      <img src={FoodImg} alt="" />      
    </header>
  )
}

export default Header;