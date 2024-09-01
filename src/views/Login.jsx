
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault();

        if(email === '' || contraseña === ''){
            setError(true);
            alert("Debe diligenciar todos los campos para continuar")
            return
        } else if(contraseña.length < 6){
            setError(true);
            alert("Por seguridad debe ingresar minimo seis caracteres para la contraseña")
            return
        }else{
            alert("Los datos son correctos");
            alert("Validacion exitosa!");
            return;
        }
        setError(false);
        setEmail('');
        setContraseña('');

        
    }
  return (
    <>
                <Form className='formulario' onSubmit={validarDatos}>
                <h3>Formulario de login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="contraseña" onChange={(e)=>setContraseña(e.target.value)} value={contraseña} />
                </Form.Group>

                <Button variant="primary" type="submit">
                🍕Enviar
                </Button>
            </Form>

    
    
    </>

  )
}

export default Login;