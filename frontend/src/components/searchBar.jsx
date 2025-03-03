function SearchBar({ searchQuery, setSearchQuery, onSearch }) {
    return (
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search items..."
          style={{ padding: "8px", width: "200px" }}
        />
        <button onClick={onSearch} style={{ padding: "8px", cursor: "pointer" }}>
          Search
        </button>
      </div>
    );
  }
  
  export default SearchBar;