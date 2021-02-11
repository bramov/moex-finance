import Header from './components/header';
import Footer from './components/footer';
import React, {useEffect, useState} from "react";
import {Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import LoadingComponent from "./components/loadingComponent";
import ChartComponent from "./components/chartComponent";


function Ticket(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const marketAndName = props.location.pathname.split('/');
  const ticketName = marketAndName[2];
  const market = marketAndName[1];
  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate()-415);
  const date = todayDate.getFullYear() + '-' +
    ((todayDate.getMonth() + 1) < 10 ? '0' + todayDate.getMonth() : todayDate.getMonth())  + '-' +
    ((todayDate.getDay() < 10) ? '0' + todayDate.getDay() : todayDate.getDay());

  useEffect(() => {
    fetch(`http://iss.moex.com/iss/engines/stock/markets/${market}/securities/${ticketName}/candles.json?interval=24&from=${date}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          result = result.candles.data;
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoadingComponent/>
  } else {
    return (
      <div>
        <Header/>
        <Box>
          <Paper>
            <ChartComponent ticketname={ticketName} items={items}/>
          </Paper>
        </Box>
        <Footer/>
      </div>

    )
  }
}

export default Ticket;
