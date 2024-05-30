import { ButtonComponent } from "./ButtonComponent";

export const CarritoComponent = ({
  onProductsShow,
}: {
  onProductsShow: () => void;
}) => {
  return (
    <div>
      <ButtonComponent onClick={onProductsShow}>Volver</ButtonComponent>
    </div>
  );
};
