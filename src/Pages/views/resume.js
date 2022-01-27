import React from "react";
import {Grid,Box ,Typography} from '@material-ui/core'
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function  Resume({user, bio}) {
    const classes = useStyles();
    
    function FormRow() {
        return (
          <React.Fragment>


            <Grid item xs={12}  >
            
        <Box fontWeight="fontWeightLight" m={2} >
                <Typography variant="h5" color="primary" component="p" >
                EDUCATIONAL EXPERIENCES
                </Typography>
            </Box>  
    
    < Fade left>
    <Box   fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
        Master Degree
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       sfshgjgkkl;  ahgkhh khkchsvhl
        </Typography>
        <Typography variant="body2" component="p">
       bhckj  jklcdjjljdcsvk
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
    </Fade>
      <Fade left>
        <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
      <Typography variant="h5" component="h2">
        Master Degree
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       sfshgjgkkl;  ahgkhh khkchsvhl
        </Typography>
        <Typography variant="body2" component="p">
       bhckj  jklcdjjljdcsvk
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
    </Fade>
    <Fade left>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
      <Typography variant="h5" component="h2">
        Master Degree
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       sfshgjgkkl;  ahgkhh khkchsvhl
        </Typography>
        <Typography variant="body2" component="p">
       bhckj  jklcdjjljdcsvk
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
    </Fade>
    <Fade left>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
      <Typography variant="h5" component="h2">
        Master Degree
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
       sfshgjgkkl;  ahgkhh khkchsvhl
        </Typography>
        <Typography variant="body2" component="p">
       bhckj  jklcdjjljdcsvk
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
            </Fade>
            
        </Grid>
          </React.Fragment>
        );
      }
 
      function FormRowTwo() {
        return (
          <React.Fragment>
            <Grid item xs={12}  >
            
        <Box fontWeight="fontWeightLight" m={2} >
                <Typography variant="h5" color="primary" component="p" >
                WORKING EXPERIENCES
                </Typography>
            </Box>  
    
            < Fade right>
    <Box   fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
       Designer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Jan 2015 - Dec 2017

        </Typography>
        <Typography variant="body2" component="p">
        Uniquely incentivize process-centric systems for reliable market. Authoritatively scale next generation collaboration. Globally morph 24/365 e-commerce.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
            
            </Fade>
            < Fade right>
        <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
      <Typography variant="h5" component="h2">
       Designer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Jan 2015 - Dec 2017

        </Typography>
        <Typography variant="body2" component="p">
        Uniquely incentivize process-centric systems for reliable market. Authoritatively scale next generation collaboration. Globally morph 24/365 e-commerce.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
           </Fade>
           < Fade right>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
      <Typography variant="h5" component="h2">
       Designer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Jan 2015 - Dec 2017

        </Typography>
        <Typography variant="body2" component="p">
        Uniquely incentivize process-centric systems for reliable market. Authoritatively scale next generation collaboration. Globally morph 24/365 e-commerce.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
            </Fade>
            < Fade right>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
      <Typography variant="h5" component="h2">
       Designer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Jan 2015 - Dec 2017

        </Typography>
        <Typography variant="body2" component="p">
        Uniquely incentivize process-centric systems for reliable market. Authoritatively scale next generation collaboration. Globally morph 24/365 e-commerce.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
           </Fade>
            
        </Grid>
          </React.Fragment>
        );
      }

 
 return (<div  >
     <Fade right>
        
      <Grid  
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
          <Grid >
        
                <Box fontWeight="fontWeightLight" m={3} >      
                     <Typography   variant="h2"  component="p" color="primary" >
                           HEY!!
                    </Typography>
                </Box>
                </Grid>
                <Grid>
                <Box fontWeight="fontWeightLight" m={4} >      
                <Typography variant="h6" color="textSecondary" component="p"  >
                I hope it will help you for our Friendship.
                </Typography>
                </Box>
               
           </Grid>
        </Grid>
    </Fade>
    <Grid container spacing={6}>
        
      
       

        <Grid container item xs={6}  spacing={2}>
         
          <FormRow></FormRow>
        </Grid>
        
        
        <Grid  container item  xs={6} spacing={2}  >
         
         <FormRowTwo> </FormRowTwo>
          
        </Grid>
        
        
       
      </Grid>
  </div>
     )
};
