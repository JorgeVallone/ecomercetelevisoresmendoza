
import productos from "../helpers/item"




const getFetch = new Promise((resolve, reject)=>{
    
    let url= 'https://www.google.com/?hl=es'

    if (url ==='https://www.google.com/?hl=es'){
    setTimeout(() => {
        resolve(productos)
    }, 3000);    
    
    } else{
        reject('400 not found')
    }
})
export default getFetch