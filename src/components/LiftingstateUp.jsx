function SearchInput({ query, onQueryChange }) {
    return (
        <div>
            <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
            />
        </div>

    );
}
export default SearchInput;