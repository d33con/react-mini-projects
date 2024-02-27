import useFetch from "./useFetch";
function CustomUseFetch() {
  const { loading, error, data } = useFetch("https://dummyjson.com/products");

  return (
    <section>
      <h1>Custom Use Fetch</h1>
      <h3>Products</h3>
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "20px",
        }}
      >
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data &&
          data.products.map((product) => (
            <div
              key={product.id}
              style={{ padding: "40px", border: "2px solid slateblue" }}
            >
              <div>{product.title}</div>
              <div>${product.price}</div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default CustomUseFetch;
