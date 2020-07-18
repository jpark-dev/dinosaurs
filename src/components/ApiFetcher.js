import React, { useState, useEffect } from "react";
import getRandArr from "../helpers/getRandArr";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ApiFetcher() {
  const classes = useStyles();

  const [itemList, setItemList] = useState([]);
  const [currentItemList, setCurrentItemList] = useState([]);

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
    <div className={classes.root}>
      {itemList.map(item => (
        <Button key = {item.name} variant='contained'>
            <p>{item.name}</p>
        </Button>
      ))}
    </div>
  );
}
