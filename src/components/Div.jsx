import { useState } from 'react'

export default DivContador



function DivContador(){

const [count, setCount] = useState(1)

const sumar = () => {

    if(count < stock){setCount(count+1)}

};
const restar = () => { 
    if (count > initial){setCount(count - 1)}

};

let contador = 0

let stock = 10;
let initial = 1;


return(
    <div>
      

<button onClick={sumar}>mas</button>
<label>{ count}  </label>
<button onClick={restar}>menos</button>

<div>
         <button>Agregar carrito</button>

</div>

   </div>

   
)


}