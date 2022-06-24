import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";



function App() {
  return (
    <div className="App">
    <Route path="/">
     <Nav/>
    </Route>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/product/:id">
     <ProductDetail/>
    </Route>
    <Route path="/products/create">
     <CreateProduct/>
    </Route>
    </Switch>
    </div>
  )
}
export default App;
