import { useState, useCallback, useEffect, RefObject } from 'react';

function useWidth(elementRef: RefObject<HTMLDivElement>): number {
    const [width, setWidth] = useState<number>(0);

    const updateWidth = useCallback(() => {
        if (elementRef && elementRef?.current) {
            const { width } = elementRef.current.getBoundingClientRect();
            setWidth(width);
        }
    }, [elementRef]);

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [updateWidth]);

    return width;
}

export default useWidth;
