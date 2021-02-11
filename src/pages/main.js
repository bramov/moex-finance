import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListItemText from '@material-ui/core/ListItemText';
import Header from './components/header';
import Footer from "./components/footer";
import RenderedItems from "./components/renderedItems";
import {Typography} from "@material-ui/core";
import ChartComponent from "./components/chartComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: '10%'
  }
}))

function MainPage() {
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <div className={classes.root}>
        <Box width="90%" mt="5%">
          <Paper className={classes.paper}
            variant="outlined"
            >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4">Акции</Typography>
                <RenderedItems market="shares"/>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4">Облигации</Typography>
                <RenderedItems market="bonds"/>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4">Индексы</Typography>
                <RenderedItems market="index"/>
              </CardContent>
            </Card>
          </Paper>

        </Box>




      </div>
      <Footer/>
    </div>

    )
};

export default MainPage;
