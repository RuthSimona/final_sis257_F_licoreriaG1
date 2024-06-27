import type { Detalle } from "./venta";
import type { Venta } from "./ventadetalle";

export interface Cliente {
  id: number,
  nombre: string,
  apellido: string,
  cedulaIdentidad: string,
  fechaCreacion: Date,
  fechaModificacion: Date,
  ventas: Venta[];
  detalles: Detalle[];
  
}
