import { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import './css/product.css';

function Product({product}){

  //const [newProduct, setNewProduct] = useState(product);
  const {addToCart} = useContext(CartContext);

  const ingredientList = product.ingredients.map((ingredient, index) => {
    console.log(product);
    return <div className='product-ingredient' key={index}>{ingredient.amount}x {ingredient.name}</div>
  })

  return (
    <div className='product-box'>
      <img className='product-img' src={product.image} alt={product.name}></img>
      <span className='product-title'>{product.name}</span>
      <div className='product-ingredient-list'>
        {ingredientList}
      </div>
      <span className='product-price'>{product.price}zł</span>
      <div onClick={() => addToCart('test')} className='product-btn'>Dodaj do koszyka</div>
    </div>
  )
}

export default Product;