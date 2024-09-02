
import Imagen from './Imagen';
import ImgHeader from '../assets/ImgHeader.jpg';


const Header = () => {
  return (
    <>
      <div className='imagen-container'>
        <div>
          <Imagen className="imagenHeader" src={ImgHeader} alt="Imagen del Header"/>
        </div>
        <div className="textoHeader">
          <h1>Pizzería Mamma Mia</h1>
          <h4>¡La mejor pizza de tu vida!</h4>
        </div>

      </div>

    </>
  )
}

export default Header