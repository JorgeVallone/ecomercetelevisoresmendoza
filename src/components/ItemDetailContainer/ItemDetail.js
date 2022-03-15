 export const descripcionProducto = [
{ id:1 , descripcion: 'Este televisor cuenta con pantalla LED de 30'},
{ id:1 , descripcion: 'Este televisor cuenta con pantalla LED de 40'},
{ id:1 , descripcion: 'Este televisor cuenta con pantalla LED de 50'},
{ id:1 , descripcion: 'Este televisor cuenta con pantalla LED de 60'},
{ id:1 , descripcion: 'Este televisor cuenta con pantalla LED de 70'},
  ]

const ItemDetail = new Promise ((resolve, reject) =>{

let url = 'beto.com'

if (url == 'beto.com'){

setTimeout(() => {

    resolve(descripcionProducto)
}, 4000);
}else{

    reject('400 not found')
}

})

export default ItemDetail