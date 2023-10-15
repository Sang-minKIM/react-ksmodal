type SizeUnit = "%" | "px";
type SizeValue = `${number}${SizeUnit}`;

export interface KsmodalProps {
    isVisible: boolean;
    duration: number;
    message: string;
    backgroundColor?: string;
    color?: string;
    radius?: number;
    width?: SizeValue | "max-content";
    height?: SizeValue | "max-content";
    bottom?: SizeValue;
    left?: SizeValue;
}
