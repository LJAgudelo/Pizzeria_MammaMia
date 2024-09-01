import imgErrorPagina from '../assets/error.jpg';
import Imagen from '../components/Imagen';


const NotFound = () => {
  return (
    <div className='imagen-container'>
      <div>
        <Imagen src={imgErrorPagina} alt="Imagen del Error"/>
      </div>
      <div className="textoHeader">
        <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
      </div>
    </div>




  );
};
export default NotFound;


