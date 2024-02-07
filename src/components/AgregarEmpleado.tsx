import { useState } from "react";
import { getEmpleados, postEmpleados } from "../hooks/empleados";

export const AgregarEmpleado = () => {

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: ""
  })

  const { nombre, departamento, sueldo } = empleado

  const onInputChange = (e: any) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await postEmpleados(empleado);
    setEmpleado({
      nombre: "",
      departamento: "",
      sueldo: ""
    });
    await getEmpleados(null)
  }

  return (
    <div className='container'>
      <div className='container text-center' style={{ margin: "30px" }}>
        <h3>Agregar Empleado</h3>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control"
            id="nombre" name='nombre' required={true}
            value={nombre} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento"
            className="form-label">Departamento</label>
          <input type="text" className="form-control"
            id="departamento" name='departamento'
            value={departamento} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="sueldo"
            className="form-label">Sueldo</label>
          <input type="number" step="any" className="form-control"
            id="sueldo" name='sueldo'
            value={sueldo} onChange={(e) => onInputChange(e)} />
        </div>
        <div className='text-center'>
          <button type="submit"
            className="btn btn-warning btn-sm me-3">Agregar</button>
        </div>
      </form>
    </div>
  );
}
