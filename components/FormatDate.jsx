import React from 'react'

const FormatDate = ({ data }) => {
    const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const creationDate = new Date(data)
    // Obtener los componentes de la fecha
    const day = creationDate.getDate();
    const month = months[creationDate.getMonth()]; // Los meses son indexados desde 0
    const year = creationDate.getFullYear();

    // Formatear la fecha en el formato deseado
    const formattedDate = `${day} de ${month} del ${year}`;
    return (
        <>{formattedDate}</>
    )
}

export default FormatDate