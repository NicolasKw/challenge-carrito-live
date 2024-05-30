import { ReactNode } from "react";

type Props = { children: ReactNode; onClick?: () => void; disabled?: boolean };

export const ButtonComponent = ({ children, onClick, disabled }: Props) => {
  return (
    <button
  className={
    `flex justify-center items-center py-1 px-2 rounded-md w-full hover:bg-purple-500 
        ${disabled ? "bg-gray-400 opacity-60 cursor-not-allowed" : "bg-purple-700"}
        ${children === "Quitar" && "bg-red-500 hover:bg-red-400"}`
      }
  onClick={onClick}
  disabled={disabled}
>
  <p className={`${disabled ? "text-gray-600" : "text-white"}`}>{children}</p>
</button>

  );
};
