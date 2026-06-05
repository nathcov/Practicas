import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Emma Bostian' 
          pais='Suecia' 
          imagen='emma' 
          cargo='Ingeniera de Software' 
          empresa='Spotify' 
          testimonio='Cuando decidí dar mis primeros pasos firmes en el desarrollo web, freeCodeCamp fue un pilar absoluto en mi aprendizaje. Lo que siempre valoré de su plataforma es cómo desmitifica el código desde el primer día: no te ahoga en teoría interminable, sino que te empuja a escribir HTML, CSS y JavaScript real a través de desafíos prácticos y proyectos tangibles.' 
        />

        <Testimonio 
          nombre='Shawn Wang' 
          pais='Singapur' 
          imagen='shawn' 
          cargo='Ingeniero de Software' 
          empresa='Amazon' 
          testimonio='Cuando decidí dar mis primeros pasos firmes en el desarrollo web, freeCodeCamp fue un pilar absoluto en mi aprendizaje. Lo que siempre valoré de su plataforma es cómo desmitifica el código desde el primer día: no te ahoga en teoría interminable, sino que te empuja a escribir HTML, CSS y JavaScript real a través de desafíos prácticos y proyectos tangibles.' 
        />

        <Testimonio 
          nombre='Sarah Chima' 
          pais='Nigeria' 
          imagen='sarah' 
          cargo='Ingeniera de Software' 
          empresa='ChatDesk' 
          testimonio='Cuando decidí dar mis primeros pasos firmes en el desarrollo web, freeCodeCamp fue un pilar absoluto en mi aprendizaje. Lo que siempre valoré de su plataforma es cómo desmitifica el código desde el primer día: no te ahoga en teoría interminable, sino que te empuja a escribir HTML, CSS y JavaScript real a través de desafíos prácticos y proyectos tangibles.' 
        />
      </div>
    </div>
  );
}

export default App;
