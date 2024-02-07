import { AgregarEmpleado } from "./components/AgregarEmpleado";
import { EditarEmpleado } from "./components/EditarEmpleado";
import { ListaEmpleados } from "./components/ListaEmpleados";

function App() {

  return (
    <div>
      <ListaEmpleados/>
      <EditarEmpleado/>
      <AgregarEmpleado/>
    </div>
  );
}

export default App
