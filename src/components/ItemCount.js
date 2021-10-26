import React, { Component, useState } from "react";
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import ItemListContainer from "./ItemListContainer";

export function ItemCount({stock, initial, onAdd}){
    const [contador, setContador] = useState(initial);

    const clickMenos=() =>{
        contador > 1 ? setContador(contador-1) : alert('El item minimo es 1')
    }

    const clickMas=() =>{
        contador < parseInt(stock) ? setContador(contador+1) : alert(`El stock es de ${stock} productos`)
    }

    return(
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={clickMenos}>-</Button>
                <FormControl className="text-center" aria-label="Example text with two button addons" value={contador}/>
                <Button variant="outline-primary" onClick={clickMas}>+</Button>
            </InputGroup>
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={() => onAdd(contador)}>Add to cart</Button>
            </div>
        </div>
    )
}
