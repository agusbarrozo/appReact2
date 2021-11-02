import React from 'react';
import Item from './Item';

/* ----HACER CARDS DE PRODUCTOS CON LOS NOMBRES DE PRODUCTOS---- PERO APLICANDO .MAP
*/

/* PROMISE Y EL DELAY DE 3 SEGUNDOS A TRAVES DE ALERT PARA EL DESAFIO

const getFetch = new Promise((resolve, reject)=>{
  //aca van las tareas asincronicas
  resolve('Bien') //si tiene el resolve es que se ejecuto bien
  //reject('404 not found') //con el reject es que no se pudo solucionar
  // si no tiene nada es PENDING

  // desafio de clase: ponerle delay de 3 segundos
  
  setTimeout(() => {
      alert('delay de 3 segundos');
  }, 3000);
})
*/

const ItemList = () => {
    return(
      <Item />
    )
}
  
  export default ItemList;
