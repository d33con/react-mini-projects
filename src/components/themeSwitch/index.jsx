import { useEffect, useState } from "react";
import "./styles.css";

function ThemeSwitch() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme"));
    if (savedTheme) {
      return savedTheme;
    } else {
      return "light";
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <section id="theme-switcher">
      <h1>Theme Switcher</h1>
      <div className={`${theme === "dark" ? "dark" : "light"}-theme container`}>
        <h1 className={`${theme === "dark" ? "dark" : "light"}-title`}>
          Current Theme: {theme}
        </h1>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </section>
  );
}

export default ThemeSwitch;
