import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// Import actions
import actions from './actions';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          {this.props.number.value}
        </p>

        <input 
          type="button" 
          value="INCREMENT"
          onClick={() => this.props.increment()} 
        />
      </div>
    );
  }
}


// Bind the numberState to this view (via this.props.{number})
const mapStateToProps = state => {
  return { number: state.number }
}

// Bind the increment action to this view (via this.props.{increment})
const mapDispatchToProps = dispatch => ({
  increment: value => dispatch(actions.increment(value)),
})

// Connect to Redux store through 'react-redux' api
export default connect(mapStateToProps, mapDispatchToProps)(App);
