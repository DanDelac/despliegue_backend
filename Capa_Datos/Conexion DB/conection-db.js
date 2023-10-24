import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  // ssl: {
  //   ca: fs.readFileSync('"C:\Users\Alumno\Documents\Nueva carpeta\despliegue_backend\Capa_Datos\Conexion DB\DigiCertGlobalRootCA.crt.pem"'), // Certificado de CA
  //   key: fs.readFileSync('"C:\Users\Alumno\Documents\Nueva carpeta\despliegue_backend\Capa_Datos\Conexion DB\DigiCertGlobalRootCA.crt.pem"'), // Clave privada
  //   cert: fs.readFileSync('"C:\Users\Alumno\Documents\Nueva carpeta\despliegue_backend\Capa_Datos\Conexion DB\DigiCertGlobalRootCA.crt.pem"'), // Certificado del cliente
  // },
});
