import logo from './logo.svg';
import './App.css';
import { Vegitable } from "./components/Vegitable.jsx";
import { Tomatao} from "./components/Tomato.jsx";
import { Carrot } from './components/Carrot.jsx';
import {Onion} from "./components/Onion.jsx";
import {Wishlist} from "./components/Wishlist.jsx";



function App() {
  return (
    <div>
      <h1>Vegitable</h1>

     <Vegitable/>
     <Tomatao/>
     <Carrot/>
     <Onion/>

     <h1>Wishlist</h1>
     <Wishlist/>
    </div>
  );
}

export default App;
