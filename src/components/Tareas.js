import React, { useState } from 'react';

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);

    const guardarTareas = e => {
        e.preventDefault();

        let tareas_actualizadas = [...tareas, e.target.descripcion.value];
        
        setTareas(tareas_actualizadas);
    }

    const borrarTarea = id => {
        //Filtrar las tareas para borrar la que no quiero
        let nuevas_tareas = tareas.filter((tarea, indice) => indice !== id);

        //Set State, guardar el nuevo listado de tareas en el listado
        setTareas(nuevas_tareas);
    }

    return (
        <div className='tareas-container'>
            <h1>Mis tareas</h1>
            <form onSubmit={guardarTareas}>
                <input type="text" name="descripcion" placeholder="Describe la tarea" />
                <input type="submit" value="Guardar" />
            </form>

            <h3>Lista de tareas:</h3>
            <ul>
                {
                    tareas.map((tarea, indice) => {
                        return (
                            <li key={indice}>
                                {tarea}
                                &nbsp;
                                <button onClick={() => borrarTarea(indice)}>x</button>
                            </li>)
                    })
                }   
            </ul>
            
        </div>
    );
}
