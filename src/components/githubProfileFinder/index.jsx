import { useState } from "react";
import "./styles.css";

function GithubProfileFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function handleSubmit() {
    setLoading(true);
    try {
      if (searchTerm) {
        const res = await fetch(`https://api.github.com/users/${searchTerm}`);
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        const data = await res.json();
        setResult(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  let searchResults;

  if (error) {
    searchResults = <div>{error}</div>;
  }

  if (loading) {
    searchResults = <div>Loading...</div>;
  }

  if (searchTerm.length === 0) {
    searchResults = null;
  }

  if (searchTerm.length > 0 && result.login) {
    searchResults = (
      <div className="profile-container">
        <a href={result.html_url} target="_blank">
          <h3>{result.login}</h3>
        </a>
        <div>
          <img
            src={result.avatar_url}
            alt={result.login}
            className="profile-avatar"
          />
        </div>
        <div>{result.location}</div>
        <div>Repos: {result.public_repos}</div>
      </div>
    );
  }

  return (
    <section id="github-profile-finder">
      <h1>Github Profile Finder</h1>
      <input
        type="text"
        name="search-github"
        placeholder="Search Github usernames"
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        value={searchTerm}
      />
      <button onClick={handleSubmit}>Search</button>
      <div>{searchResults}</div>
    </section>
  );
}

export default GithubProfileFinder;
