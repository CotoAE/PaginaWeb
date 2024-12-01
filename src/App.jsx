import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Diseños
import './App.css'
import './Styles.css'
import './Modulos.css'
//Componentes
import Home from './pages/home.jsx'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/PaginaWeb" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
