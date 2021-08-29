import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    cards: state.cards,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const HomePage = () => {
      return(
          <Home
              card={this.props.cards.filter((card) => card.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/aboutus" component={() => <About leaders ={this.props.leaders}/>} />
          <Route exact path="/contactus" component={Contact}/> 
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>   
    );

  }
}

export default withRouter(connect(mapStateToProps)(Main));