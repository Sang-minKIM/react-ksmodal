import React, { useEffect, useState } from "react";
import "./ksmodal.css";
import { KsmodalProps } from "./types";

export default function Ksmodal({ isVisible, duration, message, color = "#ffffff", backgroundColor = "#000000", radius = 0, width = "max-content", height = "max-content", bottom = "10%", left = "50%" }: KsmodalProps) {
    const [isRendered, setRendered] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setRendered(true);
            setTimeout(() => {
                setRendered(false);
            }, duration + 500);
        }
    }, [isVisible, duration]);

    return (
        <div
            className={`custom-message ${isVisible ? "fade-enter" : "fade-exit"}`}
            style={{
                display: isRendered ? "block" : "none",
                backgroundColor,
                color,
                borderRadius: `${radius}px`,
                width,
                height,
                bottom,
                left,
            }}
        >
            {message}
        </div>
    );
}
