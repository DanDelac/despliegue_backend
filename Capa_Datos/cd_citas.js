import { pool } from "./Conexion DB/conection-db.js";
class CD_Cita {

    //LISTAR
    async listCita() {
        var message = "";
        var rows;
        try {
            // codigo asincorno, consulta sql listar empleados
            [[rows]] = await pool.query("call listar_cita();");
        } catch (error) {
            message = "Algo salió mal en CD";
            rows = [];
        }
        return { message: message, rows: rows };
    }
    // CREAR
    async createCita(IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado) {
        var message = "";
        var result = { affectedRows: 0, row: 0 };
        try {
            // Implementa la consulta SQL para crear una nueva cita en la base de datos
            [[[result]]] = await pool.query(
                "CALL crear_cita(?, ?, ?, ?, ?, ?)",
                [IDHistoria, IDMedico, citMotivo, citFecha, citHora, citEstado]
            );
            result = { affectedRows: 1, row: result }
        } catch (error) {
            message = "Algo salió mal en CD, Servidor: " + error.message;
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows, row: result.row };//row: 
    }

    //ACTUALIZAR
    async updateCita(idCita, medicoId, estado, tratamiento, fecha, hora) {
        var message = "";
        var result = { affectedRows: 0 };

        try {
            [result] = await pool.query(
                "call editar_cita(?,?,?,?,?,?);",
                [idCita, medicoId, estado, tratamiento, fecha, hora]);

        } catch (error) {
            message = "Algo salió mal en CD, Servidor: " + error.message;
            result.affectedRows = 0;
        }

        return { message: message, affectedRows: result.affectedRows };
    }

    //ELIMINAR
    async deleteCita(idCita) {
        var message = "";
        var result = { affectedRows: 0 };
        try {
            [result] = await pool.query("call eliminar_cita (?);", [idCita]);
        } catch (error) {
            message = "Algo salió mal en CD";
            result.affectedRows = 0;
        }
        return { message: message, affectedRows: result.affectedRows };
    }

}

export default CD_Cita;

