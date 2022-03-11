
import './App.css'
import CartWidget from './components/CartWidget'
import Nav from './components/Nav'
import TituloApp from './components/TituloApp'
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import DivContador from './components/Div';




function App() {
 
const style = { backgroundColor:'blue',   color:'white' } 
 
const [cont, setCont] = useState(0);


 
  return (
    <div className="App"
     style={ style }
     
     >

       

     

    <TituloApp/>
    <Nav/>
    <CartWidget/>
    <ItemListContainer/>
    <DivContador/>
    
    
    
    </div>
  )
}

export default App
