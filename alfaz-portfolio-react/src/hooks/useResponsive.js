import { useEffect, useState } from "react";

export default function useResponsive() {
  const getWidth = () =>
    typeof window === "undefined" ? 1280 : window.innerWidth;

  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
    mobile: width < 700,
    tablet: width >= 700 && width < 1100,
    desktop: width >= 1100,
  };
}