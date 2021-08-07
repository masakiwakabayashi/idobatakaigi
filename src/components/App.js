import React, {useState} from 'react';

import SignIn from './SignIn';

export default () => {
  // setNameでnameが更新される
  const [name,setName] = useState('');
  console.log({name});

  return <SignIn setName={setName}/>;
};
