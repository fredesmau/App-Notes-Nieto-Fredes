// Conexion a API

const API_URL = 'http://127.0.0.1:8000/notes/notes-list/'

export const getNota = async () => {
    return await fetch(API_URL);
}

export const traerNota = [
    {
        id: 1,
        title: "Finales facultad",
        desc: "Historia 2 y Tecno 2 aprobadas",
        fecha: "2023-02-15T15:00:00Z"
    }
];

export const updateNota = async () => {
    return await fetch(API_URL);
}

export const listNotas = async () => {
    return await fetch(API_URL);
}

export const deleteNota = async () => {
    return await fetch(API_URL);
}

export const createNota = async () => {
    return await fetch(API_URL);
}