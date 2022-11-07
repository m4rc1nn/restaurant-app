import Header from './components/Header.js';
import Product from './components/Product.js';
import {CartProvider} from './contexts/CartContext.js';

const products = [
  {
    id: 1,
    name: 'Masny Burger',
    price: 23.99,
    image: 'https://i.ibb.co/GW0S2zf/burger.png',
    ingredients: [
      {
        name: 'Sałata',
        amount: 1
      },
      {
        name: 'Pomidor',
        amount: 1,
      },
      {
        name: 'Ser',
        amount: 1
      },
      {
        name: 'Mięso wołowe',
        amount: 2
      },
      {
        name: 'Sos czosnkowy',
        amount: 1
      }
    ]
  }
]

function App() {

  const productList = products.map((product) => {
    return <Product key={product.id} product={product}></Product>
  })

  return (
    <CartProvider>
      <Header></Header>
      <div>
        {productList}
      </div>
    </CartProvider>  
  );
}

export default App;
