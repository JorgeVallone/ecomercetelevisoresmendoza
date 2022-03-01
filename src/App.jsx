
import './App.css'
import CartWidget from './components/CartWidget'
import ComponenteContenedor from './components/ItemListContainer/ComponenteContenedor'
import Nav from './components/Nav'
import TituloApp from './components/TituloApp'
import { useState } from 'react';




function App() {
 
const style = { backgroundColor:'blue',   color:'white' } 
 
const [cont, setCont] = useState(0);


 
  return (
    <div className="App"
     style={ style }
     
     >
       <div>
       
        <button onClick={() => setCont(cont + 1)}> + </button>
      
        <label className='spanContador'>{cont}</label>


        <button onClick={() => setCont(cont - 1)}> - </button>
       
       </div>

       <div>
         <button>Agregar carrito</button>

       </div>

      

    <TituloApp/>
    <Nav/>
    <CartWidget/>
    <ComponenteContenedor listaDeProductos= 'Bienvenidos, esta es la lista de productos que encontrara en nuestro local: ' />
    
    
    
    
    
    </div>
  )
}

export default App
