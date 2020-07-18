import React, { useState, useEffect } from "react";
import getRandArr from "../helpers/getRandArr";
import { AppBar, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ApiFetcher() {
  const classes = useStyles();

  const [itemData, setItemData] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [currentItemList, setCurrentItemList] = useState([]);

  useEffect(() => {
    console.log("useEffect fired!");
    const targetAPI = "https://pokeapi.co/api/v2/item?limit=1000";

    fetch(targetAPI)
      .then(data => data.json())
      .then(jsonData => {
        setItemData(jsonData);
        setItemList(getRandArr(jsonData.results));
      });
  }, []);

  const fetchNewList = itemData => {
    setItemList(getRandArr(itemData.results));
  };

  const addToList = (name, itemData) => {
    // Do not have if users have selected 6 items

    const msg = "You already have 6 items!";

    if (currentItemList.length <= 5) {
      setCurrentItemList([...currentItemList, ` ${name}`]);
    } else {
      return alert(msg);
    }

    // Remove the selected item from the item suggestion list
    const filteredArr = itemList.filter(e => e.name !== name);

    // refresh the list if there is no items left
    !filteredArr.length ? fetchNewList(itemData) : setItemList(filteredArr);
  };

  const removeFromList = name => {
    console.log(`${name} remove!`);
  };

  return (
    <>
      <AppBar position='static'>
        <p>Choose your favourite item!</p>
      </AppBar>

      <Container className={classes.button}>
        {itemList.map(item => (
          <Button
            key={item.name}
            variant='contained'
            onClick={() => addToList(item.name, itemData)}
          >
            <p>{item.name}</p>
          </Button>
        ))}
      </Container>

      <AppBar position='static'>
        <p> A set of wild items has appeared!</p>
      </AppBar>

      <Container className={classes.button}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => fetchNewList(itemData)}
        >
          <p>Get more items!</p>
        </Button>
      </Container>

      <AppBar position='static'>
        <p>Your current items: </p>
      </AppBar>

      <Container className={classes.button}>
        {currentItemList.map(item => (
          <Button
            key={item}
            variant='contained'
            onClick={() => removeFromList(item)}
          >
            <p>{item}</p>
          </Button>
        ))}
        {/* <p>{currentItemList}</p> */}
      </Container>
    </>
  );
}
