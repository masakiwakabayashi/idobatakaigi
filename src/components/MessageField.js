import React from 'react';
import { TextField } from '@material-ui/core';
import { useState } from 'react';

const MessageField = ({name,setText,text})=>{
  const [ isComposed, setISComposed] = useState(false);
  console.log({text});


  return <TextField 
  fullWidth={true} 
  onChange={(e)=>{
    setText(e.target.value);
  }}
  onKeyDown={(e)=>{
    if(isComposed) return;

    // エンターキーを押した時にコンソールに出してるのはこれ
    // e.keyで押したキーを取っている
    // console.log({key:e.key});
    const text = e.target.value;
    if(text == '') return;

    if(e.key === 'Enter'){
      console.log('push message to firebase');
      setText('');
      // エンターで発生するイベントをキャンセルしている
      e.preventDefault();
    }
  }}
  onCompositionStart={()=>{setISComposed(true)}}
  onCompositionEnd={()=>{setISComposed(false)}}
  value={text}
  />
};





export default MessageField;