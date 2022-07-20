
import './App.css';
import React from 'react';
import { Navbar } from './Components/Navbar';
import { Main } from './Components/Hero';
import { Card } from './Components/Card';
import imagen1 from './Images/image1.png'
import star from './Images/star.png'
import imagen2 from './Images/wedding.png';
import imagen3 from './Images/bike.png'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <div className='tarjetas'>
      <Card
        img={imagen1}
        star={star}
        calificacion="5.0 "
        pais="(6)• USA "
        descripcion="Life lessons with Katie Zaferes"
        precio="From 130"
        />
        <Card
        img={imagen2}
        star={star}
        calificacion="5.0 "
        pais="(10)• Colombia "
        descripcion="Making your life easier and funnier."
        precio="From 500"
        />
        <Card
        img={imagen3}
        star={star}
        calificacion="5.0 "
        pais="(6)• México "
        descripcion="Have a fun with the adrenaline and speed"
        precio="From 240"
        />
        </div>
    </div>
  );
}

export default App;
