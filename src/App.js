import React ,{Component} from "react";
import "./style.css";
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

import { Navbar, NavbarBrand } from 'reactstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
    <div className="container">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion.</NavbarBrand>
          </div>
        </Navbar>
      </div>
     <Menu dishes={this.state.dishes} />
    </div>)
  }
}

