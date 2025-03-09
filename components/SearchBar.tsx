import { useState } from "react";
import axios from "axios";

interface SearchBarProps {
  setSearchResults: (images: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (!searchQuery) return;
    const API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=photo`
    );
    setSearchResults(response.data.hits);
  };

  // Handle key press events - check for Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search images..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;