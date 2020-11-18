import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.mehdi.simple',
  appResourcesPath: 'App_Resources',
  webpackConfigPath: 'webpack.config.js',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;