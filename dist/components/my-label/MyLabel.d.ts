/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, mode, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
export {};
