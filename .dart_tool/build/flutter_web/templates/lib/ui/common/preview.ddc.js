define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/templates/src/flutter/common', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__templates__src__flutter__common, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const ui = dart_sdk.ui;
  const _engine = dart_sdk._engine;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const platform_view = packages__flutter__src__widgets__actions.src__widgets__platform_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const dependencies = packages__templates__src__flutter__common.src__flutter__dependencies;
  const dartservices = packages__templates__src__flutter__common.src__flutter__dartservices;
  const common = packages__templates__src__flutter__common.src__flutter__common;
  const execution_iframe = packages__templates__src__flutter__common.src__iframe__execution_iframe;
  const execution = packages__templates__src__flutter__common.src__iframe__execution;
  const theme = packages__flutter__material.src__material__theme;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const preview = Object.create(dart.library);
  const $innerHtml = dartx.innerHtml;
  const $toInt = dartx.toInt;
  const $toString = dartx.toString;
  let CompileDDCResponseToString = () => (CompileDDCResponseToString = dart.constFn(dart.fnType(core.String, [dartservices.CompileDDCResponse])))();
  let dynamicAnddynamicToString = () => (dynamicAnddynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic, dart.dynamic])))();
  let intToIFrameElement = () => (intToIFrameElement = dart.constFn(dart.fnType(html.IFrameElement, [core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewType",
        [_Location_column]: 50,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/templates/ui/common/preview.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/templates/ui/common/preview.dart"
      });
    },
    get C7() {
      return C7 = dart.constList([], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/templates/ui/common/preview.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 20,
        [_Location_line]: 87,
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
        [_Location_column]: 13,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/templates/ui/common/preview.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/templates/ui/common/preview.dart"
      });
    }
  });
  const fullCode$ = dart.privateName(preview, "FlutterWebPreview.fullCode");
  const width$ = dart.privateName(preview, "FlutterWebPreview.width");
  const height$ = dart.privateName(preview, "FlutterWebPreview.height");
  preview.FlutterWebPreview = class FlutterWebPreview extends framework.StatefulWidget {
    get fullCode() {
      return this[fullCode$];
    }
    set fullCode(value) {
      super.fullCode = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    createState() {
      return new preview._FlutterWebPreviewState.new();
    }
  };
  (preview.FlutterWebPreview.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let fullCode = opts && 'fullCode' in opts ? opts.fullCode : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[fullCode$] = fullCode;
    this[width$] = width;
    this[height$] = height;
    preview.FlutterWebPreview.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = preview.FlutterWebPreview.prototype;
  dart.addTypeTests(preview.FlutterWebPreview);
  dart.setMethodSignature(preview.FlutterWebPreview, () => ({
    __proto__: dart.getMethods(preview.FlutterWebPreview.__proto__),
    createState: dart.fnType(preview._FlutterWebPreviewState, [])
  }));
  dart.setLibraryUri(preview.FlutterWebPreview, "package:templates/ui/common/preview.dart");
  dart.setFieldSignature(preview.FlutterWebPreview, () => ({
    __proto__: dart.getFields(preview.FlutterWebPreview.__proto__),
    fullCode: dart.finalFieldType(core.String),
    width: dart.finalFieldType(core.num),
    height: dart.finalFieldType(core.num)
  }));
  const _loaded = dart.privateName(preview, "_loaded");
  const _id = dart.privateName(preview, "_id");
  const _loadJsCode = dart.privateName(preview, "_loadJsCode");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C7;
  let C6;
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  preview._FlutterWebPreviewState = class _FlutterWebPreviewState extends framework.State$(preview.FlutterWebPreview) {
    get dartServices() {
      return dartservices.DartservicesApi._check(dependencies.deps._get(dart.wrapType(dartservices.DartservicesApi)));
    }
    [_loadJsCode](fullCode) {
      let t0;
      let input = (t0 = new dartservices.CompileRequest.new(), t0.source = fullCode, t0);
      return this.dartServices.compileDDC(input).timeout(common.longServiceCallTimeout).then(core.String, dart.fn(response => {
        this.executionSvc.execute("", "", response.result, {modulesBaseUrl: response.modulesBaseUrl});
        core.print("execution -> ddc-compile-success");
        return response.result;
      }, CompileDDCResponseToString())).catchError(dart.fn((e, st) => {
        core.print(st);
        core.print("execution -> ddc-compile-failure");
        return "";
      }, dynamicAnddynamicToString()));
    }
    initState() {
      this[_loadJsCode](this.widget.fullCode).then(core.Null, dart.fn(output => {
        let t0;
        let _iframe = html.IFrameElement.new();
        _iframe.src = "javascript:void(0);";
        _iframe[$innerHtml] = output;
        let isDarkMode = dart.equals(theme.Theme.of(this.context).brightness, ui.Brightness.dark);
        this.executionSvc = (t0 = new execution_iframe.ExecutionServiceIFrame.new(_iframe), t0.frameSrc = isDarkMode ? "../scripts/frame_dark.html" : "../scripts/frame.html", t0);
        _engine.platformViewRegistry.registerViewFactory(this[_id], dart.fn(viewId => {
          let t0;
          let element = (t0 = _iframe, t0.height = this.widget.height[$toInt]()[$toString](), t0.width = this.widget.width[$toInt]()[$toString](), t0);
          return element;
        }, intToIFrameElement()));
        if (dart.test(this.mounted)) this.setState(dart.fn(() => {
          this[_loaded] = true;
        }, VoidToNull()));
      }, StringToNull()));
      super.initState();
    }
    build(context) {
      let t0, t0$;
      return new basic.SizedBox.new({width: (t0 = this.widget, t0 == null ? null : t0.width), height: (t0$ = this.widget, t0$ == null ? null : t0$.height), child: dart.test(this[_loaded]) ? new basic.AbsorbPointer.new({child: new platform_view.HtmlElementView.new({viewType: this[_id], $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}) : new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
  };
  (preview._FlutterWebPreviewState.new = function() {
    this.executionSvc = null;
    this[_loaded] = false;
    this[_id] = "iframe-output";
    preview._FlutterWebPreviewState.__proto__.new.call(this);
    ;
  }).prototype = preview._FlutterWebPreviewState.prototype;
  dart.addTypeTests(preview._FlutterWebPreviewState);
  dart.setMethodSignature(preview._FlutterWebPreviewState, () => ({
    __proto__: dart.getMethods(preview._FlutterWebPreviewState.__proto__),
    [_loadJsCode]: dart.fnType(async.Future$(core.String), [core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(preview._FlutterWebPreviewState, () => ({
    __proto__: dart.getGetters(preview._FlutterWebPreviewState.__proto__),
    dartServices: dartservices.DartservicesApi
  }));
  dart.setLibraryUri(preview._FlutterWebPreviewState, "package:templates/ui/common/preview.dart");
  dart.setFieldSignature(preview._FlutterWebPreviewState, () => ({
    __proto__: dart.getFields(preview._FlutterWebPreviewState.__proto__),
    executionSvc: dart.fieldType(execution.ExecutionService),
    [_loaded]: dart.fieldType(core.bool),
    [_id]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/templates/ui/common/preview", {
    "package:templates/ui/common/preview.dart": preview
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["preview.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWe;;;;;;IACH;;;;;;IAAO;;;;;;;AASwB;IAAyB;;;QAN5D;QACW;QACA;QACA;;IAFA;IACA;IACA;AACZ,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMgB,iDAAA,AAAI,uBAAC;IAAgB;kBAGvB;;AAC5B,wBAAQ,uCAAkB,YAAS,QAAQ;AAE/C,YAAO,AACF,AACA,AACA,AASF,8BAXa,KAAK,UACR,iDACH,QAAoB;AAM3B,QALD,AAAa,0BACX,IACA,IACA,AAAS,QAAD,0BACQ,AAAS,QAAD;AAEe,QAAzC,WAAM;AACN,cAAO,AAAS,SAAD;mDACH,SAAC,GAAG;AAGP,QAAT,WAAM,EAAE;AACiC,QAAzC,WAAM;AACN,cAAO;;IAEX;;AAyBI,MAnBF,AAA6B,kBAAjB,AAAO,sCAAe,QAAC;;AAC3B,sBAAe;AACc,QAAnC,AAAQ,OAAD,OAAO;AACY,QAA1B,AAAQ,OAAD,eAAa,MAAM;AACpB,yBAA0C,YAAvB,AAAY,eAAT,0BAAkC;AAGW,QAFzE,0BAAe,gDAAuB,OAAO,GACzC,cACE,UAAU,GAAG,+BAA+B;AAOhD,QALC,AAAqB,iDAAoB,WAAK,QAAK;;AAC9C,8BAAU,OAAO,EACnB,YAAS,AAAO,AAAO,AAAQ,2CAC/B,WAAQ,AAAO,AAAM,AAAQ;AACjC,gBAAO,QAAO;;AAEhB,sBAAI,eACF,AAEE,cAFO;AACO,UAAd,gBAAU;;;AAGC,MAAX;IACR;UAG0B;;AACxB,YAAO,gEACE,OAAQ,qDACP,OAAQ,8BACT,iBACD,oCAAqB,iDAA0B,0HAC/C,6BAAc;IAExB;;;IA9DiB;IA0BZ,gBAAU;IACR,YAAM;;;EAoCf","file":"preview.ddc.js"}');
  // Exports:
  return {
    ui__common__preview: preview
  };
});

//# sourceMappingURL=preview.ddc.js.map
