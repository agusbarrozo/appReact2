import { useParams } from "react-router-dom";
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { ItemCount } from "../../ItemCount";
import ItemList from "../../Item";

const ItemListContainer = () => {
  const handleClick = (total) => {
    alert(`La cantidad agregada es ${total}`);
    console.log(`Se agregaron al carrito ${total} items`);
  };

  /*
  const { id } = useParams();

  console.log(id);*/

  return (
    <div>
      <Card>
        <CardImg
          top
          width="50%"
          src="/assets/318x180.svg"
          alt="Item #1 image"
        />
        <CardBody>
          <CardTitle tag="h5">Test #1</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            *item description*
          </CardSubtitle>
          <CardText>*prueba del desafio*</CardText>
          <ItemCount stock={25} initial={1} onAdd={handleClick} />
        </CardBody>
      </Card>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
