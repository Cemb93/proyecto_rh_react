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

export async function postEmpleados(form: any) {
  try {
    const { data } = await axios.post(`/rh-app/empleados`, form);
    console.log("data:", data)
  } catch (error) {
    console.log("Error por:", error)
  }
}