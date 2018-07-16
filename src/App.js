import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecipeForm from "./pages/RecipeForm";
import Description from "./pages/Description";
import Cart from "./pages/Cart";
import NavbarComponent from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavbarComponent />
            <Switch>
              <Route exact key="form" path="/" component={RecipeForm} />
              <Route exact key="form" path="/recipe" component={RecipeForm} />
              <Route exact key="desc" path="/desc" component={Description} />
              <Route exact key="cart" path="/cart" component={Cart} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
