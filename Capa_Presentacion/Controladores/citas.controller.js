import CN_Cita from "../../Capa_Negocio/cn_citas.js";

var objCita = new CN_Cita();

//Listar cita
export const listCita = async (req, res) => {
  try {
    const respuesta = await objCita.listCita();
    res.json(respuesta["rows"]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP" });
  }
};
// CREAR
export const createCita = async (req, res) => {
  try {
    const { IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado } = req.body;
    const result = await objCita.createCita(IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado);
    res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - Error: " + error.message });
  }
};

//ACTUALIZAR CITA
export const updateCita = async (req, res) => {
  try {
    const { IDCita } = req.params;  //const id = req.params.id;
    // console.log("ID: " + typeof (IDCita))
    const { IDMedico, citMotivo, citFecha, citHora, citEstado } = req.body;

    const result = await objCita.updateCita(IDCita, IDMedico, citMotivo, citFecha, citHora, citEstado);

    if (result.affectedRows > 0)
      return res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - Error: " + error.message });
  }
};

//ELIMINAR
export const deleteCita = async (req, res) => {
  try {
    const { IDCita } = req.params;
    const result = await objCita.deleteCita(IDCita);

    if (result.affectedRows <= 0) {
      return res.status(201).json({ message: result.message });
    } else{
      return res.status(201).json({ result });
    }
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal en CP - Error: " + error.message });
  }
};


