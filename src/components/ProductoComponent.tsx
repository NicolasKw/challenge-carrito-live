import { Producto } from "../models/Producto";
import { ButtonComponent } from "./ButtonComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/store";
import { agregarProducto, quitarProducto } from "../redux/productosSlice";
import { operarGemas } from "../redux/gemasSlice";

type Props = {
  producto: Producto;
};

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; 

export const ProductoComponent = ({ producto }: Props) => {
  const dispatch = useDispatch();

  const gemasDisponibles: number = useTypedSelector((state) => state.gemas.gemasDisponibles);
  const productosAgregados: Producto[] = useTypedSelector((state) => state.productos.productosSeleccionados);

  const [productoAgregado, setProductoAgregado] = useState<boolean>(false);

  useEffect(() => {
    if(productosAgregados.some(productoAgregado => productoAgregado.id === producto.id)) {
      setProductoAgregado(true);
    }
  }, []);

  const handleClick = () => {
    if(!productoAgregado) {
      dispatch(agregarProducto(producto));
      dispatch(operarGemas(-producto.precio))
    } else {
      dispatch(quitarProducto(producto));
      dispatch(operarGemas(producto.precio))
    }
    setProductoAgregado(!productoAgregado);
  };

  const handleDisabled = (): boolean => {
    if(!productoAgregado && producto.precio > gemasDisponibles) return true;
    else return false;
  }

  return (
    <div
      key={producto.id}
      className="bg-stone-700 p-4 rounded-lg shadow-md flex flex-col items-center relative gap-4 border-solid border-2 border-stone-700 hover:border-purple-700 transition-all cursor-pointer"
    >
      <img src={producto.imagen} className="h-24" alt={producto.nombre} />
      <h2 className="text-lg font-bold text-white">{producto.nombre}</h2>
      <p className="text-sm text-stone-400">{producto.descripcion}</p>
      <div className="absolute top-0 right-0 m-4 bg-green-500 flex justify-center items-center py-1 px-2 rounded-full">
        <p className="text-white">{producto.precio} gemas</p>
      </div>
      <ButtonComponent onClick={handleClick} disabled={handleDisabled()}>
        {(!productoAgregado) ? 'Agregar' : 'Quitar'}
      </ButtonComponent>
    </div>
  );
};
