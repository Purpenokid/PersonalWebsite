import React, {Component} from 'react';
import{ Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
toggleCategories(){

    if(this.state.activeTab === 0){
        return(
            <div className= "projects-grid">
            <Card shadow={0} style={{minWidth:'512', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >React Project </CardTitle>
              
                <CardText>
                    My Website
                    </CardText>

                    <CardActions border>
    
                    <form target="_blank"  action="https://github.com/Purpenokid/PersonalWebsite">
                    <Button colored >Github</Button>
                    </form>

                   
                    <Button colored href='/main'>Live Demo</Button>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
            </Card>

            <Card shadow={0} style={{minWidth:'512', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >React Project </CardTitle>
              
                <CardText>
                    Tic Tac Toe
                    </CardText>

                    <CardActions border>
                        <form target="_blank"  action="https://github.com/Purpenokid/React_TicTacToe">
                    <Button colored >Github</Button>
                    </form>

                    <form target="_blank"  action = "https://codepen.io/Purpenokid/pen/MLGEaz">
                    <Button colored >Code Pen</Button>
                    </form>
            
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
            </Card>

            <Card shadow={0} style={{minWidth:'512', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >React Project </CardTitle>
              
                <CardText>
                   N/A
                    </CardText>

                    <CardActions border>
                        <form>
                    <Button colored >Github</Button>
                    
                    <Button colored >Code Pen</Button>
                    </form>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
            </Card>
            </div> 
        )

    } else if(this.state.activeTab ===1){

        return(
        <div className= "projects-grid">
            <Card shadow={0} style={{minWidth:'512', margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(http://ecx.images-amazon.com/images/I/51eDwv7tCtL._SL500_.jpg) center / cover'}} 
                >Algorithms Project 
                </CardTitle>
              
                <CardText>
                Summary
                    </CardText>

                    <CardActions border>
                        <form target = "_blank" action = " https://github.com/Purpenokid/Algorithms_Project_cpp">
                    <Button colored >Github</Button>
                    </form>
                    <form target= "_blank" action= " cpp.sh/9amwt">
                    <Button colored >C++ Shell</Button>
                    </form>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
            </Card>
            </div>
        )
    } else if (this.state.activeTab ===2){
        return(
            <div><h1>Meme</h1></div>
            )
    }

}
    

    render(){
        return(
            <div className="category-tabs">
<Tabs activeTab={this.state.activeTab} onChange= {(tabId)=> this.setState({activeTab: tabId})}ripple>
    
    <Tab>React</Tab>
    <Tab>Algorithms Project</Tab>
    
</Tabs>


    <Grid>
        <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
            </Cell>
        </Grid>
    
   
            </div>
        )
    }
}

export default Project;