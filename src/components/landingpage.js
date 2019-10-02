import React, {Component} from 'react';
import{Grid, Cell} from 'react-mdl';
import Photo from '../imagejpeg_0.jpg';
class Landing extends Component{
    render(){
        return(
            
            <div  style = {{width: '100%', height: '100%', margin:'fixed', overflow:'hidden'}}> 
            
                <Grid className = "landing-grid">
                    <Cell col = {12}>
                        
                    <img src = {Photo}
                    alt = "avatar"
                    style={{height: '300px'}}
                    />

                        <div className="banner-text">
                            <h1>
                                Full Stack Web Developer
                            </h1>
                            <hr/>
                            <p className= " landing-Html"> HTML/CSS | Bootstrap | JavaScript | React | React Native | C++ | Python | Haskell | Mongo DB | Firebase</p>
                            <div className = "social-links">

                                {/* LinkedIn*/}
                                <a href= "https://www.linkedin.com/in/david-rodriguez00100101/" rel="noopener noreferrer"  target="_blank">
                                <i className = "fa fa-linkedin-square" aria-hidden= "true"/>
                                </a>

                                {/* github*/}
                                <a href= "https://github.com/Purpenokid?tab=repositories" rel="noopener noreferrer"  target="_blank">
                                <i className = "fa fa-github-square" aria-hidden= "true"/>

                                {/* Freecodecamp*/}
                                <a href= "https://www.freecodecamp.org/" rel="noopener noreferrer"  target="_blank">
                                <i className = "fa fa-free-code-camp" aria-hidden= "true"/>

                                {/* Youtube*/}
                                <a href= "https://www.youtube.com/channel/UC-40sorwXgpWR9oGS5PE9JQ?view_as=subscriber" rel="noopener noreferrer"  target="_blank">
                                <i className = "fa fa-youtube-square" aria-hidden= "true"/>
                                </a>
                                </a>
                                </a>

                                </div>
                        </div>

                     </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;