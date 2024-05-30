import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <CartProvider>
        <Routes>
          {user && <Route path="/" exact element={<Dashboard />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
