import { useEffect, useState } from "react"
const { default: ItemDetail } = require("./ItemDetail");

function ItemDetailContainer(){
    const [descripcionProducto, setdescripcionProducto] = useState([])
    const [loading, setLoading] = useState(true)
    


useEffect(() => { 
ItemDetail 
.then((respuesta) => {
return respuesta
})
.then((resp) => setdescripcionProducto  (resp.find(r => r.descripcion === 1)))  
.catch(err => console.log(err))
.finally(()=> setLoading(false))

}, [] )}

export default ItemDetailContainer