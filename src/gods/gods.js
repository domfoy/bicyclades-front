import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as Pixi from 'pixi.js';

import {withPixiApp} from '../context';

import GodCard from './god';

class Gods extends Component {
  constructor(props) {
    super(props);

    const {app} = this.props;
    const asideContainer = app.stage
      .getChildByName('asideContainer');

    const godsContainer = new Pixi.Container();
    godsContainer.name = 'godsContainer';
    godsContainer.x = props.x;
    godsContainer.y = props.y;
    asideContainer.addChild(godsContainer);
  }

  render() {
    const {gods, height, width} = this.props;
    return (
      <div>
        {gods.map((god, id) => {
          const godId = id + 1;
          return (
            <GodCard
              god={god}
              height={height / 5}
              id={godId}
              key={godId.toString()}
              width={width}
              x={0}
              y={(height / 5) * (godId - 1)}
            />
          );
        })}
      </div>
    );
  }
}
Gods.propTypes = {
  app: PropTypes.object.isRequired,
  gods: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  gods: state.gods
});

export default connect(mapStateToProps)(withPixiApp(Gods));
