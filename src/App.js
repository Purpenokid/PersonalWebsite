import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import{Link, Redirect, Route, Switch, Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Route>
          <div  >
          <Layout >
              <Header  className="header-color" title= {<Link style={{textDecoration: ' none', color:'white' }} 
              to="/"> Home</Link>}>
                  <Navigation className= "real-Bar"> 
                      <Link to="/"> Home</Link>
                      <Link to= "/resume">Resume</Link>
                      <Link to = "/project">Projects</Link>
                      <Link to = "/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer  title= {<Link style={{textDecoration: ' none', color:'black'}} 
              to="/">Home</Link>}>
                  <Navigation> 
                  <Link to= "/resume">Resume</Link>
                      <Link to = "/project">Project</Link>
                      <Link to = "/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <div className= "page-content"/>
                <Main/>
              </Content>
          </Layout>
          <Switch>
            <Redirect from="/PersonalWebsite" to="/"></Redirect>
          </Switch>
      </div>
</Route>
    );
  }
}

export default App;