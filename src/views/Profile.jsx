import React from 'react';
import Imagen from '../components/Imagen';
import pizzaPerfil from '../assets/pizzaPerfil.png';

const Profile = () => {
  return (
    <>
      <div className='imagen-container'>
        <div>
          <Imagen className="perfil" src={pizzaPerfil} alt="Foto de perfil" />
          <div className='infoPerfil'>
            <label>Pepito Perez Perez </label>
            <label>PepitoPerez@Gmai.com</label>
            <button>
              Salir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
