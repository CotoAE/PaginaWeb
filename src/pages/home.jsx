import React, { useState } from 'react';
import margaritaIMG from '/margarita.png';
import CalculadoraPAES from '../pages/componentes/calculadora';
import FechaMensaje from '../pages/componentes/calendario';
import Desarrollo from '../pages/componentes/desarrollo';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCalculadora, setShowCalculadora] = useState(false);
  const [showCalendario, setShowCalendario] = useState(false);
  const [showOpcion3, setShowOpcion3] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleCalculadora = () => {
    setShowCalculadora(!showCalculadora); 
  };
  const toggleCalendario = () => {
    setShowCalendario(!showCalendario);
  };
  const toggleDesarrollo = () => {
    setShowOpcion3(!showOpcion3);
  };

  return (
    <div className="items-center">
      {/* Navbar */}
      <nav className="bg-pink-300 flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="barraSuperior text-center">
          <h1 className="text-4xl">Holis :p</h1>
        </div>

        {/* Botón para desplegar el menú */}
        <button
          className="menu-toggle sm:hidden px-4 py-2 rounded-md text-white"
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Opciones del menú */}
        <div
          className={`acciones bg-pink-300 ${menuOpen ? 'show' : ''}`} // Si menuOpen es true, muestra el menú
          id="menu"
        >
          <a href="#" onClick={toggleCalculadora}>PAES</a>
          <a href="#" onClick={toggleCalendario}>Fecha</a>
          <a href="#" onClick={toggleDesarrollo}>Opción 3</a>
        </div>
      </nav>

      {/* Contenido Principal */}
      <div className="contenedorLargo text-center p-6">
        <img className="mx-auto h-24 w-auto" src={margaritaIMG} alt="Margarita" />
        <h1 className="text-2xl">Holi! mi amiga linda preciosa</h1>
        <img
          className="mx-auto h-12 w-auto"
          src="https://images.vexels.com/content/216360/preview/red-heart-doodle-733456.png"
          alt="Heart"
        />
      </div>

      {/* Párrafos Divididos en Columnas */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 mx-6">
        <p className="parrafo break-inside-avoid">
          Holiii, como estas? bueno, no sé, tengo que rellenar esto ya que no pensé en un buen diseño, no sirvo para eso, pero que se le va a hacer en este punto xD
        </p>
        <p className="parrafo break-inside-avoid">
          Bueno, hice esta pagina para darte 3 datitos, y así tambien poder practicar un poco algunas cosas que me costó entender cuando hacia el proyecto de la pagina web, cabe mencionar que esta
          web es mucho mejor trabajada que la anterior y tiene mas opciones
        </p>
        <p className="parrafo break-inside-avoid">
          Igualmente te quiero decir que te quiero mucho, eres mi amiga mas querida, la que mas adoro y con la que mas amo pasar tiempo, nunca me arrepiento de haberte conocido,
          cada momento, cada día y cada cosa contigo es muy especial, sabes cuanto quiero que seamos amigos por muchos años, que mis hijos te conozcan y todo, aunque seas tan boba,
          para mi eres parte fundamental y no sé que mas decir la vd, siempre te digo que te quiero mucho
        </p>
        <p className="parrafo break-inside-avoid">
          Y perdón por todas las rabias que te hago pasar, por las peleas y todo, sabes que te adoro y que no me gusta hacerlo pero me pongo wn y perdón por eso, aunque sea de ambos
          a veces la culpa, no quita que yo igual podria evitarlo mejor, perdón y siempre intento mejor con tu feedback
        </p>
      </div>
      <div className='mt-5 mb-5'>
        {showCalculadora && <CalculadoraPAES />}
        {showCalendario && <FechaMensaje />}
        {showOpcion3 && <Desarrollo/>}
      </div>
    </div>
  );
}
