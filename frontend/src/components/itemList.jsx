import { useState } from "react";

function ItemList({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={styles.container}>
        {items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          items.map((item, index) => (
            <div 
              key={index} 
              style={styles.box} 
              onClick={() => handleItemClick(item)}
            >
              <p><strong>Name:</strong> {item.fullName}</p>
              <p><strong>Check-In:</strong> {item.checkInTime}</p>
              <p><strong>Check-Out:</strong> {item.checkOutTime}</p>
              <p className="description-truncate" style={styles.truncatedText}>
                <strong>Description:</strong> {item.description}
              </p>
            </div>
          ))
        )}
      </div>

      {selectedItem && (
        <div style={styles.overlay} onClick={closePopup}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.popupHeader}>
              <h3>Employee Details</h3>
              <button style={styles.closeButton} onClick={closePopup}>×</button>
            </div>
            <div style={styles.popupContent}>
              <p><strong>Name:</strong> {selectedItem.fullName}</p>
              <p><strong>Check-In Time:</strong> {selectedItem.checkInTime}</p>
              <p><strong>Check-Out Time:</strong> {selectedItem.checkOutTime}</p>
              <p><strong>Description:</strong> {selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "10px",
    maxHeight: "400px",
    overflowY: "auto",
    padding: "10px",
  },
  box: {
    backgroundColor: "#f8f8f8",
    color: "black",
    padding: "15px",
    textAlign: "left",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    height: "200px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    },
  },
  truncatedText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "#121212", // Black background
    color: "white", // White text color
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
    width: "400px",
    maxWidth: "90%",
    maxHeight: "80%",
    overflow: "auto",
    position: "relative",
  },
  popupHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    borderBottom: "1px solid #333", // Darker border for contrast
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#fff", // White close button
    fontWeight: "bold",
  },
  popupContent: {
    padding: "20px",
  }
};

export default ItemList;