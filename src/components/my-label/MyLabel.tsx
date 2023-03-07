import "./myLabel.css";

type Size = "normal" | "h1" | "h2" | "h3";
type Mode = "primary" | "secondary" | "terciary";

export interface MyLabelProps {
  /**
   * It is the Label content
   */
  label: string;

  /**
   * Label size: it could be  "normal", "h1", "h2", "h3"
   */
  size: Size;

  /**
   * Mode: Is this the principal title on the page? Use primary
   */
  mode: Mode;
  /**
   * You need caps? use it
   */
  allCaps?: boolean;
  
  fontColor?: string;
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  mode = "primary",
  allCaps = false,
  fontColor,
  backgroundColor,
}: MyLabelProps) => {

  return (
    <div>
      <label
        style={{
          color: fontColor,
          backgroundColor: backgroundColor,
          boxShadow: `0 5px ${backgroundColor}, 0 -5px ${backgroundColor}, 4px 0 ${backgroundColor}, -4px 0 ${backgroundColor}`,
        }}
        className={`label text-${mode} ${size}`}
      >
        {allCaps ? label.toUpperCase() : label}
      </label>
    </div>
  );
};
