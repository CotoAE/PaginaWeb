import React, { useState } from 'react';

function FechaMensaje() {
  const [mensaje, setMensaje] = useState('');

  const obtenerMensaje = () => {
    const fechaHoy = new Date(); // Fecha actual
    const dia = fechaHoy.getDate();
    const mes = fechaHoy.getMonth() + 1; // Los meses en JavaScript son de 0 a 11
    const año = fechaHoy.getFullYear();


    // Ejemplo de mensajes según fechas
    if (fechaHoy.setHours(0, 0, 0, 0) < new Date(2024, 11, 3).setHours(0, 0, 0, 0)) {
        setMensaje('¡¡Estudia!!, para que te vaya super en la PAES, tu puedes y mucho animo, sabes que tienes todo mi apoyo, y avisame cualquier cosa. (Tendrás que volver el 03/12 para saber que más dice');
    } else if(mes === 12 && dia === 3 && año === 2024){
        setMensaje('La prueba de Lenguaje 😲, te irá super!, mucho mucho animo, eres la mejor');
    } else if (mes === 12 && dia === 4 && año === 2024) {
        setMensaje('Verga... 2 pruebas hoy😰, la de matematica y la de historia, pero no te preocupes porque te irá super!!, te quiero mi amiga, mucho animo');
    } else if (mes === 12 && dia === 5 && año === 2024) {
        setMensaje('¡Felicidades!🎉 ya terminaste toda la postulación, solo queda esperar, tranqui porque ya terminaste todo, y no hay nada que hacer, pero seguro que vas quedar. Vayamos por un sushi...👀🍣🍙');
    } else if (mes === 1 && dia === 6 && año === 2025){
        setMensaje('Los resultados!!!!!!! ¿Cómo te fué?😱');
    } else if(mes == 12 && dia == 25){
        setMensaje('¡¡Feliz navidad!! *leer con tono de musica de navidad*');
    } else if(mes == 1 && dia == 1){
        setMensaje('¡¡Feliz año nuevo!! Te quiero mucho');
    } else if(mes==2 && dia==25){
        setMensaje('¡¡Feliz Cumpleaños mi amiga linda preciosa!!')
    } else if(mes == 4 && dia == 2){
        setMensaje('Ya un año mas siendo amigos,un año mas desde que empezamos a hablar, te adoro mucho y espero que sigamos juntos muchos años más, y que ojalá ya seas parte del ejercito')
    } else {
        setMensaje(`La fecha seleccionada es ${dia}/${mes}/${año}. No hay eventos especiales. Vayamos por un sushi...👀🍣🍙`);
    }
  };

  return (
    <div className="calendario bg-pink-300 text-white text-center p-4">
      <h1 className="text-2xl mb-4">¿Qué fecha es?</h1>
      <div className='flex justify-around items-center'>
      <button onClick={obtenerMensaje}  className="boton">  Enviar </button>
      </div>
      {mensaje && (
          <hr className='mt-4'/>
      )}
      {mensaje && (
        <p className="mt-4 text-lg font-semibold">{mensaje}</p>
      )}
    </div>
  );
}

export default FechaMensaje;
