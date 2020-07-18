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

  const addToList = name => {
    setCurrentItemList([...currentItemList, ` ${name}`]);
    const filteredArr = itemList.filter(e => {
      return e.name !== name;
    });
    setItemList(filteredArr);
  };

  const fetchNewList = itemData => {
    setItemList(getRandArr(itemData.results))
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
            onClick={() => addToList(item.name)}
          >
            <p>{item.name}</p>
          </Button>
        ))}
      </Container>

      <AppBar position='static'>
        <p> A set of wild items has appeared!</p>
      </AppBar>

      <Container className={classes.button} >
        <Button variant='contained' color='secondary' onClick={() => fetchNewList(itemData)}>
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
            // onClick={() => removeFromList(item.name)}
          >
            <p>{item}</p>
          </Button>
        ))}
        {/* <p>{currentItemList}</p> */}
      </Container>
    </>
  );
}
