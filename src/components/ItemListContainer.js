//GREETING VIEJO DEL DESAFIO #3
/*import React, { Component } from "react";

export class ItemListContainer extends Component {
      render(){
        return(
          <div>
          <h3>*listado de items a reemplazar*</h3> 
          </div>
        )
      }
}

export default ItemListContainer 
*/

import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { ItemCount } from './ItemCount';



const ItemListContainer = (props) => {
  const handleClick=(total) =>{
    alert(`La cantidad agregada es ${total}`)
    console.log(`Se agregaron al carrito ${total} items`)
  }

  return (
    <div>
      <Card>
        <CardImg top width="50%" src="/assets/318x180.svg" alt="Item #1 image" />
        <CardBody>
          <CardTitle tag="h5">Item #1</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">*item description*</CardSubtitle>
          <CardText>*general characteristics from item*</CardText>
          <ItemCount stock={25} initial={1} onAdd={handleClick} />
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemListContainer;