/// <reference types="react" />
import "./myButton.css";
type Size = "small" | "medium" | "large";
type Type = "regular" | "zelda" | "magenta";
export interface myButtonProps {
    label: string;
    type: Type;
    size?: Size;
    onClick?: () => void;
}
export declare const MyButton: ({ label, type, size, ...props }: myButtonProps) => JSX.Element;
export {};
