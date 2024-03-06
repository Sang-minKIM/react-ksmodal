import { useEffect, useRef, useState } from "react";

interface useModalHook {
    isVisible: boolean;
    showModal: (duration: number) => void;
}

export function useModal(): useModalHook {
    const [isVisible, setIsVisible] = useState(false);
    const timerId = useRef<NodeJS.Timeout | null>(null);

    const showModal = (duration: number) => {
        setIsVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
            setIsVisible(false);
            timerId.current = null;
        }, duration);
    };

    useEffect(() => {
        return () => {
            if (timerId.current) clearTimeout(timerId.current);
        };
    }, []);

    return { isVisible, showModal };
}
