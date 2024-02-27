import "./styles.css";

function TabHeader({ content, handleSetActiveTab, id }) {
  return <div onClick={() => handleSetActiveTab(id)}>{content}</div>;
}

export default TabHeader;
