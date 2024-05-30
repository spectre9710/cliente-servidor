import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import Comments from "./comments/Comments";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <CartProvider>
        <Routes>
          {user && <Route path="/" exact element={<Main />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        
        {/* Renderiza los componentes solo cuando estás en la ruta raíz */}
        {user && (
          <>
            <Home />
            <Cart />
            <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId="1"
            />
          </>
        )}
      </CartProvider>
    </Router>
  );
}

export default App;
