function ItemList({ items }) {
    return (
      <ul>
        {items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          items.map((item, index) => (
            <li key={index} style={{ padding: "5px 0" }}>
              {item}
            </li>
          ))
        )}
      </ul>
    );
  }
  
  export default ItemList;