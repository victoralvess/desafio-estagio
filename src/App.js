import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'react-emotion';

import StatesList from './components/States/List';
import CitiesList from './components/Cities/List';

import TitleBar from './components/Layout/Header/TitleBar';
import Menu from './components/Layout/Header/Menu';
import Title from './components/Layout/Title';
import Grid from './components/Layout/Grid';

import hamburger from './assets/hamburger.svg';

const Main = styled('div')``;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listVisibility: false
    }

    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    this.setState(prevState => ({
      listVisibility: !prevState.listVisibility
    }));
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <TitleBar>
            <Menu src={hamburger} onClick={this.toggleList}/>
            <Title>Desafio Estágio</Title>
          </TitleBar>
          <Main>
            <Grid>
              <StatesList visible={this.state.listVisibility}/>
              <Route
                path={`/cities/:stateId`}
                render={
                    props => <CitiesList {...props} pointerEvents={!this.state.listVisibility}/>
                  }
              />
            </Grid>
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;
