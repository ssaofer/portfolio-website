import { useEffect } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  autoStart?: boolean;
}

export default function TypewriterText({
  text,
  speed = 100,
  delay = 500,
  className = "",
  autoStart = true,
}: TypewriterTextProps) {
  const { displayed, done, start } = useTypewriter(text, speed, delay);

  useEffect(() => {
    if (autoStart) start();
  }, [autoStart, start]);

  return (
    <span className={`${className} ${done ? "" : "typing-cursor"}`}>
      {displayed}
    </span>
  );
}
