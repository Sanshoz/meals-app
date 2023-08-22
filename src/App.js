import './App.css'; 

import { useGlobalContext } from './context';
import Favorites from './components/Favorites.jsx'
import Meals from './components/Meals.jsx'
import Modal from './components/Modal.jsx'
import Search from './components/Search.jsx'


function App() {
  const {showModal, favorites} = useGlobalContext()
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
      
    </main>
  );
}

export default App;
