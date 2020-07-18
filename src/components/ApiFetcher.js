import React, { useState, useEffect } from "react";

export default function ApiFetcher() {
  const [itemList, setItemList] = useState([]);
  const [randArrIndex, setRandArrIndex] = useState([]);

  const getRandArrIndex = itemList => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(itemList[Math.floor(Math.random() * 954)]);
    }
    return arr;
  };

  useEffect(() => {
    console.log("useEffect fired!");
    const targetAPI = "https://pokeapi.co/api/v2/item?limit=1000";

    fetch(targetAPI)
      .then(data => data.json())
      .then(jsonData => {
        setItemList(getRandArrIndex(jsonData.results));
        // setItemList(jsonData.results[Math.floor(Math.random() * 4)]);
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
