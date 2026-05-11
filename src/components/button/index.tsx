import type { FC } from "react";

// dinamik bir button tanımladık. o nedenle props belirledik.

interface Props {
  text: string;
  name?: string;
  designs?: string; // button'ı ekstra stillendirmek istersek kullanmak içi verdik.
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  fn?: () => void;
}

const Button: FC<Props> = ({ text, name, designs, disabled, type, fn }) => {
  return (
    <button
      name={name}
      className={`custom-btn ${designs}`}
      disabled={disabled}
      type={type}
      onClick={fn}
    >
      {text}
    </button>
  );
};

export default Button;
