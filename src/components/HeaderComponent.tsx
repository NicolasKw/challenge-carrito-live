import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/store";
import { Producto } from "../models/Producto";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const HeaderComponent = ({
  onShowCarrito,
}: {
  onShowCarrito: () => void;
}) => {

  const gemasDisponibles: number = useTypedSelector((state) => state.gemas.gemasDisponibles);
  const productosCarrito: Producto[] = useTypedSelector((state) => state.productos.productosSeleccionados);

  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" />
        <span>{`${gemasDisponibles} Gemas`}</span>
      </div>
      <button className="text-white hover:underline" onClick={onShowCarrito}>
        {`Ver Carrito (${productosCarrito.length})`}
      </button>
    </div>
  );
};
