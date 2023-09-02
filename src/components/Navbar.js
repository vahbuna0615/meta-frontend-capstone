import Logo from "../images/Logo.svg"

const Navbar = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-sec`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul>
        <li>
          <a href="/#header" onClick={handleClick("header")}>Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;