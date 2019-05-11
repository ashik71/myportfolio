import React, {Component} from 'react';

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Md Ashik Ashrafe</h2>
            <img
              src="images/Profile.jpg"
              alt="avatar"
              style={{height: '250px',borderRadius:'2%'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             proactive self-starter who easily adapts into new environments.
             To succeed in an environment of growth and excellence. earn a job which provides
             me job Satisfaction and self-development and helps me to achieve personal as well as organization goals.
             </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>                    
                    /ashik-ashrafe
                  </ListItemContent>
                </ListItem>               
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    a.ashrafe71@gmail.com
                  </ListItemContent>
                </ListItem>               
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;