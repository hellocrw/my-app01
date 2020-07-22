// @ts-nocheck
import { Plugin } from 'C:/Users/crw/AppData/Local/Yarn/Data/global/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange',],
});
plugin.register({
  apply: require('D:/ly/temp/my-app01/src/app.js'),
  path: 'D:/ly/temp/my-app01/src/app.js',
});

export { plugin };
