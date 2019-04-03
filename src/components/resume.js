import React, {Component} from 'react';
import{Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from'./experience';
import Skills from './skills';
import Photo from '../imagejpeg_0.jpg';


  
 

class Resume extends Component{
    render(){
        return(
            <div className="resume-grid"> 
                <Grid>
                <Cell col={4} >
                    <div style={{textAlign: 'center'}}>

                    <img src = {Photo}
                    alt = "avatar"
                    style={{height: '200px'}}
                    />

                    
                    
                   
                    </div>
                    <h2 style = {{ paddingTop:'2em'}}> David Rodriguez </h2>
                    <h2 style = {{ color:'grey'}}> Programmer </h2>
                    <hr style = {{BorderTop: ' 3px solid #833fb2', width: '50%'}}/>
                    Hello, my name is David Rodriguez I am a twenty-one year old Hispanic Male. I was born in San Jose, CA, then my family moved to the central Valley, Visalia, CA, when I was eight years old. Never really thought I would get into coding or cared to. After graduating high school I knew something had to change. Freshmen and Sophomore years of college were mostly me finding myself, really still not knowing what I wanted to do. Nonetheless, I went from a computer science major, to a criminology major, to a music major,I play the cello and the piano, and finally back to computer science. I would say I found true happiness in 2018. What made me find this was finally doing what I really wanted to be doing everyday which is going to class, the gym, coding projects that I have always wanted to make, and writing music while still making time to hang out with my friends and family. I found out computer science was for me sophomore year during my introduction to computer science class. What happened was I took it not knowing anything about coding so it was very challenging, but fun which made me motivated to keep trying to get better and better at coding while also understanding concepts. Never had I struggled in a class so much, to the point where I had to study like crazy to pass with a B, not even an A. Even with only a B I felt so accomplished knowing that I had passed my intro to computer science class. This feeling is similar to the one I get when my program has a bug that I can not seem to figure out for hours sometimes then I finally am able to fix it, then my program finally runs. I love that feeling. It is such drastic change in mind state when going from completely stressed because your code will not run and finally running it and knowing that all that hard work was for something.
                    <hr style = {{BorderTop: ' 3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p> 2120 S Crenshaw Ct,Visalia CA 93277</p>
                    <h5> phone: </h5>
                    <p> (559)-740-6369 </p>
                    <h5> email</h5>
                    <p> purpenokid@mail.fresnostate.edu</p>
                    <h5> web</h5>
                    <p>MyWebsite.com</p>
                    <hr style = {{BorderTop: ' 3px solid #833fb2', width: '50%'}}/>

                    </Cell>

                <Cell className="resume-right-col" col={8}>
                    <h2> Education</h2>


                    <Education
                   
                    
                    endYear={"2015 through 2020"}
                    schoolName= "Fresno State University"
                    schoolDescription= "California State University—Fresno is a public institution that was founded in 1911. It has a total undergraduate enrollment of 22,221, its setting is urban, and the campus size is 363 acres. It utilizes a semester-based academic calendar. "
                    
                    />

                    
                    

                    <hr style={{orderTop:'3px solid #e22947'}} />
                    <h2>Experience</h2>
                    
                    <Experience
                    startYear={2018}
                    endYear= "Concurrent"
                    jobName="MeatHeadMovers"
                    jobDescription= "My job as a meathead mover is to move people in and out of their homes while maintaining good communication and keeping their move as stress free as possible. "
                    
                    />

                    <Experience
                    startYear={2018}
                    endYear= "Concurrent"
                    jobName="DoorDash"
                    jobDescription= "I am a Dasher at doordash delivering food as quickly and effeciently as possible while trying to break as little laws as possible. "
                    
                    />

                    <h2>Skills</h2>

                    <Skills
                    skill = "Haskell"
                    progress ={20}
                    />

                    <Skills
                    skill = "Java Script"
                    progress ={25}
                    />

                    <Skills
                    skill = "Python"
                    progress ={40}
                    />

                    <Skills
                    skill = "Bootstrap"
                    progress ={50}
                    />

                    
                    <Skills
                    skill = "React Native"
                    progress ={50}
                    />

                    <Skills
                    skill = "C++"
                    progress ={60}
                    />
                    
                    <Skills
                    skill = "Communication"
                    progress ={75}
                    />

                    
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;