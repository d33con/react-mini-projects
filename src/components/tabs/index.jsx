import { useState } from "react";
import "./styles.css";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";

const tabs = [
  {
    id: 1,
    title: "Tab 1",
    content: "Tab 1 content",
  },
  {
    id: 2,
    title: "Tab 2",
    content: "Tab 2 content",
  },
  {
    id: 3,
    title: "Tab 3",
    content: "Tab 3 content",
  },
  {
    id: 4,
    title: "Tab 4",
    content: "Tab 4 content",
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  function handleSetActiveTab(id) {
    setActiveTab(id);
  }

  return (
    <section>
      <h1>Tabs</h1>
      <div className="tabs-wrapper">
        <div className="tab-header-wrapper">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-header ${activeTab === tab.id ? "active" : ""}`}
            >
              <TabHeader
                content={tab.title}
                handleSetActiveTab={handleSetActiveTab}
                activeTab={activeTab === tab.id}
                id={tab.id}
              />
            </div>
          ))}
        </div>
        <div className="tab-content-wrapper">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-content ${activeTab === tab.id ? "active" : ""}`}
            >
              <TabContent content={tab.content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tabs;
