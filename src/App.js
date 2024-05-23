import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import Comments from "./comments/Comments";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </>
  );
}

export default App;
