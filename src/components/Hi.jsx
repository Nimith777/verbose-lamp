import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Hi = () => {
        var[name,setInput]=useState("Page")
        const addname = ()=>{
          console.log("Button clicked");
          setInput("Home");
        }
        

        const addname2 = ()=>{
          console.log("Button clicked");
          setInput("Gallery");
        }

        const addname3 = ()=>{
          console.log("Button clicked");
          setInput("Contact Us");
        }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h2'>Welcome to {name}</Typography>
        <br/>
        <br/><br/>
        <Button variant='contained' onClick={addname} color='primary'>HOME</Button>&nbsp;
        <Button variant='contained' onClick={addname2} color='secondary'>GALLERY</Button>&nbsp;
        <Button variant='contained' onClick={addname3} color='error'>CONTACT US</Button>
    </div>
  )
}

export default Hi
