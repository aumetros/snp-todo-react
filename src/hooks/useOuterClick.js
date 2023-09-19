import React from "react";
import { useLatest } from "./useLatest";

export function useOuterClick(elementRef, handler) {
  const latestHandler = useLatest(handler);

  React.useEffect(() => {
    const handleClick = (e) => {
      if (!elementRef.current.contains(e.target)) {
        latestHandler.current();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [elementRef, latestHandler]);
}
