import { useEffect, useState } from "react";
import { getEmpleados } from "../hooks/empleados";
import { IEmpleados } from "../interface/IEmpleados";

export const ListaEmpleados = () => {
  const [empleados, setEmpleados] = useState<IEmpleados[]>([]);
  // console.log("EMPLEADOS:", empleados)

  useEffect(() => {
    getEmpleados(setEmpleados);
  }, []);

  return (
    <div className="contanier">
      <div className='container text-center' style={{ margin: "30px" }}>
        <h3>ListaEmpleados</h3>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((el: IEmpleados, idx: number) => {
            return (
              <tr key={idx}>
                <th scope="row">{el.idEmpleado}</th>
                <td>{el.nombre}</td>
                <td>{el.departamento}</td>
                <td>{el.sueldo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
