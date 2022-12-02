import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';


function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  function showCartHandler(){
setCartIsShown(true);
  }

  function hideCartandler(){
setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <div>Here is a new branch...</div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
