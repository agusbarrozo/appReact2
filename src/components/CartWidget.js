/*import { IoIosCart } from 'react-icons/fa';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}
export default CartWidget 
*/
/*
import React, { Component } from 'react';
import logo from '..../';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img src={logo} width="100" height="50" />
        </div>
      </div>
    );
  }
} 

export default CartWidget
*/
import React, { useState } from 'react';
import { BsCart4 } from "react-icons/bs";


class CartWidget extends React.Component {
  render() {
    return(
      <BsCart4 />
    ) 
  }
}


export default CartWidget