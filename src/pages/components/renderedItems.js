import React, {useEffect, useState} from "react";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem"
import LoadingComponent from "./loadingComponent";

function RenderedItems(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const market = props.market;
  useEffect(() => {
    fetch(`http://iss.moex.com/iss/engines/stock/markets/${market}/securities.json`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          result = result.securities.data
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoadingComponent/>
  } else {
    return (
      <List>
        {items.map(item => (
          <ListItem button component="a" href={`/${market}/` + item[0]}>
            <ListItemText primary={item[0]}/>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default RenderedItems;
