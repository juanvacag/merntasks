import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;

    //state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //extraer nombre del proyecto
    const {nombre} = proyecto;

    //lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        
        //validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto)

        //reiniciar el formulario
        guardarProyecto({
            nombre: ''
        })
        
    }

        //mostrar formulario metodo 2
        const onClickFormulario = () => {
            mostrarFormulario();
        }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                //onClick={() => mostrarFormulario()} //metodo 1
                onClick={onClickFormulario}  //metodo 2, viene  de la linea 41
            >Nuevo Proyecto</button>

                    { formulario ?
                        (
                            <form
                                className="formulario-nuevo-proyecto"
                                onSubmit={onSubmitProyecto}>
                                <input 
                                    type="text"
                                    className="input-text"
                                    placeholder='Nombre Proyecto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={onChangeProyecto}/>
                                <input
                                    type='submit'
                                    className='btn btn-block btn-primario'
                                    value='Agregar Proyecto'/>
                    </form>
                        ) : null }

                    {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </Fragment>
     );
}
 
export default NuevoProyecto;