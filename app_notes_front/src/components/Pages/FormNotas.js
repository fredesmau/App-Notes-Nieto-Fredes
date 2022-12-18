import { render } from "@testing-library/react";
import React, {useState, useEffect} from 'react';
import * as NotesServer from './NotesServer';

const Nota = () => {

    // Estados

    // Hook useState
    const initialState = {
        id: 0,
        title: "",
        desc: "",
        fecha: ""
    };
    const [nota, setNota] = useState(initialState);

    // Funcion para obtener nuestra nota
    const getNota = async () => {

        try{

            const res = await NotesServer.getNota();
            const data = await res.json();
            const {id, title, desc, fecha} = data.nota;
            setNota({id, title, desc, fecha});

        } catch(error){
            console.log(error);


        }

    }
    const handleInputChange = (e) => {
        setNota({ ...nota, [e.target.name]: e.target.value});

    }

    // Efecto
    useEffect(() => {},[]);

    // Render o HTML o Return

    render(
        <div>
            <div className="col-md-3 mx-auto">
                <h2 className="mb-3 text-center">Nota</h2>
                <form>
                    <div className="mb-3">

                        <label className="form-label">Id de la Nota</label>
                        <input type="number" name="id" id="id" value={nota.id} onChange={handleInputChange}></input>

                        <label className="form-label">Titulo de la Nota</label>
                        <input type="text" name="titulo" id="titulo" value={nota.title} onChange={handleInputChange}></input>

                        <label className="form-label">Descripcion de la Nota</label>
                        <input type="text" name="descripcion" id="descripcion" value={nota.desc} onChange={handleInputChange}></input>

                        <label className="form-label">Descripcion de la Nota</label>
                        <input type="datetime-local" name="fecha" id="fecha" value={nota.fecha} onChange={handleInputChange}></input>
                        

                    </div>
                </form>

            </div>

        </div>
    );
}
export default Nota;
