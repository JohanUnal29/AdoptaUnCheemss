/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import Navbarr from '../sub-components/navbar/Navbarr';
import './Home.css'
import {Button , Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//Componentes

//Core

/*#############################################
                 Logica
###############################################*/
const Home = () => {//Funcion constructora

  console.log("Home");
  return (

    <div style={{
      background: 'url("https://drive.google.com/uc?export=download&id=1-6WF0i9iwPJRrfDEf8kGAiAaLL98ejQE")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%', /* 100% del ancho de la ventana */
      height: '100vh', /* 100% de la altura de la ventana */
      
    }}>
      {<div>
        <Navbarr />
        <Container className="contener d-flex flex-column justify-content-center align-items-center text-center h-100">
          <h1 className='titulo'>EL ARTE DE ADOPTAR</h1>
          <h2 className='subtitulo'> Buscamos facilitar a los peluditos <br/> encontrar un hogar <br/> lleno de mucho amor y estabilidad</h2>
          <Button variant="primary" style={{ borderRadius: '5px', backgroundColor: 'purple', borderColor: 'purple' }}><Link className="Menu" to="/nosotros">Adopta</Link></Button>
        </Container>
      </div>}
    </div>



  )

}

/*#############################################
                 Exportacion
###############################################*/
export default Home
