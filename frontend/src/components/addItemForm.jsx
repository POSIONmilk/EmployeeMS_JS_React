import { useState } from "react";

function AddItemForm({ onAddItem }) {


    const [fullName, setFullName] = useState("");
    const [description, setDescription] = useState("");
    const [checkInTime, setCheckInTime] = useState("");
    const [checkOutTime, setCheckOutTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName.trim() === "" || description.trim() === "" || checkInTime.trim() === "" || checkOutTime.trim() === "") return;

        const newItem = { fullName, description, checkInTime, checkOutTime };

        onAddItem(newItem);
        setFullName("");
        setDescription("");
        setCheckInTime("");
            setCheckOutTime("");
        };

return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
        <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            style={{ padding: "8px", width: "200px", marginBottom: "10px" }}
        />
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            style={{ padding: "8px", width: "200px", marginBottom: "10px" }}
        />
        <input
            type="time"
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
            placeholder="Check In Time"
            style={{ padding: "8px", width: "200px", marginBottom: "10px" }}
        />
        <input
            type="time"
            value={checkOutTime}
            onChange={(e) => setCheckOutTime(e.target.value)}
            placeholder="Check Out Time"
            style={{ padding: "8px", width: "200px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ padding: "8px", marginLeft: "10px", cursor: "pointer" }}>
            Add
        </button>
    </form>
);
}

export default AddItemForm;