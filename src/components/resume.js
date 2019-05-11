import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center'}}>
                            <img
                                src="images/Profile.jpg"
                                alt="profile"
                                style={{ height: '200px',borderRadius:'50%' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '1em',textTransform:'capitalize' }}>md ashik ashrafe</h2>
                        <h4 style={{ color: 'grey' }}>Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p  style={{ textTransform:'capitalize' }}>
                        proactive self-starter who easily adapts into new environments.
             To succeed in an environment of growth and excellence. earn a job which provides
             me job Satisfaction and self-development and helps me to achieve personal as well as organization goals.
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>a.ashrafe71@gmail.com</p>                                                
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2014}
                            endYear={2017}
                            schoolName="American International University-Bangladesh(AIUB)"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />                        
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />                       
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="ASP.NET"
                            progress={80}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                        <Skills
                            skill="javascript"
                            progress={50}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;