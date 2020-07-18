import React, { useState, useEffect } from "react";
import getRandArr from "../helpers/getRandArr";

export default function ApiFetcher() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    console.log("useEffect fired!");
    const targetAPI = "https://pokeapi.co/api/v2/item?limit=1000";

    fetch(targetAPI)
      .then(data => data.json())
      .then(jsonData => {
        setItemList(getRandArr(jsonData.results));
      });
  }, []);

  return (
    <div>
      {itemList.map(item => (
        <div key={item.name}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
