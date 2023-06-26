import { useEffect, useState } from "react";

export interface IIsVisible {
  isVisible: boolean;
}

export default function useObserver(ref: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
      observer.observe(ref.current);
    }
  }, [ref]);

  return { isVisible };
}
