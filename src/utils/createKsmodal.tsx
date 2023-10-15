import React from "react";
import Ksmodal from "../components/Ksmodal";
import { KsmodalProps } from "../components/types";

export function createKsmodal() {
    return function KsmodalFactory({ isVisible, message, backgroundColor, duration, radius, width, height, color, bottom, left }: KsmodalProps) {
        return <Ksmodal isVisible={isVisible} bottom={bottom} duration={duration} message={message} backgroundColor={backgroundColor} radius={radius} width={width} height={height} color={color} left={left} />;
    };
}
