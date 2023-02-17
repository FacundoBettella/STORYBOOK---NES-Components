import "./myButton.css";

type Size = "small" | "medium" | "large";
type Type = "regular" | "zelda" | "magenta";

interface myButtonProps {
  label: string;
  type: Type;

  size?: Size;

  onClick?: () => void;
}

export const MyButton = ({
  label,
  type,
  size = "medium",

  ...props
}: myButtonProps) => {


  return (
    <button
      className={`nes-btn-${type} ${size}`}
      {...props}
    >
      {label}
    </button>
  );
};
