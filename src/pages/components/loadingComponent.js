import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
  },
  icon: {
    margin: '5px',
  },
}))
function LoadingComponent() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <CircularProgress className={classes.icon} />
      <Typography variant="h5">Загрузка...</Typography>
    </div>
  )
}

export default LoadingComponent;
