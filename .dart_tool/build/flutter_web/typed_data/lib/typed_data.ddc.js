define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_data = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/typed_data/typed_data", {
    "package:typed_data/typed_data.dart": typed_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"typed_data.ddc.js"}');
  // Exports:
  return {
    typed_data: typed_data
  };
});

//# sourceMappingURL=typed_data.ddc.js.map
