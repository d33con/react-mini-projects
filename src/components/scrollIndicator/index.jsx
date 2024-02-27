import { useEffect, useState } from "react";
import "./styles.css";

function ScrollIndicator() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator-container">
      <div
        className="scroll-indicator"
        style={{
          width: `${
            (scrollTop /
              (document.documentElement.scrollHeight -
                document.documentElement.clientHeight)) *
            100
          }%`,
        }}
      ></div>
    </div>
  );
}

export default ScrollIndicator;
