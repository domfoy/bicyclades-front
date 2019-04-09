import React from 'react';
import * as Pixi from 'pixi.js';

import {
  MIN_HEIGHT,
  MIN_WIDTH
} from './constants';

export const pixiApp = new Pixi.Application({
  width: window.innerWidth < MIN_WIDTH ? MIN_WIDTH : window.innerWidth,
  height: window.innerHeight < MIN_HEIGHT ? MIN_HEIGHT : window.innerHeight
});

export const PixiAppContext = React.createContext(null);

export const PixiAppProvider = PixiAppContext.Provider;
export const PixiAppConsumer = PixiAppContext.Consumer;

export const withPixiApp = (BaseComponent) => {
  const wrapper = React.forwardRef((props, ref) => (
    <PixiAppConsumer>{app => <BaseComponent {...props} ref={ref} app={app} />}</PixiAppConsumer>
  ));
  wrapper.displayName = `withPixiApp(${BaseComponent.displayName || BaseComponent.name})`;
  return wrapper;
};
