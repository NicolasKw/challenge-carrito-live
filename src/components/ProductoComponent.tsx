import { Producto } from "../models/Producto";
import { ButtonComponent } from "./ButtonComponent";

type Props = {
  producto: Producto;
};

export const ProductoComponent = ({ producto }: Props) => {
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
      <ButtonComponent>Agregar</ButtonComponent>
    </div>
  );
};
