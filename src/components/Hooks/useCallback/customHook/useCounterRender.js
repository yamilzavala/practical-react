import { useRef } from "react";

export const useRefRender = () => {
    const renders = useRef(0);
    console.log('Renders: ',renders.current++);
}