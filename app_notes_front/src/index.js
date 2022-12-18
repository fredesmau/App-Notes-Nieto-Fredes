import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Pages/Login';
import VerNotas from './components/Pages/VerNotas';
import ModificarNotas from './components/Pages/ModificarNotas';
import EliminarNotas from './components/Pages/EliminarNotas';
import CrearNota from './components/Pages/CrearNota';
import DetalleNota from './components/Pages/DetalleNota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Navbar></Navbar> 
      {/* SIEMPRE DEBE ESTAR DENTRO DEL BROWSER-ROUTER O ROUTES */}
        <div>
          <Routes>
            <Route exact path="/" element={<App></App>} />
            <Route path= "/ver-notas" element={<VerNotas></VerNotas>}></Route>
            <Route path= "/modificar-nota" element={<ModificarNotas></ModificarNotas>}></Route>
            <Route path= "/detalle-nota" element={<DetalleNota></DetalleNota>}></Route>
            <Route path= "/eliminar-nota" element={<EliminarNotas></EliminarNotas>}></Route>
            <Route path= "/crear-notas" element={<CrearNota></CrearNota>}></Route>
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
