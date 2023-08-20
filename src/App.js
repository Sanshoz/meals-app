import logo from './logo.svg';
import './App.css'; 
import Favorites from './components/Favorites.jsx'
import Meals from './components/Meals.jsx'
import Modal from './components/Modal.jsx'
import Search from './components/Search.jsx'


function App() {
  return (
    <main>
      <Favorites />
      <Meals />
      <Modal />
      <Search />
    </main>
  );
}

export default App;
