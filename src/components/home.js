import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="home-page">
                    <Cell col={12}>
                        <img src="images/Profile.jpg"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | ASP.NET | Sql Server | MongoDB</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/ashik-ashrafe/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Twitter */}
                                <a href="https://twitter.com/a_ashrafe71" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" target="_blank" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/ashik71" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Home;