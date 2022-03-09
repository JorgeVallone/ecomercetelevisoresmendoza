import { useState } from 'react'

export default DivContador



function DivContador(){

const [count, setCount] = useState(1)

const handleCount = () => {

    setCount(count+1)

};
const descontarCount = () => {
    setCount(count-1)
};

let contador = 0

function mostrarCantidad (){
    console.log(onAdd)
}

const init = 1
const stockMax = 10 
return(
    <div>
       <ItemCount initial={init} stock={stockMax} onAdd={mostrarCantidad}/>

<button onClick={handleCount}>mas</button>
<label>{ count}  </label>
<button onClick={descontarCount}>menos</button>

<div>
         <button>Agregar carrito</button>

</div>

   </div>

   
)


}