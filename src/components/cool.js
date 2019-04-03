import React, { Component } from 'react';
import{Grid, Cell} from 'react-mdl';
class Cool extends Component{
    render(){
        return(
            <Grid>
            <Cell col= {4}>
                <p>{this.props.funStuff}</p>
            </Cell>
            <Cell col= {8}>
            <h4 style= {{marginTop:'0px'}}>{this.props.funName}</h4>
            <p>{this.props.meDescription}</p>

            </Cell>
                </Grid>
           
        )
    }
}

export default Cool;