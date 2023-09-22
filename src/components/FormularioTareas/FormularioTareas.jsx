export const FormularioTareas = ({descripcion, handleInputChange, handleSubmit}) =>{

    return(
        <>
        <h3>Agregar Tareas</h3>

        <hr/>
        <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="tareaInput" className="form-label">Descripcion</label>
                    <input onChange={(e) => handleInputChange(e)} value={descripcion} type="text" className="form-control" id="tareaInput" aria-describedby="descripciontxt"/>
                <div id="descripcionText" className="form-text">Agregar la Descripcion</div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-success container-fluid">Agregar</button>
                </div>
        </form>
        </>
    )

}