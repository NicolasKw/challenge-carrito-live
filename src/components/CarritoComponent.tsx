import { ButtonComponent } from "./ButtonComponent";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../redux/store";
import { Producto } from "../models/Producto";
import { ProductoCarritoComponent } from "./ProductoCarritoComponent";
import { vaciarCarrito } from "../redux/productosSlice";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; 

export const CarritoComponent = ({
  onProductsShow,
}: {
  onProductsShow: () => void;
}) => {
  const dispatch = useDispatch();

  const productosSeleccionados: Producto[] = useTypedSelector((state) => state.productos.productosSeleccionados);

  const [compraRealizada, setCompraRealizada] = useState<boolean>(false);
  const [compraFallada, setCompraFallada] = useState<boolean>(false);

  const handleCompra = async () => {
    const itemsId: number[] = productosSeleccionados.map((producto) => producto.id)

    fetch("http://localhost:3001/compras", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({itemsId})
    })
      .then((response) => {
        if(!response.ok) {
          setCompraFallada(true);
          throw new Error('No se pudo procesar la compra')
        };
        setCompraRealizada(true);
        dispatch(vaciarCarrito());
      })
      .catch((error) => console.log(error))
  };

  return (
    <div>
      <div className="w-1/6">
        <ButtonComponent onClick={onProductsShow}>Volver</ButtonComponent>
      </div>
      <div className="my-8 text-center">
        {(!compraRealizada) ? 
          (productosSeleccionados || []).map((p) => (
            <ProductoCarritoComponent key={p.id} producto={p} />
          )) : <span>Compra Realizada!</span>
        }
      </div>
      <ButtonComponent onClick={handleCompra}>Comprar</ButtonComponent>
      <div className="text-center my-2">
        {(compraFallada) && <span>No se pudo realizar la compra. Por favor intente nuevamente</span>}
      </div>
    </div>
  );
};
