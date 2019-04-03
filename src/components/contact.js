import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Photo from '../imagejpeg_0.jpg';


class Contact extends Component{
    render(){
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                <Cell col={6}> 
                <h2>David Rodriguez</h2>
                <img
                    src={Photo}
                alt="avatar"
                style={{height: '250px'}}
                />
                <p style = {{weight: 'bold'}}>Avalability</p>
                <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>  Monday 11am - 9pm | Tuesday 2pm - 10pm | Wednesday 1pm - 10pm | Thursday 2pm - 10pm | Friday 6pm - 10pm | Saturday 6pm - 10pm |       Sunday 6pm - 10pm  </p>

                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                <hr/>
                <div className="contact-list">


                <ListItem>
    <ListItemContent style= {{fontSize: '30px', fontFamily: 'Anton'}}>
        <i className="fa fa-phone-square" aria-hidden= "true"/>
            (559)-740-6369
        </ListItemContent>
  </ListItem>
                <ListItem>
  <ListItemContent style= {{fontSize: '30px', fontFamily: 'Anton'}}>
        <i className="fa fa-fax" aria-hidden= "true"/>
        (559)-740-6369
        </ListItemContent>
  </ListItem>
  
  <ListItem>
  <ListItemContent style= {{fontSize: '30px', fontFamily: 'Anton'}}>
        <i className="fa fa-envelope" aria-hidden= "true"/>
            davidrodriguez00100101@gmail.com
        </ListItemContent>
  </ListItem>

  <ListItem>
  <ListItemContent style= {{fontSize: '30px', fontFamily: 'Anton'}}>
        <i className="fa fa-skype" aria-hidden= "true"/>
            Purpenokid
        </ListItemContent>
  </ListItem>

                </div>
                <List>
  

                </List>
                </Cell>

                </Grid>
                </div>
                
        )
    }
}

export default Contact;