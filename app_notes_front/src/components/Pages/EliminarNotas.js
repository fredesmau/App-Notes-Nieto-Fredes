import React from 'react'

const EliminarNotas = () => {
  return (
    <div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Titulo de su nota</h5>
            <p class="card-text">Descripcion de su nota.</p>
            <a href="/ver-notas" class="btn btn-primary">Eliminar Nota</a>
          </div>
        </div>
      </div>      
    </div>
</div>
  )
}

export default EliminarNotas