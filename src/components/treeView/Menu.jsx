import { useState } from "react";
import "./styles.css";

function Menu({ items }) {
  const [showChildren, setShowChildren] = useState({});

  function showSubmenu(label) {
    setShowChildren({
      ...showChildren,
      [label]: !showChildren[label],
    });
  }

  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item.label} className="menu-item">
          <a href={item.to}>{item.label}</a>
          {item.children && (
            <span
              onClick={() => showSubmenu(item.label)}
              className="submenu-button"
            >
              {showChildren[item.label] ? "-" : "+"}
            </span>
          )}
          {showChildren[item.label] && item.children && (
            <Menu key={item.label} items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
