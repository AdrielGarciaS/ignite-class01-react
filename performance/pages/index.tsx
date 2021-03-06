import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults";

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input 
          type="text"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults 
        results={results}
        onAddToWishList={addToWishList}
      />
    </div>
  )
}
