import { useEffect, useState } from "react"
import getFetch from "../helpers/itemList"




function ItemListContainer(){
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    getFetch
    .then((respuesta)=> {
    
        return (respuesta)
    
    }) 
    .then ((resp) => setProductos(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
}, [])

/* Esto es el on add del btn de carrito */
const onAdd = (cant) => {
console.log(cant)

}


console.log(productos)
return (
 
 <div>


     { loading ? <h1>Cargando....</h1>
     : 
     
     productos.map((prod) => <div 
                                   key={prod.id} 
                              >
                                  <div> 
                                      <div>
                                          {`${prod.producto}`} - {`${prod.descripcion}`}
                                      </div>
                              <div>
                              <img src={prod.imagen}/>
                              
                              </div>
                                <div>
                                {prod.precio}
                                </div>
                            <div>
                            {
                            <button >
                             DETALLE DEL PRODUCTO
                            </button>
}
                            </div>
                            </div>
                        </div>
)}


<itemCount initial = {1} stock ={10} onAdd={onAdd}/>

</div>
)}


export default ItemListContainer