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
</div>
)}


export default ItemListContainer