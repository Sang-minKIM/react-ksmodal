import { useState } from "react";

interface useModalHook {
    isVisible: boolean;
    showModal: (duration: number) => void;
}

export function useModal(): useModalHook {
    const [isVisible, setIsVisible] = useState(false);

    const showModal = (duration: number) => {
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
        }, duration);
    };

    return { isVisible, showModal };
}
