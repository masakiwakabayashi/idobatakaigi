import React, {useState} from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json'
console.log({ config });

export default () => {
  // setNameでnameが更新される
  const [name,setName] = useState('');
  console.log({name});

  if(config.signInEnabled && name === ''){
    return <SignIn setName={setName}/>
  }else{
    return <Main name={name}/>;
  }
};
