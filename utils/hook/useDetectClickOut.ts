import { createRef, useEffect } from "react";

export default function useDetectClickOut(onClose: Function) {
  const triggerRef = createRef<any>();
  const nodeRef = createRef<any>();

  const backDropHandler = (e: MouseEvent) => {
    if(triggerRef.current && 
      triggerRef.current.contains(e.target)) {
      return;
     }

    if(nodeRef.current && 
      !nodeRef.current.contains(e.target)) {
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('click', backDropHandler);
    return () => {
      window.removeEventListener('click', backDropHandler);
    }
  })
  return { triggerRef, nodeRef };
}