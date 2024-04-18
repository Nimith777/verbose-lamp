import { Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName]=useState("Goku");
    const changeName = ()=>{
        console.log("Button clicked");
        setInput("Vegeta");
    }
  return (
    <div>
        <Typography variant='h3'>My name is {name}</Typography>
        <Button variant='contained' onclick={changeName}>CHANGE NAME</Button>
    </div>
  )
}

export default StateBasics
