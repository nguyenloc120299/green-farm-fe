import { useEffect } from "react";

const useClickOutSide = (fn: any, ref: any) => {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) fn();
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [fn, ref]);
};

export default useClickOutSide;
