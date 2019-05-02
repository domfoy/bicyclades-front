import React, {Component} from 'react';

import {PixiAppContext} from './context';
import './App.css';
import AsideBoard from './aside-board';
import MainBoard from './main-board';

class App extends Component {
  componentWillUnmount() {
    const app = this.context;
    app.stop();
  }

  initGameCanvas = (rawDiv) => {
    const app = this.context;
    this.gameCanvas = rawDiv;
    this.gameCanvas.appendChild(app.view);
    app.renderer.backgroundColor = 0x014055;
    app.renderer.antialias = true;
    app.start();
  }

  render() {
    const app = this.context;
    return (
      <div className="App" ref={this.initGameCanvas}>
        <AsideBoard
          x={0}
          y={0}
          width={app.screen.width / 3}
          height={app.screen.height - 100}
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

App.contextType = PixiAppContext;

export default App;
