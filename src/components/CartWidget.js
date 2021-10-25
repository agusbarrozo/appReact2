//importe una libreria de react icons para poder poner el icono del cart
import React, { useState } from 'react';
import { BsCart4 } from "react-icons/bs"; //este es el icono que importe

class CartWidget extends React.Component {
  render() {
    return(
      <BsCart4 />
    ) 
  }
}

export default CartWidget