import React, { useEffect, useState } from "react";

export function UseStateWithArray(props) {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        // returns random number btw 0 and 10
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items?.map((item) => (
          <li key={item?.id}>{item?.value}</li>
        ))}
      </ul>
    </div>
  );
}
