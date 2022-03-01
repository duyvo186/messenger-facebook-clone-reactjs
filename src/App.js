import React, {useEffect, useState} from 'react';
import './App.css';

import {Button, FormControl, InputLabel, FormHelperText, Input } from '@mui/material';
import Message  from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

function App() {
  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([{username: 'sonny', message: 'heyguys'}, {username: 'duy', message: 'no'}]);
 const [username, setUsername] = useState('');
 
 // useEffect = run code on a condition in REACT
 // useState = varible in React
useEffect(() =>{
// run once when the app component loads
db.collection('messages')
.orderBy('timestamp', 'desc')
.onSnapshot(snapshot =>{
setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data() }) ))

})

},[])
 useEffect(()=> {
//const name = prompt('please enter your name');
setUsername(prompt('please enter your name'))
 }, [])//condition

  
  const sendMessage = (event) =>{
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // all the logic to send a message goes
    
    setInput('');
  
  }
 
  return (
    
    <div className="App">
   <img  class="img-messenger" src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=6825c5&amp;_nc_ohc=_3slScX9g50AX_A1p--&amp;_nc_ht=scontent.fsgn13-2.fna&amp;oh=00_AT8wwxfSIvrsVCLd1cuLSH6DlTILj1E3xyB9fbcPzm-1Yw&amp;oe=62228E3D" alt="Messenger"/>
    <h1 className="main-text">Tụ họp
mọi lúc, mọi nơi </h1>
    <h2>Welcome {username} </h2>
    <form className="app_form">
<FormControl className="app_formControl"> 
  
  <Input className="app_input" placeholder='Điền tin nhắn...' value={input} onChange={event => setInput(event.target.value)} />
<IconButton className="app_iconButton" disabled={!input}  variant="contained" color="primary"type='submit' onClick={sendMessage} >
<SendIcon/>
</IconButton>

  
</FormControl>
    </form>
    <FlipMove>
    {
      messages.map(({id, message}) => (
        <Message key={id} username={username} message={message}/>
          // <p>{message}</p>
      ))
    }
    
    </FlipMove>
  
    </div>
 
  );
}

export default App;
