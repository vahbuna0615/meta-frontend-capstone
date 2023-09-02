import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
      <meta name='description' content='We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist'/>
      <meta name='og:title' content='Little Lemon Restaurant'/>
      <meta name='og:description' content='A renowned restaurant from Chicago'/>
      <meta name='og:image' content='https://example.com/little-lemon-restaurant.jpg'/>
      <Navbar/>
      <Header/>
    </>
  );
}

export default App;
