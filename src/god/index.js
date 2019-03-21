import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Pixi from 'pixi.js';

import GodCard from './god';

class Gods extends Component {
  render() {
    return (
      <div>
        {this.props.gods.map(god => <GodCard
          key={god.id.toString()}
          id={god.id}
          x={0}
          y={(this.props.height / 5) * (god.id - 1)}
          width={this.props.width}
          height={this.props.height / 5}
          />)
        }
      </div>
    )
  }

  constructor(props) {
    super(props);

    const app = this.props.app;
    const asideContainer = app.stage
      .getChildByName('asideContainer');

    const godsContainer = new Pixi.Container();
    godsContainer.name = 'godsContainer';
    godsContainer.x = props.x;
    godsContainer.y = props.y;
    asideContainer.addChild(godsContainer);
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    gods: state.gods
  }
}

export default connect(mapStateToProps)(Gods);
