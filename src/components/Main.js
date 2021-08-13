import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessegeList from './MessageList';
import MessegeInputField from './MessageInputField';

const useStyles = makeStyles({
  root: {
    display:'grid',
    height:'100vh',
    gridTemplateRows:'1fr auto',
  },
});

const Main =({name})=>{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessegeList />
      <MessegeInputField name={name} />
    </div>
  )
};

export default Main;