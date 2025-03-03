function ItemList({ items }) {
  return (
    <div style={{ ...styles.container, maxHeight: "400px", overflowY: "auto" }}>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        items.map((item, index) => (
          <div key={index} style={styles.box}>
            <p><strong>Name:</strong> {item.fullName}</p>
            <p><strong>Check-In Time:</strong> {item.checkInTime}</p>
            <p><strong>Check-Out Time:</strong> {item.checkOutTime}</p>
            <p><strong>Description:</strong> {item.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: "10px",
    marginTop: "10px",
  },
  box: {
    backgroundColor: "black",
    padding: "20px",
    textAlign: "center",
    border: "2px solid black",
    borderRadius: "5px",
  },
};

export default ItemList;