import React from "react";
import "./begin.css";
import {Grid,Box ,Typography} from '@material-ui/core'

export default function  BackgroundImagePage() {
  return (
  <div className="bg" >
      <div  className ="centered">   
      <Grid  
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
          <Grid >
            <Box >      
            <Typography   variant="h2"  component="p" >
              WEB DESIGN 
              </Typography>
            </Box>
           </Grid>
      </Grid>
      </div> 
    </div>
    )
};
