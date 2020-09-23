import React ,{Component} from "react";
import "./style.css";
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';

import { Navbar, NavbarBrand } from 'reactstrap';

export default class App extends Component {
  constructor(props) {
    super(props);    
  }

  render(){
    return (

      <div className="App">
        <Main />
      </div>
    /*<div className="container">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion.</NavbarBrand>
          </div>
        </Navbar>
      </div>
     <Menu dishes={this.state.dishes} />
    </div>*/)
  }
}


