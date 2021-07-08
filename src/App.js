import "./App.scss";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/not-found";
import Shop from "./components/Page/Shop";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import CartPage from './components/Page/cart-page/Cart-page'
// import Header from "./components/header/header";
// import Hero from "./components/Hero-Section/hero";
// import MainSection from "./components/main-section/main-section";
// import FeaturedProductCollection from "./components/FeaturedCollection/ProductCollection";
// import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path='/cart' component={CartPage}/>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
