import Header from './components/Header.js';
import Product from './components/Product.js';
import {CartProvider} from './contexts/CartContext.js';

const products = [
  {
    id: 1,
    name: 'Masny Burger',
    price: 33.99,
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
  },
  {
    id: 2,
    name: 'Hot Dog',
    price: 9.99,
    image: 'https://i.ibb.co/RTYKcQq/Hot-Dog.png',
    ingredients: [
      {
        name: 'Bułka',
        amount: 1
      },
      {
        name: 'Parówka',
        amount: 1,
      },
      {
        name: 'Sos',
        amount: 1,
      },
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
      <div style={productBox}>
        {productList}
      </div>
    </CartProvider>  
  );
}

const productBox = {
  margin: '20px auto',
  width: '60%',
  display: 'flex'
}

export default App;
