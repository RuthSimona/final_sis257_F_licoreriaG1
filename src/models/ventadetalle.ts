import type { Cliente } from "./cliente";
import type { Venta } from "./venta";

export interface Venta {
    id: number;
    
    fechaVenta: Date;
    idCliente: number;
    ventas: Venta[];
    cliente: Cliente;
    
  }