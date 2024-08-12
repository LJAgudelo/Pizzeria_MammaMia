
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confcontraseña, setconfcontraseña] = useState("");
    const [error, setError] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault();

        if(email === '' || contraseña === '' || confcontraseña ===''){
            setError(true);
            alert("Debe diligenciar todos los campos para continuar")
            return
        } else if(contraseña.length < 6){
            setError(true);
            alert("Por seguridad debe ingresar minimo seis caracteres para la contraseña")
            return
        } else if(contraseña!==confcontraseña){
            alert("La contraseña debe coincidir")
            setError(true);
            return;
        }
        setError(false);
        setEmail('');
        setContraseña('');
        setconfcontraseña('');
        
    }
    
    return (

        <>
            <Form className='formulario' onSubmit={validarDatos}>
                <h3>Formulario de registro</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="contraseña" onChange={(e)=>setContraseña(e.target.value)} value={contraseña} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar contraseña" onChange={(e)=>setconfcontraseña(e.target.value)} value={confcontraseña}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                🍕Enviar
                </Button>
            </Form>

        </>

    )
}

export default Register;