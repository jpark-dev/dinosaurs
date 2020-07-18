import React, { useState, useEffect } from "react";

export default function ApiFetcher() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    console.log("useEffect fired!");
    const targetAPI = "https://pokeapi.co/api/v2/item";

    fetch(targetAPI)
      .then(data => data.json())
      .then(jsonData => setItemList(jsonData));
  }, []);

  console.log(itemList);
  return (
    <div>
      {/* {itemList.map(item => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.url}</p>
        </div>
      ))} */}
    </div>
  );
}
