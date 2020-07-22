// @ts-nocheck
import { ApplyPluginsType } from 'C:/Users/crw/AppData/Local/Yarn/Data/global/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/Child",
    "exact": true,
    "component": require('@/pages/Child.js').default
  },
  {
    "path": "/Father",
    "exact": true,
    "component": require('@/pages/Father.js').default
  },
  {
    "path": "/users/users",
    "exact": true,
    "component": require('@/pages/users/users.js').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
