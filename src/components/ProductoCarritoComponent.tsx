import { Producto } from "../models/Producto";
import { useDispatch } from "react-redux";
import { quitarProducto } from "../redux/productosSlice";
import { operarGemas } from "../redux/gemasSlice";

type Props = {
  producto: Producto;
};

export const ProductoCarritoComponent = ({ producto }: Props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(quitarProducto(producto));
        dispatch(operarGemas(producto.precio));
    };

    return (
        <div
        key={producto.id}
        className="bg-stone-700 p-2 my-2 px-5 rounded-lg shadow-md flex flex-row justify-between items-center relative gap-4 border-solid border-2 border-stone-700"
        >
        <img src={producto.imagen} className="h-12 bg-stone-500 rounded-full" alt={producto.nombre} />
        <h2 className="text-lg text-white">{producto.nombre}</h2>
        <button className={`text-stone-500 hover:text-black cursor-pointer`} onClick={handleClick}>X</button>
        </div>
    );
};
