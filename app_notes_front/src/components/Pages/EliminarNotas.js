import React from 'react'

const EliminarNotas = () => {
  return (
    <div>
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo de su nota</h5>
            <p className="card-text">Descripcion de su nota.</p>
            <a href="/ver-notas" className="btn btn-primary">Eliminar Nota</a>
          </div>
        </div>
      </div>      
    </div>
</div>
  )
}

export default EliminarNotas