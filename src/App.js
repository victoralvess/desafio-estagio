import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'react-emotion';

// Core components
import StatesList from './components/States/List';
import CitiesList from './components/Cities/List';
// Layout components
import TitleBar from './components/Layout/Header/TitleBar';
import Menu from './components/Layout/Header/Menu';
import Title from './components/Layout/Title';
import Grid from './components/Layout/Grid';
import LoaderPage from './components/Layout/LoaderPage';
// Assets
import hamburger from './assets/hamburger.svg';
import select from './assets/select.svg';

const Main = styled('div')``;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listVisibility: false
    }

    this.toggleList = this.toggleList.bind(this);
  }

  // Shows or hides the side menu on small screens
  toggleList() {
    this.setState(prevState => ({
      listVisibility: !prevState.listVisibility
    }));
  }

  render() {
    return (
      <Router>
        <div>
          {/* Bar at the top that holds the hamburger menu and the title */}
          <TitleBar>
            <Menu src={hamburger} onClick={this.toggleList}/>
            <Title>Desafio Estágio</Title>
          </TitleBar>
          {/* The main content goes here */}
          <Main>
            {/* Grid with 2 columns and 1 row */}
            <Grid>
              {/* This is the list of states */}
              <StatesList visible={this.state.listVisibility}/>
              {/* Either renders a list of cities or a loader */}
							<Switch>
		            <Route
		              path={`/cities/:stateId`}
		              render={
		                  props => (
		                    <CitiesList
		                      {...props}
                          pointerEvents={!this.state.listVisibility}
                          onFetch={() => this.setState({listVisibility: false})} 
		                    />
		                  )
		                }
		            />
                {/* Loader of 1st access */}
								<Route render={_ => <LoaderPage icon={select}/>}/>
							</Switch>
            </Grid>
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;
