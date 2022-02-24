import React from 'react'

function ComponenteContenedor( {listaDeProductos}) {
  return (
    <div>
        <h3>{listaDeProductos}</h3>
        <ul>
        <li>Televisor 30 </li>
        <li>Televisor 32 </li>
        <li>Televisor 39 </li>
        <li>Televisor 42 </li>
        <li>Televisor 49 </li>
        <li>Televisor 50 </li>
        <li>Televisor 55 </li>
        <li>Televisor 60 </li>
        <li>Televisor 65 </li>
        <li>Televisor 70 </li>
        </ul>
    </div>
  )
}

export default ComponenteContenedor