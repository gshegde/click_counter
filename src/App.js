import React, { useState } from 'react';
import styles from './App.module.css';
import { Typography, Box } from '@material-ui/core';
const App = () => {
  const [getCount, setCount] = useState(0);
  const clickHandler = () => setCount(getCount + 1);
  return (

    <div>
      <Box display="flex" flexDirection="column" alignContent="center" alignItems="center" boxShadow={6} style={{
        width: "200px ",
        height: "200px",
        marginLeft: "600px",
        marginTop: "50px",
        borderRadius: 6,
        boxshadow: "5px 10px"

      }}>

        <h2> {getCount} </h2>
        <p onClick={clickHandler}>Click here to increment</p>

      </Box>
    </div >

  )
}



export default App;
