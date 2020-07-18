import React, { useState, useEffect } from "react";

export default function ApiFetcher() {
  const [itemList, setItemList] = useState([]);
  // const [randArrIndex, setRandArrIndex] = useState([]);

  useEffect(() => {
    console.log("useEffect fired!");
    const targetAPI = "https://pokeapi.co/api/v2/item?limit=1000";

    fetch(targetAPI)
      .then(data => data.json())
      .then(jsonData =>
        setItemList(jsonData.results[Math.floor(Math.random() * 4)])
      );
  }, []);

  console.log(itemList);

  return (
    <div>
      {/* {itemList.map(item => (
        <div key={item.name}>
          <p>{item.name}</p>
        </div>
      ))} */}
    </div>
  );
}
