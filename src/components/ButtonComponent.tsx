import { ReactNode } from "react";

type Props = { children: ReactNode; onClick?: () => void };

export const ButtonComponent = ({ children, onClick }: Props) => {
  return (
    <button
      className="bg-purple-700 flex justify-center items-center py-1 px-2 rounded-md w-full"
      onClick={onClick}
    >
      <p className="text-white">{children}</p>
    </button>
  );
};
