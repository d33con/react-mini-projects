import { useState } from "react";

function SearchAutocomplete() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  function handleOnInputChange(searchTerm) {
    setSearchTerm(searchTerm);
    if (searchTerm) {
      setLoading(true);
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${res.status}`
            );
          }
          return res.json();
        })
        .then((data) => {
          setSearchResults(data.users);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }

  return (
    <section>
      <h1>Search Autocomplete</h1>
      <div>
        <input
          type="text"
          name="search-autocomplete"
          onChange={(e) => handleOnInputChange(e.currentTarget.value)}
          placeholder="Search users..."
          value={searchTerm}
        />
      </div>
      <div style={{ padding: "20px" }}>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {searchResults &&
          searchResults.map((result) => (
            <div
              key={result.id}
            >{`${result.firstName} ${result.lastName}`}</div>
          ))}
      </div>
    </section>
  );
}

export default SearchAutocomplete;
