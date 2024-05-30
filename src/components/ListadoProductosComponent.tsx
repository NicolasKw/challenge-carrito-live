import { useEffect, useState } from "react";
import { Producto } from "../models/Producto";
import { ProductoComponent } from "./ProductoComponent";

export const ListadoProductosComponent = () => {
  const [productos, setProductos] = useState<Producto[] | undefined>(undefined);

  useEffect(() => {
    fetch("http://localhost:3001/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data as Producto[]));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {(productos || []).map((p) => (
        <ProductoComponent key={p.id} producto={p} />
      ))}
    </div>
  );
};
