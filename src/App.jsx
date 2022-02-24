
import './App.css'
import CartWidget from './components/CartWidget'
import ComponenteContenedor from './components/ItemListContainer/ComponenteContenedor'
import Nav from './components/Nav'
import TituloApp from './components/TituloApp'





function App() {
 
const style = { backgroundColor:'blue',   color:'white' } 
 

 
  return (
    <div className="App"
     style={ style }
     
     >
  
    <TituloApp/>
    <Nav/>
    <CartWidget/>
    <ComponenteContenedor listaDeProductos= 'Bienvenidos, esta es la lista de productos que encontrara en nuestro local: ' />
    
    
    
    
    
    </div>
  )
}

export default App
