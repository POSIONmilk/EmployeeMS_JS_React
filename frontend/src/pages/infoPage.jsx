import { useState } from "react";
import SearchBar from "../components/searchBar";
import ItemList from "../components/itemList";
import AddItemForm from "../components/addItemForm";
import { useEffect } from "react";

function InfoPage() {
    //placeholder to test listing.
    const [items, setItems] = useState([{fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  },
        {fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  },
        {fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  },
        {fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  },
        {fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  },
        {fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  },
        {fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  },
        {fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  },
        {fullName : "Name1", checkInTime: "11", checkOutTime : "23", description : "This is description"  }
    ]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState(items);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/task");
            setItems(response.data);
            setFilteredItems(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    // Filter items when the search button is clicked
    const handleSearch = () => {
        setFilteredItems(
            items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    };

    // Add a new item and reset search results
    const handleAddItem = async (newItem) => {
        try {
            const response = await fetch("http://localhost:5000/api/task/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: newItem.fullName,
                    description: newItem.description,
                    checkInTime: newItem.checkInTime,
                    checkOutTime: newItem.checkOutTime,
                }),
            });

            if (response.ok) {
                const addedItem = await response.json();
                setItems((prevItems) => [...prevItems, addedItem]);
                setFilteredItems((prevItems) => [...prevItems, addedItem]);
            } else {
                console.error("Failed to add item:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "20px", textAlign: "center" }}>
        <h2>Item List</h2>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
        <ItemList items={filteredItems} />
        <AddItemForm onAddItem={handleAddItem} />
    </div>
    );
}

export default InfoPage;