import React, { useState } from "react";
import {Button, InputGroup, FormControl} from 'react-bootstrap'

export function ItemCount({stock, initial, onAdd}){
    const [contador, setCount] = useState(initial);

    const clickLess=() =>{
        contador > 1 ? setCount(contador-1) : alert('El item minimo es 1')
    }

    const clickMore=() =>{
        contador < stock ? setCount(contador+1) : alert(`El stock es de ${stock} productos`)
    }

    return(
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={clickLess}>-</Button>
                <FormControl className="text-center" aria-label="Example text with two button addons" value={contador}/>
                <Button variant="outline-primary" onClick={clickMore}>+</Button>
            </InputGroup>
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={() => onAdd(contador)}>Add to cart</Button>
            </div>
        </div>
    )
}
