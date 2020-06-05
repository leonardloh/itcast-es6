// @ts-nocheck
import { ApplyPluginsType } from 'C:/Users/LohJZ/AppData/Local/Yarn/Data/global/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/decorator",
    "exact": true,
    "component": require('@/pages/decorator.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
