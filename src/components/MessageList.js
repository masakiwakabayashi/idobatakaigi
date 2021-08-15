import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
  root: {
    gridRow:1,
  },
});

const MessegeList = () =>{
  const classes = useStyles();
  return <div className={classes.root}>MessageList</div>;
};

export default MessegeList;