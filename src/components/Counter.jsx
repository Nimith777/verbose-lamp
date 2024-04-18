import { Button, Icon, Typography } from '@mui/material'
import React, { useState } from 'react'
//import { purple } from '@mui/material/colors';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
const Counter = () => {
    var [count,setCount] = useState(0)
    const changeCount1 =()=>{
        console.log("btn clicked")
        setCount(count=count+1)
    }
    const changeCount2 =()=>{
        console.log("btn clicked")
        setCount(count=count-1)
    }
  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h3'>{count}</Typography>
      <br/>
      <Button onClick={changeCount1}><ArrowUpwardTwoToneIcon></ArrowUpwardTwoToneIcon></Button>
      <Button onClick={changeCount2}><ArrowDownwardTwoToneIcon></ArrowDownwardTwoToneIcon></Button>
    </div>
  )
}

export default Counter
