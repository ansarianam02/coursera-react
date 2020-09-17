import React from "react";
import "./style.css";
import Menu from './components/MenuComponent';

import { Navbar, NavbarBrand } from 'reactstrap';

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
      <Menu> </Menu>
    </div>
  );
}
