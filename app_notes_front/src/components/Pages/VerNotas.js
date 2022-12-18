import React from 'react'
import { Link } from 'react-router-dom'


const notes = () => {
  return (
    <div>
    <div class="row">

    <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo de su nota</h5>
            <p className="card-text">Descripcion de su nota.</p>
            <Link className="btn btn-primary" to="/detalle-nota">Detalle Nota</Link>
            <Link className="btn btn-primary" to="/modificar-nota">Modificar Nota</Link>
            <Link className="btn btn-primary" to="/eliminar-nota">Eliminar Nota</Link>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo de su nota</h5>
            <p className="card-text">Descripcion de su nota.</p>
            <Link className="btn btn-primary" to="/detalle-nota">Detalle Nota</Link>
            <Link className="btn btn-primary" to="/modificar-nota">Modificar Nota</Link>
            <Link className="btn btn-primary" to="/eliminar-nota">Eliminar Nota</Link>
          </div>
        </div>
      </div>
      
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo de su nota</h5>
            <p className="card-text">Descripcion de su nota.</p>
            <Link className="btn btn-primary" to="/detalle-nota">Detalle Nota</Link>
            <Link className="btn btn-primary" to="/modificar-nota">Modificar Nota</Link>
            <Link className="btn btn-primary" to="/eliminar-nota">Eliminar Nota</Link>
          </div>
        </div>
      </div>
      
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo de su nota</h5>
            <p className="card-text">Descripcion de su nota.</p>
            <Link className="btn btn-primary" to="/detalle-nota">Detalle Nota</Link>
            <Link className="btn btn-primary" to="/modificar-nota">Modificar Nota</Link>
            <Link className="btn btn-primary" to="/eliminar-nota">Eliminar Nota</Link>
          </div>
        </div>
      </div>

      <div className="card-body d-flex justify-content-center">
        <a href="/crear-nota" className="btn btn-primary">Crear Nueva Nota</a>
      </div>
      
    </div>
</div>
  )
}

export default notes