import useOnWindowResize from "./useWindowResize";

function WindowResize() {
  const windowDimensions = useOnWindowResize();

  return (
    <section>
      <h1>Window Resize custom hook</h1>
      <p>
        <span>Width: {windowDimensions.width}px</span>
        <span>Height: {windowDimensions.height}px</span>
      </p>
    </section>
  );
}

export default WindowResize;
