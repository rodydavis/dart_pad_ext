define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/templates/ui/common/preview', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__templates__ui__common__preview, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const material = packages__flutter__material.src__material__material;
  const preview = packages__templates__ui__common__preview.ui__common__preview;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const screen = Object.create(dart.library);
  let BuildContextAndBoxConstraintsToMaterial = () => (BuildContextAndBoxConstraintsToMaterial = dart.constFn(dart.fnType(material.Material, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fullCode",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/templates/ui/home/screen.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/templates/ui/home/screen.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/templates/ui/home/screen.dart"
      });
    }
  });
  screen.HomeScreen = class HomeScreen extends framework.StatefulWidget {
    createState() {
      return new screen._HomeScreenState.new();
    }
  };
  (screen.HomeScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    screen.HomeScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = screen.HomeScreen.prototype;
  dart.addTypeTests(screen.HomeScreen);
  dart.setMethodSignature(screen.HomeScreen, () => ({
    __proto__: dart.getMethods(screen.HomeScreen.__proto__),
    createState: dart.fnType(screen._HomeScreenState, [])
  }));
  dart.setLibraryUri(screen.HomeScreen, "package:templates/ui/home/screen.dart");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C6;
  let C5;
  let C10;
  let C9;
  let C8;
  screen._HomeScreenState = class _HomeScreenState extends framework.State$(screen.HomeScreen) {
    initState() {
      this.fullCode = "import 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Draggable Custom Painter',\n      home: Scaffold(\n        body: DraggableCustomPainter(),\n      ),\n    );\n  }\n}\n\nclass DraggableCustomPainter extends StatefulWidget {\n  @override\n  _DraggableCustomPainterState createState() => _DraggableCustomPainterState();\n}\n\nclass _DraggableCustomPainterState extends State<DraggableCustomPainter> {\n  var xPos = 0.0;\n  var yPos = 0.0;\n  final width = 100.0;\n  final height = 100.0;\n  bool _dragging = false;\n\n  /// Is the point (x, y) inside the rect?\n  bool _insideRect(double x, double y) =>\n      x >= xPos && x <= xPos + width && y >= yPos && y <= yPos + height;\n\n  @override\n  Widget build(BuildContext context) {\n    return GestureDetector(\n      onPanStart: (details) => _dragging = _insideRect(\n        details.globalPosition.dx,\n        details.globalPosition.dy,\n      ),\n      onPanEnd: (details) {\n        _dragging = false;\n      },\n      onPanUpdate: (details) {\n        if (_dragging) {\n          setState(() {\n            xPos += details.delta.dx;\n            yPos += details.delta.dy;\n          });\n        }\n      },\n      child: Container(\n        child: CustomPaint(\n          painter: RectanglePainter(Rect.fromLTWH(xPos, yPos, width, height)),\n          child: Container(),\n        ),\n      ),\n    );\n  }\n}\n\nclass RectanglePainter extends CustomPainter {\n  RectanglePainter(this.rect);\n  final Rect rect;\n\n  @override\n  void paint(Canvas canvas, Size size) {\n    canvas.drawRect(rect, Paint());\n  }\n\n  @override\n  bool shouldRepaint(CustomPainter oldDelegate) => true;\n}\n\n\n";
      super.initState();
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, dimens) => new material.Material.new({child: new preview.FlutterWebPreview.new({fullCode: this.fullCode, width: dimens.maxWidth, height: dimens.maxHeight, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), BuildContextAndBoxConstraintsToMaterial()), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (screen._HomeScreenState.new = function() {
    this.fullCode = null;
    screen._HomeScreenState.__proto__.new.call(this);
    ;
  }).prototype = screen._HomeScreenState.prototype;
  dart.addTypeTests(screen._HomeScreenState);
  dart.setMethodSignature(screen._HomeScreenState, () => ({
    __proto__: dart.getMethods(screen._HomeScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(screen._HomeScreenState, "package:templates/ui/home/screen.dart");
  dart.setFieldSignature(screen._HomeScreenState, () => ({
    __proto__: dart.getFields(screen._HomeScreenState.__proto__),
    fullCode: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/templates/ui/home/screen", {
    "package:templates/ui/home/screen.dart": screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMoC;IAAkB;;;;;;EACtD;;;;;;;;;;;;;;;;;;;;;;;;;AAiFG,MA3EC,gBAAW;AA4EM,MAAX;IACR;UAG0B;AACxB,YAAO,gDACI,SAAC,SAAS,WAAW,kCACnB,6CACC,sBACH,AAAO,MAAD,mBACL,AAAO,MAAD;IAGpB;;;IA5FO;;;EA6FT","file":"screen.ddc.js"}');
  // Exports:
  return {
    ui__home__screen: screen
  };
});

//# sourceMappingURL=screen.ddc.js.map
