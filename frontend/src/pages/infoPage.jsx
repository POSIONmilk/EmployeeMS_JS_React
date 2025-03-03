import { useState } from "react";
import SearchBar from "../components/searchBar";
import ItemList from "../components/itemList";
import AddItemForm from "../components/addItemForm";
import { useEffect } from "react";
import axios from "axios";

function InfoPage() {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/task");
                setItems(response.data);
                setFilteredItems(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    // Filter items when the search button is clicked
    const handleSearch = () => {
        setFilteredItems(
            items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    };

    // Add a new item and reset search results
    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        setFilteredItems(updatedItems); // Show newly added item
    };

    return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center" }}>
        <h2>Item List</h2>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
        <ItemList items={filteredItems} />
        <AddItemForm onAddItem={handleAddItem} />
    </div>
    );
}

export default InfoPage;