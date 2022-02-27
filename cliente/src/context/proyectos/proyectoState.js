import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTO, 
    AGREGAR_PROYECTO, 
    VALIDAR_FORMULARIO, 
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño de sitio web'},
        {id: 4, nombre: 'MERN'}
]
    const inicialState = {
        proyectos : [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, inicialState)

            //agregar una serie de funciones para el CRUD (create, read, update, delete)
            const mostrarFormulario = () => {
                dispatch({
                    type: FORMULARIO_PROYECTO
                })
            }
            //obtener los proyectos
            const obtenerProyectos = () => {
                dispatch({
                    type: OBTENER_PROYECTO,
                    payload: proyectos
                })
            }
            //agregar nuevo proyecto
            const agregarProyecto = proyecto => {
                proyecto.id = uuidv4();

                //inseta el proyecto en el State
                dispatch({
                    type: AGREGAR_PROYECTO,
                    payload: proyecto
                })
            }
            //valida formulario por errores
            const mostrarError = () => {
                dispatch({
                    type: VALIDAR_FORMULARIO
                })
            }

            //selecciona el proyecto que el usuario dio click
            const proyectoActual = proyectoId => {
                dispatch({
                    type: PROYECTO_ACTUAL,
                    payload: proyectoId
                })
            }

            //eliminar un proyecto
            const eliminarProyecto = proyectoId => {
                dispatch({
                    type: ELIMINAR_PROYECTO,
                    payload: proyectoId
                })
            }
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;