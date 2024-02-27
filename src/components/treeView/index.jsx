import menus from "./data";
import "./styles.css";
import Menu from "./Menu";

// https://typeofnan.dev/creating-a-recursive-list-menu-any-number-of-levels-deep-in-react/

function TreeViewMenu() {
  return (
    <section>
      <h1>Tree View</h1>
      <Menu items={menus} />
    </section>
  );
}

export default TreeViewMenu;
