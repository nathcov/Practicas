import './App.css';
import freeCodeCampLogo from './imagenes/logo-de-freecodecamp.svg';
import TareaFormulario from './componentes/Formulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='Logo de freeCodeCamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
