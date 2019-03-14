import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import AsideBoard from './aside-board';
import MainBoard from './main-board';

class App extends Component {
  render() {
    return (
      <div className="App" ref={this.initGameCanvas}>
        <AsideBoard />
        <MainBoard />
      </div>
    );
  }

  initGameCanvas = (rawDiv) => {
    this.gameCanvas = rawDiv;
  }

  componentDidMount() {
    const app = this.props.app;

    this.gameCanvas.appendChild(app.view);
    app.renderer.backgroundColor = 0x061639;
    app.start();
  }

  componentWillUnmount() {
    this.props.app.stop();
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps)(App);
