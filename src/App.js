import React from "react";
import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import './components/style.css'
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
