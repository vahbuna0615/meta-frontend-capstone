import itemOne from '../images/bruchetta.svg';
import itemTwo from '../images/greek salad.jpg';
import itemThree from '../images/lemon dessert.jpg'

const menuItems = [
  {
    icon: itemOne,
    title: 'Greek salad',
    price: '$ 12.99',
    desc: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.',
  },
  {
    icon: itemTwo,
    title: 'Bruschetta',
    price: '$ 5.99',
    desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    icon: itemThree,
    title: 'Lemon Dessert',
    price: '$ 5.00',
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  }
]

const Main = () => {
  return (
    <main>
      <div className="main-menu">
        <h1>This week's specials!</h1>
        <button className="button-styles">Online Menu</button>
      </div>
      <div className="menu-item-grid">
        {menuItems.map((item) => {
          return(
            <section className="menu-item">
              <img src={item.icon} alt="" />
              <div className='item-details'>
                <p className='item-title'>{item.title}</p>
                <p className='item-price'>{item.price}</p>
              </div>
              <p className='item-desc'>{item.desc}</p>
              <p className='delv-msg'>Order a delivery</p>
            </section>
          )
        })}
        </div>
    </main>
  )
}

export default Main;