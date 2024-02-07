import axios from "axios";

export async function getEmpleados(setEmpleados: any) {
  try {
    const { data } = await axios.get(`/rh-app/empleados`);
    // console.log("data:", data)
    setEmpleados(data);
  } catch (error) {
    console.log("Error por:", error)
  }
}