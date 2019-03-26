import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './App.css';
import AsideBoard from './aside-board';
import MainBoard from './main-board';

class App extends Component {
  componentWillUnmount() {
    const {app} = this.props;
    app.stop();
  }

  initGameCanvas = (rawDiv) => {
    const {app} = this.props;
    this.gameCanvas = rawDiv;
    this.gameCanvas.appendChild(app.view);
    app.renderer.backgroundColor = 0x014055;
    app.renderer.antialias = true;
    app.start();
  }

  render() {
    const {app} = this.props;
    return (
      <div className="App" ref={this.initGameCanvas}>
        <AsideBoard
          x={0}
          y={0}
          width={app.screen.width / 3}
          height={app.screen.height}
        />
        <MainBoard
          x={app.screen.width / 3}
          y={0}
          width={app.screen.width * (2 / 3)}
          height={app.screen.height}
        />
      </div>
    );
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps)(App);
