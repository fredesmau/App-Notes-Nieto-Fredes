import React from 'react'

const Login = () => {
  return (
    <div className="container-sm">
        <form>
          <div className="form-group mx-sm-3 mb-2">
            <label for="exampleInputEmail1">Ingrese su Email </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo con nadie mas.</small>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label for="exampleInputPassword1">Ingrese su Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <div className="form-group mx-sm-3 mb-2 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Recordarme</label>
          </div>
          <div className= "d-flex justify-content-center">
            <button type="submit " class="btn btn-primary">Ingresar</button>
          </div>
        </form>
    </div>
  )
}

export default Login