import CounterContent from './components/counterContent/CounterContent'
import HomePage from './components/home/Home';
import NavBar from './components/navbarBootstrap/NavBar';
import Shop from './components/shop/Shop';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopSelectedItem from './components/shopSelectedItem/ShopSelectedItem';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route component={HomePage} path="/" exact/>
      <Route component={CounterContent} path="/counterContent" />
      <Route component={Shop} path="/shop" exact/>
      <Route component={ShopSelectedItem} path="/shop/:id" />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
