import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import AsideBoard from './aside-board';
import MainBoard from './main-board';

class App extends Component {
  render() {
    return (
      <div className="App" ref={this.initGameCanvas}>
        <AsideBoard
          x={0}
          y={0}
          width={this.props.app.screen.width / 3}
          height={this.props.app.screen.height}
        />
        <MainBoard
          x={this.props.app.screen.width / 3}
          y={0}
          width={this.props.app.screen.width * (2 / 3)}
          height={this.props.app.screen.height}
        />
      </div>
    );
  }

  initGameCanvas = (rawDiv) => {
    const app = this.props.app;
    this.gameCanvas = rawDiv;
    this.gameCanvas.appendChild(app.view);
    app.renderer.backgroundColor = 0x014055;
    app.renderer.antialias = true;
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
