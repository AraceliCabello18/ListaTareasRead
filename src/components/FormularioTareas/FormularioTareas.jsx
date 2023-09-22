export const FormularioTareas = ({descripcion, handleInputChange, handleSubmit}) =>{
    return(
        <>
        <div className="card bg-secondary" style={{width: "25rem"}}>
            <div className="card-body">

        <h3>Agregar Tareas</h3>
        <hr/>
        
        <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="tareaInput" className="form-label">Descripcion</label>
                    <input onChange={(e) => handleInputChange(e)} value={descripcion} type="text" className="form-control" id="tareaInput" aria-describedby="descripciontxt"/>
                <div id="descripcionText" className="form-text">Agregar la Descripcion</div>
                </div>
                    <button type="submit" className="btn btn-success container-fluid">Agregar</button>
        </form>
        </div>
        </div>
        </>
    )

}