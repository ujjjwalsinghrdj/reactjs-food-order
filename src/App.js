import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';


function App() {
  return (
    <CartProvider>
 Here you are in main branch
 
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
