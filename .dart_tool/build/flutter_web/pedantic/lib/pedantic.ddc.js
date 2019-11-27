define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pedantic = Object.create(dart.library);
  const CT = Object.create(null);
  pedantic.unawaited = function unawaited(future) {
  };
  dart.trackLibraries("packages/pedantic/pedantic", {
    "package:pedantic/pedantic.dart": pedantic
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pedantic.dart"],"names":[],"mappings":";;;;;;;0CAwB4B;EAAS","file":"pedantic.ddc.js"}');
  // Exports:
  return {
    pedantic: pedantic
  };
});

//# sourceMappingURL=pedantic.ddc.js.map
