import { useState, useEffect, useCallback } from "react";

export function useTypewriter(text: string, speed: number = 100, delay: number = 300) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  const start = useCallback(() => {
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [started, text, speed, delay]);

  return { displayed, done, start };
}
