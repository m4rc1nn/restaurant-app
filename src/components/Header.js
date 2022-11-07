import { useContext } from 'react';
import {BsBasket3} from 'react-icons/bs';
import CartContext from '../contexts/CartContext';
import './css/header.css';

function Header(){

  const {items} = useContext(CartContext);

  return (
    <header className='header'>
      <span className='header-title'>Restaurant App</span>
      <div className='basket'>
          <BsBasket3 className='basket-icon' color='#fff'></BsBasket3>
          <span className='basket-text'>
            Koszyk 
            <span> [{items.length}] </span>
          </span>
      </div>
    </header>
  );
}

export default Header;