import React, {Component} from 'react';

import Grid from '../grid';

class MainBoard extends Component {
  render() {
    const gridWidth = this.props.width * 2 / 3;
    return (
      <div>
        <Grid
          x={this.props.x + (this.props.width - gridWidth) / 2}
          y={0}
          width={gridWidth}
          height={this.props.height}
        />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.padding = 20;
    const {x, y, width, height} = props;
  }
}

export default MainBoard;
