// apps/mobile/metro.config.js

const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../../');

const config = getDefaultConfig(projectRoot);

// Watch the monorepo root for workspace changes
config.watchFolders = [workspaceRoot];

// Block transformation of root node_modules (not needed with Yarn classic, but safe)
config.resolver.blockList = exclusionList([
  new RegExp(`${workspaceRoot}/apps/web/node_modules/.*`), // block other apps' node_modules
  new RegExp(`${workspaceRoot}/apps/mobile/node_modules/.*`), // block self's node_modules (since it's empty)
]);

// All node_modules come from the monorepo root (Yarn hoists everything here!)
config.resolver.nodeModulesPaths = [
  path.resolve(workspaceRoot, 'node_modules'),
];

// Map shared packages (add more as needed)
config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => {
      if (name === '@ui') {
        return path.join(workspaceRoot, 'packages/ui');
      }
      // All other modules are resolved from the hoisted root node_modules
      return path.join(workspaceRoot, 'node_modules', name);
    }
  }
);

module.exports = config;
