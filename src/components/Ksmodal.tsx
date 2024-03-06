import React, { useEffect, useState } from "react";
import styles from "./ksmodal.module.css";
import { KsmodalProps } from "./types";

export default function Ksmodal({ isVisible, duration, message, color = "#ffffff", backgroundColor = "#000000", radius = 0, width = "max-content", height = "max-content", bottom = "10%", left = "50%" }: KsmodalProps) {
    const [isRendered, setRendered] = useState(isVisible);

    useEffect(() => {
        if (!isVisible) {
            return;
        }
        setRendered(true);
        const timer = setTimeout(() => {
            setRendered(false);
        }, duration + 500);

        return () => clearTimeout(timer);
    }, [isVisible, duration]);

    return (
        <div
            className={`${styles["custom-message"]} ${isVisible ? styles["fade-enter"] : styles["fade-exit"]}`}
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
