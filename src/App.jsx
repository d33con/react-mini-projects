import "./App.css";
import Accordions from "./components/accordion";
import CustomUseFetch from "./components/customUseFetch";
import GithubProfileFinder from "./components/githubProfileFinder";
import HeaderMenu from "./components/headerMenu";
import ImageSlider from "./components/imageSlider";
import LoadMore from "./components/loadMore";
import ModalContainer from "./components/modal";
import RandomColour from "./components/randomColour";
import ScrollIndicator from "./components/scrollIndicator";
import ScrollToTopButton from "./components/scrollToTop";
import SearchAutocomplete from "./components/searchAutocomplete";
import StarRating from "./components/starRating";
import Tabs from "./components/tabs";
import ThemeSwitch from "./components/themeSwitch";
import TreeViewMenu from "./components/treeView";
import WindowResize from "./components/useWindowResize";

function App() {
  return (
    <>
      <h1 className="header">25 React Projects</h1>
      <HeaderMenu />
      <ScrollIndicator />
      <Accordions />
      <RandomColour />
      <StarRating />
      {/* <ImageSlider />
      <LoadMore /> */}
      <TreeViewMenu />
      <ThemeSwitch />
      <Tabs />
      <ModalContainer />
      <GithubProfileFinder />
      <SearchAutocomplete />
      {/* <CustomUseFetch /> */}
      <WindowResize />
      <ScrollToTopButton />
    </>
  );
}

export default App;
