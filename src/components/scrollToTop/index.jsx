import { useState, useEffect, useMemo } from "react";
import "./styles.css";
import debounce from "lodash.debounce";

function ScrollToTopButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        window.scrollY > 300
          ? setShowScrollButton(true)
          : setShowScrollButton(false);
      }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [handleScroll]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      className={`scroll-top-button ${showScrollButton && "show"}`}
      onClick={scrollToTop}
    >
      Scroll to top
    </button>
  );
}

export default ScrollToTopButton;
