import "./styles.css";

const links = [
  {
    name: "Random Colour Generator",
    id: "random-colour-generator",
  },
  {
    name: "Theme Switcher",
    id: "theme-switcher",
  },
  {
    name: "Github Profile Finder",
    id: "github-profile-finder",
  },
];

function HeaderMenu() {
  function scrollToSection(section) {
    const element = document.getElementById(section);
    console.log(element);
    const elementOffsetTop = element.offsetTop - 80; // header height is 80px
    window.scrollTo({
      top: elementOffsetTop,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <nav className="header-menu">
      <ul>
        {links.map((link) => (
          <li
            className="header-menu-link"
            key={link.id}
            onClick={() => scrollToSection(link.id)}
          >
            <span>{link.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderMenu;
