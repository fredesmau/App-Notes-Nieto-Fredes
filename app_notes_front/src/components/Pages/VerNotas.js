import React from 'react'
import { Link } from 'react-router-dom'


const notes = () => {
  return (
    <div>
    <div class="row">

    <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Titulo de su nota</h5>
            <p class="card-text">Descripcion de su nota.</p>
            <Link className="btn btn-primary" to="/detalle-nota">Detalle Nota</Link>
            <Link className="btn btn-primary" to="/modificar-nota">Modificar Nota</Link>
            <Link className="btn btn-primary" to="/eliminar-nota">Eliminar Nota</Link>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Titulo de su nota</h5>
            <p class="card-text">Descripcion de su nota.</p>
            <Link className="btn btn-primary" to="/detalle-nota">Detalle Nota</Link>
            <Link className="btn btn-primary" to="/modificar-nota">Modificar Nota</Link>
            <Link className="btn btn-primary" to="/eliminar-nota">Eliminar Nota</Link>
          </div>
        </div>
      </div>
      
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Titulo de su nota</h5>
            <p class="card-text">Descripcion de su nota.</p>
            <Link className="btn btn-primary" to="/detalle-nota">Detalle Nota</Link>
            <Link className="btn btn-primary" to="/modificar-nota">Modificar Nota</Link>
            <Link className="btn btn-primary" to="/eliminar-nota">Eliminar Nota</Link>
          </div>
        </div>
      </div>
      
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Titulo de su nota</h5>
            <p class="card-text">Descripcion de su nota.</p>
            <Link className="btn btn-primary" to="/detalle-nota">Detalle Nota</Link>
            <Link className="btn btn-primary" to="/modificar-nota">Modificar Nota</Link>
            <Link className="btn btn-primary" to="/eliminar-nota">Eliminar Nota</Link>
          </div>
        </div>
      </div>

      <div class="card-body d-flex justify-content-center">
        <a href="/crear-nota" class="btn btn-primary">Crear Nueva Nota</a>
      </div>
      
    </div>
</div>
  )
}

export default notes