import './App.css';
import Boton from './components/Boton.jsx';
import Contador from './components/Contador';
import agujas from './Clock';

import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newImg, setNewImg] = useState(agujas[0]);

  const manejarClic = () => {
    setNumClics(numClics + 1);
    const condition = selectedIndex <= 10;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setNewImg(agujas[nextIndex]);
    setSelectedIndex(nextIndex);
  };
  const reiniciarContador = () => {
    setSelectedIndex(0);
    setNewImg(agujas[0]);
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo' src={newImg} alt='logo-contador' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto='Click' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
