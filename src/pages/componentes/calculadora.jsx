import React, { useState } from 'react';
import { set } from 'react-hook-form';

const CalculadoraPAES = () => {
  // Estados para los puntajes
  const [puntajeNEM, setPuntajeNEM] = useState('');
  const [puntajeLenguaje, setPuntajeLenguaje] = useState('');
  const [puntajeMatematica, setPuntajeMatematica] = useState('');
  const [puntajeHistoria, setPuntajeHistoria] = useState('');
  const [puntajeTotal, setPuntajeTotal] = useState(null);
  const [mensaje, setMensaje] = useState('');

  // Función para calcular el puntaje total
  const calcularPuntaje = () => {
    const total = (parseFloat(puntajeNEM)*0.167 + parseFloat(puntajeLenguaje)*0.25 + parseFloat(puntajeMatematica)*0.416 + parseFloat(puntajeHistoria)*0.167).toFixed(2);;
    setPuntajeTotal(total);
    if (total >= 600) {
      setMensaje('Ya estas adentro, eres la mejor, nunca lo olvides, te felicito mucho por estudiar tanto, te irá maravilloso y serás la mejor militar');
    } else {
      setMensaje('Bueno... yo digo que pasaste, te irá maravilloso y obviamente vas a entrar así que tu relax, te quiero');
    }
  };

  return (
    <div className="calculadora bg-pink-300">
      <h2>Calculadora de Puntajes PAES</h2>

      {/* Ingresar Puntajes */}
      <div className="input-group">
        <label>Puntaje NEM</label>
        <input
          type="number"
          value={puntajeNEM}
          onChange={(e) => setPuntajeNEM(e.target.value)}
          placeholder="Ingrese puntaje NEM"
          className='text-black'
        />
      </div>

      <div className="input-group">
        <label>Puntaje Lenguaje y Comunicación</label>
        <input
          type="number"
          value={puntajeLenguaje}
          onChange={(e) => setPuntajeLenguaje(e.target.value)}
          placeholder="Ingrese puntaje Lenguaje"
          className='text-black'
        />
      </div>

      <div className="input-group">
        <label>Puntaje Matemática M1</label>
        <input
          type="number"
          value={puntajeMatematica}
          onChange={(e) => setPuntajeMatematica(e.target.value)}
          placeholder="Ingrese puntaje Matemática"
          className='text-black'
        />
      </div>
      <div className="input-group">
        <label>Puntaje Historia y Ciencias Sociales</label>
        <input
          type="number"
          value={puntajeHistoria}
          onChange={(e) => setPuntajeHistoria(e.target.value)}
          placeholder="Ingrese puntaje Historia"
          className='text-black'
        />
      </div>

      {/* Botón de cálculo */}
      <button onClick={calcularPuntaje} className="boton">
        Calcular Puntaje Promedio
      </button>

      {/* Mostrar puntaje total */}
      {puntajeTotal !== null && (
        <div className="resultado">
          <h3 className=''>Puntaje Obtenido: {puntajeTotal}</h3>
          <hr/>
          <p className=''>{mensaje}</p>
        </div>
      )}
      <p className='mt-4'>Cabe mencionar que no tengo idea si está bien el resultado xD</p>
    </div>
  );
};

export default CalculadoraPAES;
