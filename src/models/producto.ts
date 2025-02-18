import type { Categoria } from "./categoria";
import type { DetallesVenta } from "./venta";

export interface Producto {
    
  id: number,
  nombre: string,
  precio: number,
  stock: number,
  idCategoria: number;
  fechaCreacion: Date,
  fechaModificacion: Date,
  categoria: Categoria; 
  detallesVenta: DetallesVenta[];
  }