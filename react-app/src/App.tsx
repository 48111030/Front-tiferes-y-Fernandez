import React from 'react';
import './App.css'; // o './App.css'
import ropaImg from './assets/Ropa.png';




const Login: React.FC = () => {
  return (
    
      <div className="DOM">
        <div className="izq">
        <h1 className="GlobalW">Globar Wear</h1> 
        <h3>Inicio de Sesion</h3>
       
        <div className="Form">
          <div>
            <label h className="Email"><strong>Email</strong></label>
                <input type="email" id="email" className="email"/>
          </div>

          <div>
            <label  className="label"><strong>Contraseña</strong></label>
            <input
              type="password" id="password" className="password"/>
          </div>

          <button type="submit" className="submit"> Iniciar sesión </button>
        </div>
        </div>
        
      

    
      <div className="Panel-derecho">
      <img
          src={ropaImg}
          
          className="img"
        />
      </div>
      </div>
     
       
       
    
  );
};

export default Login;
