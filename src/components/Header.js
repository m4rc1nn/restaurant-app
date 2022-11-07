import {BsBasket3} from 'react-icons/bs';
import './css/header.css';

function Header(){
  return (
    <header className='header'>
      <span className='header-title'>Restaurant App</span>
      <div className='basket'>
          <BsBasket3 className='basket-icon' color='#fff'></BsBasket3>
          <span className='basket-text'>
            Koszyk 
            <span>(0)</span>
          </span>
      </div>
    </header>
  );
}

export default Header;