import { CardContent, Typography, Card } from '@mui/material'
import React, { forwardRef } from 'react'
import './Messages.css'

const Message = forwardRef(({ message, username }, ref) =>{
    const isUser = username === message.username;
  
    return (
 <div ref={ref} className={`message ${isUser && 'message_user'}`} >
 <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
            <Typography 
            color="Black" 
            variant="h5" 
            component="h2"  >

{!isUser && `${message.username || 'Unknow User'}:`} {message.message}
            </Typography>
            </CardContent>
        </Card>
 </div>
       
    
       


  )
      
})

export default Message