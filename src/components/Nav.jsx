const Nav = () => {
    return (

        <nav className="menu">
        
        
        
        <ul>
        <label for="" className="imagen">
        <a href=""> <img src="https://previews.123rf.com/images/artqu/artqu1607/artqu160700053/61574630-occhio-creativo-concetto-di-vettore.jpg" alt=""/>  </a>
        </label>

          <li><a href="#" className= "enlace">Inicio</a>
          <ul>
                <li><a href="#" className= "enlace">Televisores Led</a></li>
                <li><a href="#" className= "enlace">Televisores 4K</a></li>
                <li><a href="#" className= "enlace">Televisores Tactiles</a></li>
          </ul>
          
          
          </li>
          
          <li><a href="#" className= "enlace">Nosotros</a>
          <ul>
                <li><a href="#" className= "enlace">Vision</a></li>
                <li><a href="#" className= "enlace">Mision</a></li>
                <li><a href="#" className= "enlace">Objetivos</a></li>
          </ul>
          </li>
          <li><a href="#" className= "enlace">Servicios</a></li>
          <li><a href="#" className= "enlace">Contacto</a></li>
        </ul>
      </nav>
    )
    
    }
export default Nav