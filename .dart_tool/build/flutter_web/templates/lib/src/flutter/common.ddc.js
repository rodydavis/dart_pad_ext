define(['dart_sdk', 'packages/_discoveryapis_commons/_discoveryapis_commons'], function(dart_sdk, packages___discoveryapis_commons___discoveryapis_commons) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const clients = packages___discoveryapis_commons___discoveryapis_commons.src__clients;
  const requests = packages___discoveryapis_commons___discoveryapis_commons.src__requests;
  const dependencies = Object.create(dart.library);
  const dartservices = Object.create(dart.library);
  const common = Object.create(dart.library);
  const execution = Object.create(dart.library);
  const execution_iframe = Object.create(dart.library);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $keys = dartx.keys;
  const $_equals = dartx._equals;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $cast = dartx.cast;
  const $codeUnits = dartx.codeUnits;
  const $length = dartx.length;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $trim = dartx.trim;
  const $addAll = dartx.addAll;
  const $contentWindow = dartx.contentWindow;
  const $postMessage = dartx.postMessage;
  const $parent = dartx.parent;
  const $clone = dartx.clone;
  const $children = dartx.children;
  const $indexOf = dartx.indexOf;
  const $insert = dartx.insert;
  const $remove = dartx.remove;
  let LinkedMapOfType$dynamic = () => (LinkedMapOfType$dynamic = dart.constFn(_js_helper.LinkedMap$(core.Type, dart.dynamic)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let LinkedMapOfString$ListOfString = () => (LinkedMapOfString$ListOfString = dart.constFn(_js_helper.LinkedMap$(core.String, ListOfString())))();
  let dynamicToAnalysisResults = () => (dynamicToAnalysisResults = dart.constFn(dart.fnType(dartservices.AnalysisResults, [dart.dynamic])))();
  let dynamicToAssistsResponse = () => (dynamicToAssistsResponse = dart.constFn(dart.fnType(dartservices.AssistsResponse, [dart.dynamic])))();
  let dynamicToCompileResponse = () => (dynamicToCompileResponse = dart.constFn(dart.fnType(dartservices.CompileResponse, [dart.dynamic])))();
  let dynamicToCompileDDCResponse = () => (dynamicToCompileDDCResponse = dart.constFn(dart.fnType(dartservices.CompileDDCResponse, [dart.dynamic])))();
  let dynamicToCompleteResponse = () => (dynamicToCompleteResponse = dart.constFn(dart.fnType(dartservices.CompleteResponse, [dart.dynamic])))();
  let dynamicToDocumentResponse = () => (dynamicToDocumentResponse = dart.constFn(dart.fnType(dartservices.DocumentResponse, [dart.dynamic])))();
  let dynamicToFixesResponse = () => (dynamicToFixesResponse = dart.constFn(dart.fnType(dartservices.FixesResponse, [dart.dynamic])))();
  let dynamicToFormatResponse = () => (dynamicToFormatResponse = dart.constFn(dart.fnType(dartservices.FormatResponse, [dart.dynamic])))();
  let dynamicToVersionResponse = () => (dynamicToVersionResponse = dart.constFn(dart.fnType(dartservices.VersionResponse, [dart.dynamic])))();
  let LinkedMapOfString$Object = () => (LinkedMapOfString$Object = dart.constFn(_js_helper.LinkedMap$(core.String, core.Object)))();
  let dynamicToAnalysisIssue = () => (dynamicToAnalysisIssue = dart.constFn(dart.fnType(dartservices.AnalysisIssue, [dart.dynamic])))();
  let MapOfString$Object = () => (MapOfString$Object = dart.constFn(core.Map$(core.String, core.Object)))();
  let AnalysisIssueToMapOfString$Object = () => (AnalysisIssueToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [dartservices.AnalysisIssue])))();
  let dynamicToCandidateFix = () => (dynamicToCandidateFix = dart.constFn(dart.fnType(dartservices.CandidateFix, [dart.dynamic])))();
  let CandidateFixToMapOfString$Object = () => (CandidateFixToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [dartservices.CandidateFix])))();
  let dynamicToSourceEdit = () => (dynamicToSourceEdit = dart.constFn(dart.fnType(dartservices.SourceEdit, [dart.dynamic])))();
  let dynamicToLinkedEditGroup = () => (dynamicToLinkedEditGroup = dart.constFn(dart.fnType(dartservices.LinkedEditGroup, [dart.dynamic])))();
  let SourceEditToMapOfString$Object = () => (SourceEditToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [dartservices.SourceEdit])))();
  let LinkedEditGroupToMapOfString$Object = () => (LinkedEditGroupToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [dartservices.LinkedEditGroup])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let dynamicToMapOfString$String = () => (dynamicToMapOfString$String = dart.constFn(dart.fnType(MapOfString$String(), [dart.dynamic])))();
  let dynamicToProblemAndFixes = () => (dynamicToProblemAndFixes = dart.constFn(dart.fnType(dartservices.ProblemAndFixes, [dart.dynamic])))();
  let ProblemAndFixesToMapOfString$Object = () => (ProblemAndFixesToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [dartservices.ProblemAndFixes])))();
  let dynamicToLinkedEditSuggestion = () => (dynamicToLinkedEditSuggestion = dart.constFn(dart.fnType(dartservices.LinkedEditSuggestion, [dart.dynamic])))();
  let LinkedEditSuggestionToMapOfString$Object = () => (LinkedEditSuggestionToMapOfString$Object = dart.constFn(dart.fnType(MapOfString$Object(), [dartservices.LinkedEditSuggestion])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let StreamControllerOfTestResult = () => (StreamControllerOfTestResult = dart.constFn(async.StreamController$(execution.TestResult)))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  const CT = Object.create(null);
  const _instances = dart.privateName(dependencies, "_instances");
  const _calcParent = dart.privateName(dependencies, "_calcParent");
  dependencies.Dependencies = class Dependencies extends core.Object {
    static setGlobalInstance(deps) {
      dependencies.Dependencies._global = deps;
    }
    static get instance() {
      let deps = dependencies.Dependencies._check(async.Zone.current._get("dependencies"));
      return deps != null ? deps : dependencies.Dependencies._global;
    }
    get parent() {
      return this[_calcParent](async.Zone.current);
    }
    getDependency(type) {
      let t0;
      if (dart.test(this[_instances][$containsKey](type))) {
        return this[_instances][$_get](type);
      }
      let parent = this[_calcParent](async.Zone.current);
      t0 = parent;
      return t0 == null ? null : t0.getDependency(type);
    }
    setDependency(type, instance) {
      this[_instances][$_set](type, instance);
    }
    _get(type) {
      return this.getDependency(type);
    }
    _set(type, instance$) {
      let instance = instance$;
      this.setDependency(type, instance);
      return instance$;
    }
    get types() {
      return this[_instances][$keys];
    }
    runInZone($function) {
      let zone = async.Zone.current.fork({zoneValues: new _js_helper.LinkedMap.from(["dependencies", this])});
      zone.run(dart.dynamic, VoidTodynamic()._check($function));
    }
    [_calcParent](zone) {
      if (this[$_equals](dependencies.Dependencies._global)) return null;
      let parentZone = zone.parent;
      if (parentZone == null) return dependencies.Dependencies._global;
      let deps = dependencies.Dependencies._check(parentZone._get("dependencies"));
      if (dart.equals(deps, this)) {
        return this[_calcParent](parentZone);
      } else {
        return deps != null ? deps : dependencies.Dependencies._global;
      }
    }
  };
  (dependencies.Dependencies.new = function() {
    this[_instances] = new (LinkedMapOfType$dynamic()).new();
    ;
  }).prototype = dependencies.Dependencies.prototype;
  dart.addTypeTests(dependencies.Dependencies);
  dart.setMethodSignature(dependencies.Dependencies, () => ({
    __proto__: dart.getMethods(dependencies.Dependencies.__proto__),
    getDependency: dart.fnType(dart.dynamic, [core.Type]),
    setDependency: dart.fnType(dart.void, [core.Type, dart.dynamic]),
    _get: dart.fnType(dart.dynamic, [core.Type]),
    _set: dart.fnType(dart.void, [core.Type, dart.dynamic]),
    runInZone: dart.fnType(dart.void, [core.Function]),
    [_calcParent]: dart.fnType(dependencies.Dependencies, [async.Zone])
  }));
  dart.setGetterSignature(dependencies.Dependencies, () => ({
    __proto__: dart.getGetters(dependencies.Dependencies.__proto__),
    parent: dependencies.Dependencies,
    types: core.Iterable$(core.Type)
  }));
  dart.setLibraryUri(dependencies.Dependencies, "package:templates/src/flutter/dependencies.dart");
  dart.setFieldSignature(dependencies.Dependencies, () => ({
    __proto__: dart.getFields(dependencies.Dependencies.__proto__),
    [_instances]: dart.finalFieldType(core.Map$(core.Type, dart.dynamic))
  }));
  dart.defineLazy(dependencies.Dependencies, {
    /*dependencies.Dependencies._global*/get _global() {
      return null;
    },
    set _global(_) {}
  });
  dart.copyProperties(dependencies, {
    get deps() {
      return dependencies.Dependencies.instance;
    }
  });
  const _requester = dart.privateName(dartservices, "_requester");
  dartservices.DartservicesApi = class DartservicesApi extends core.Object {
    analyze(request) {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      _url = "analyze";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.AnalysisResults, dart.fn(data => new dartservices.AnalysisResults.fromJson(core.Map._check(data)), dynamicToAnalysisResults()));
    }
    assists(request) {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      _url = "assists";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.AssistsResponse, dart.fn(data => new dartservices.AssistsResponse.fromJson(core.Map._check(data)), dynamicToAssistsResponse()));
    }
    compile(request) {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      _url = "compile";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.CompileResponse, dart.fn(data => new dartservices.CompileResponse.fromJson(core.Map._check(data)), dynamicToCompileResponse()));
    }
    compileDDC(request) {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      _url = "compileDDC";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.CompileDDCResponse, dart.fn(data => new dartservices.CompileDDCResponse.fromJson(core.Map._check(data)), dynamicToCompileDDCResponse()));
    }
    complete(request) {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      _url = "complete";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.CompleteResponse, dart.fn(data => new dartservices.CompleteResponse.fromJson(core.Map._check(data)), dynamicToCompleteResponse()));
    }
    document(request) {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      _url = "document";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.DocumentResponse, dart.fn(data => new dartservices.DocumentResponse.fromJson(core.Map._check(data)), dynamicToDocumentResponse()));
    }
    fixes(request) {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      _url = "fixes";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.FixesResponse, dart.fn(data => new dartservices.FixesResponse.fromJson(core.Map._check(data)), dynamicToFixesResponse()));
    }
    format(request) {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      if (request != null) {
        _body = convert.json.encode(request.toJson());
      }
      _url = "format";
      let _response = this[_requester].request(core.String._check(_url), "POST", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.FormatResponse, dart.fn(data => new dartservices.FormatResponse.fromJson(core.Map._check(data)), dynamicToFormatResponse()));
    }
    version() {
      let _url = null;
      let _queryParams = new (LinkedMapOfString$ListOfString()).new();
      let _uploadMedia = null;
      let _uploadOptions = null;
      let _downloadOptions = requests.DownloadOptions.Metadata;
      let _body = null;
      _url = "version";
      let _response = this[_requester].request(core.String._check(_url), "GET", {body: core.String._check(_body), queryParams: _queryParams, uploadOptions: requests.UploadOptions._check(_uploadOptions), uploadMedia: requests.Media._check(_uploadMedia), downloadOptions: _downloadOptions});
      return _response.then(dartservices.VersionResponse, dart.fn(data => new dartservices.VersionResponse.fromJson(core.Map._check(data)), dynamicToVersionResponse()));
    }
  };
  (dartservices.DartservicesApi.new = function(client, opts) {
    let rootUrl = opts && 'rootUrl' in opts ? opts.rootUrl : "/";
    let servicePath = opts && 'servicePath' in opts ? opts.servicePath : "api/dartservices/v1/";
    this[_requester] = new clients.ApiRequester.new(client, rootUrl, servicePath, "dart-api-client dartservices/v1");
    ;
  }).prototype = dartservices.DartservicesApi.prototype;
  dart.addTypeTests(dartservices.DartservicesApi);
  dart.setMethodSignature(dartservices.DartservicesApi, () => ({
    __proto__: dart.getMethods(dartservices.DartservicesApi.__proto__),
    analyze: dart.fnType(async.Future$(dartservices.AnalysisResults), [dartservices.SourceRequest]),
    assists: dart.fnType(async.Future$(dartservices.AssistsResponse), [dartservices.SourceRequest]),
    compile: dart.fnType(async.Future$(dartservices.CompileResponse), [dartservices.CompileRequest]),
    compileDDC: dart.fnType(async.Future$(dartservices.CompileDDCResponse), [dartservices.CompileRequest]),
    complete: dart.fnType(async.Future$(dartservices.CompleteResponse), [dartservices.SourceRequest]),
    document: dart.fnType(async.Future$(dartservices.DocumentResponse), [dartservices.SourceRequest]),
    fixes: dart.fnType(async.Future$(dartservices.FixesResponse), [dartservices.SourceRequest]),
    format: dart.fnType(async.Future$(dartservices.FormatResponse), [dartservices.SourceRequest]),
    version: dart.fnType(async.Future$(dartservices.VersionResponse), [])
  }));
  dart.setLibraryUri(dartservices.DartservicesApi, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.DartservicesApi, () => ({
    __proto__: dart.getFields(dartservices.DartservicesApi.__proto__),
    [_requester]: dart.finalFieldType(clients.ApiRequester)
  }));
  const charLength = dart.privateName(dartservices, "AnalysisIssue.charLength");
  const charStart = dart.privateName(dartservices, "AnalysisIssue.charStart");
  const hasFixes = dart.privateName(dartservices, "AnalysisIssue.hasFixes");
  const kind = dart.privateName(dartservices, "AnalysisIssue.kind");
  const line = dart.privateName(dartservices, "AnalysisIssue.line");
  const message = dart.privateName(dartservices, "AnalysisIssue.message");
  const sourceName = dart.privateName(dartservices, "AnalysisIssue.sourceName");
  dartservices.AnalysisIssue = class AnalysisIssue extends core.Object {
    get charLength() {
      return this[charLength];
    }
    set charLength(value) {
      this[charLength] = value;
    }
    get charStart() {
      return this[charStart];
    }
    set charStart(value) {
      this[charStart] = value;
    }
    get hasFixes() {
      return this[hasFixes];
    }
    set hasFixes(value) {
      this[hasFixes] = value;
    }
    get kind() {
      return this[kind];
    }
    set kind(value) {
      this[kind] = value;
    }
    get line() {
      return this[line];
    }
    set line(value) {
      this[line] = value;
    }
    get message() {
      return this[message];
    }
    set message(value) {
      this[message] = value;
    }
    get sourceName() {
      return this[sourceName];
    }
    set sourceName(value) {
      this[sourceName] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.charLength != null) {
        _json[$_set]("charLength", this.charLength);
      }
      if (this.charStart != null) {
        _json[$_set]("charStart", this.charStart);
      }
      if (this.hasFixes != null) {
        _json[$_set]("hasFixes", this.hasFixes);
      }
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.line != null) {
        _json[$_set]("line", this.line);
      }
      if (this.message != null) {
        _json[$_set]("message", this.message);
      }
      if (this.sourceName != null) {
        _json[$_set]("sourceName", this.sourceName);
      }
      return _json;
    }
  };
  (dartservices.AnalysisIssue.new = function() {
    this[charLength] = null;
    this[charStart] = null;
    this[hasFixes] = null;
    this[kind] = null;
    this[line] = null;
    this[message] = null;
    this[sourceName] = null;
    ;
  }).prototype = dartservices.AnalysisIssue.prototype;
  (dartservices.AnalysisIssue.fromJson = function(_json) {
    this[charLength] = null;
    this[charStart] = null;
    this[hasFixes] = null;
    this[kind] = null;
    this[line] = null;
    this[message] = null;
    this[sourceName] = null;
    if (dart.test(_json[$containsKey]("charLength"))) {
      this.charLength = core.int._check(_json[$_get]("charLength"));
    }
    if (dart.test(_json[$containsKey]("charStart"))) {
      this.charStart = core.int._check(_json[$_get]("charStart"));
    }
    if (dart.test(_json[$containsKey]("hasFixes"))) {
      this.hasFixes = core.bool._check(_json[$_get]("hasFixes"));
    }
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("line"))) {
      this.line = core.int._check(_json[$_get]("line"));
    }
    if (dart.test(_json[$containsKey]("message"))) {
      this.message = core.String._check(_json[$_get]("message"));
    }
    if (dart.test(_json[$containsKey]("sourceName"))) {
      this.sourceName = core.String._check(_json[$_get]("sourceName"));
    }
  }).prototype = dartservices.AnalysisIssue.prototype;
  dart.addTypeTests(dartservices.AnalysisIssue);
  dart.setMethodSignature(dartservices.AnalysisIssue, () => ({
    __proto__: dart.getMethods(dartservices.AnalysisIssue.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.AnalysisIssue, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.AnalysisIssue, () => ({
    __proto__: dart.getFields(dartservices.AnalysisIssue.__proto__),
    charLength: dart.fieldType(core.int),
    charStart: dart.fieldType(core.int),
    hasFixes: dart.fieldType(core.bool),
    kind: dart.fieldType(core.String),
    line: dart.fieldType(core.int),
    message: dart.fieldType(core.String),
    sourceName: dart.fieldType(core.String)
  }));
  const issues = dart.privateName(dartservices, "AnalysisResults.issues");
  const packageImports = dart.privateName(dartservices, "AnalysisResults.packageImports");
  dartservices.AnalysisResults = class AnalysisResults extends core.Object {
    get issues() {
      return this[issues];
    }
    set issues(value) {
      this[issues] = value;
    }
    get packageImports() {
      return this[packageImports];
    }
    set packageImports(value) {
      this[packageImports] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.issues != null) {
        _json[$_set]("issues", this.issues[$map](MapOfString$Object(), dart.fn(value => value.toJson(), AnalysisIssueToMapOfString$Object()))[$toList]());
      }
      if (this.packageImports != null) {
        _json[$_set]("packageImports", this.packageImports);
      }
      return _json;
    }
  };
  (dartservices.AnalysisResults.new = function() {
    this[issues] = null;
    this[packageImports] = null;
    ;
  }).prototype = dartservices.AnalysisResults.prototype;
  (dartservices.AnalysisResults.fromJson = function(_json) {
    this[issues] = null;
    this[packageImports] = null;
    if (dart.test(_json[$containsKey]("issues"))) {
      this.issues = core.List.as(_json[$_get]("issues"))[$map](dartservices.AnalysisIssue, dart.fn(value => new dartservices.AnalysisIssue.fromJson(core.Map._check(value)), dynamicToAnalysisIssue()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("packageImports"))) {
      this.packageImports = core.List.as(_json[$_get]("packageImports"))[$cast](core.String);
    }
  }).prototype = dartservices.AnalysisResults.prototype;
  dart.addTypeTests(dartservices.AnalysisResults);
  dart.setMethodSignature(dartservices.AnalysisResults, () => ({
    __proto__: dart.getMethods(dartservices.AnalysisResults.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.AnalysisResults, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.AnalysisResults, () => ({
    __proto__: dart.getFields(dartservices.AnalysisResults.__proto__),
    issues: dart.fieldType(core.List$(dartservices.AnalysisIssue)),
    packageImports: dart.fieldType(core.List$(core.String))
  }));
  const assists = dart.privateName(dartservices, "AssistsResponse.assists");
  dartservices.AssistsResponse = class AssistsResponse extends core.Object {
    get assists() {
      return this[assists];
    }
    set assists(value) {
      this[assists] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.assists != null) {
        _json[$_set]("assists", this.assists[$map](MapOfString$Object(), dart.fn(value => value.toJson(), CandidateFixToMapOfString$Object()))[$toList]());
      }
      return _json;
    }
  };
  (dartservices.AssistsResponse.new = function() {
    this[assists] = null;
    ;
  }).prototype = dartservices.AssistsResponse.prototype;
  (dartservices.AssistsResponse.fromJson = function(_json) {
    this[assists] = null;
    if (dart.test(_json[$containsKey]("assists"))) {
      this.assists = core.List.as(_json[$_get]("assists"))[$map](dartservices.CandidateFix, dart.fn(value => new dartservices.CandidateFix.fromJson(core.Map._check(value)), dynamicToCandidateFix()))[$toList]();
    }
  }).prototype = dartservices.AssistsResponse.prototype;
  dart.addTypeTests(dartservices.AssistsResponse);
  dart.setMethodSignature(dartservices.AssistsResponse, () => ({
    __proto__: dart.getMethods(dartservices.AssistsResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.AssistsResponse, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.AssistsResponse, () => ({
    __proto__: dart.getFields(dartservices.AssistsResponse.__proto__),
    assists: dart.fieldType(core.List$(dartservices.CandidateFix))
  }));
  const edits = dart.privateName(dartservices, "CandidateFix.edits");
  const linkedEditGroups = dart.privateName(dartservices, "CandidateFix.linkedEditGroups");
  const message$ = dart.privateName(dartservices, "CandidateFix.message");
  const selectionOffset = dart.privateName(dartservices, "CandidateFix.selectionOffset");
  dartservices.CandidateFix = class CandidateFix extends core.Object {
    get edits() {
      return this[edits];
    }
    set edits(value) {
      this[edits] = value;
    }
    get linkedEditGroups() {
      return this[linkedEditGroups];
    }
    set linkedEditGroups(value) {
      this[linkedEditGroups] = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
    get selectionOffset() {
      return this[selectionOffset];
    }
    set selectionOffset(value) {
      this[selectionOffset] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.edits != null) {
        _json[$_set]("edits", this.edits[$map](MapOfString$Object(), dart.fn(value => value.toJson(), SourceEditToMapOfString$Object()))[$toList]());
      }
      if (this.linkedEditGroups != null) {
        _json[$_set]("linkedEditGroups", this.linkedEditGroups[$map](MapOfString$Object(), dart.fn(value => value.toJson(), LinkedEditGroupToMapOfString$Object()))[$toList]());
      }
      if (this.message != null) {
        _json[$_set]("message", this.message);
      }
      if (this.selectionOffset != null) {
        _json[$_set]("selectionOffset", this.selectionOffset);
      }
      return _json;
    }
  };
  (dartservices.CandidateFix.new = function() {
    this[edits] = null;
    this[linkedEditGroups] = null;
    this[message$] = null;
    this[selectionOffset] = null;
    ;
  }).prototype = dartservices.CandidateFix.prototype;
  (dartservices.CandidateFix.fromJson = function(_json) {
    this[edits] = null;
    this[linkedEditGroups] = null;
    this[message$] = null;
    this[selectionOffset] = null;
    if (dart.test(_json[$containsKey]("edits"))) {
      this.edits = core.List.as(_json[$_get]("edits"))[$map](dartservices.SourceEdit, dart.fn(value => new dartservices.SourceEdit.fromJson(core.Map._check(value)), dynamicToSourceEdit()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("linkedEditGroups"))) {
      this.linkedEditGroups = core.List.as(_json[$_get]("linkedEditGroups"))[$map](dartservices.LinkedEditGroup, dart.fn(value => new dartservices.LinkedEditGroup.fromJson(core.Map._check(value)), dynamicToLinkedEditGroup()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("message"))) {
      this.message = core.String._check(_json[$_get]("message"));
    }
    if (dart.test(_json[$containsKey]("selectionOffset"))) {
      this.selectionOffset = core.int._check(_json[$_get]("selectionOffset"));
    }
  }).prototype = dartservices.CandidateFix.prototype;
  dart.addTypeTests(dartservices.CandidateFix);
  dart.setMethodSignature(dartservices.CandidateFix, () => ({
    __proto__: dart.getMethods(dartservices.CandidateFix.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.CandidateFix, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.CandidateFix, () => ({
    __proto__: dart.getFields(dartservices.CandidateFix.__proto__),
    edits: dart.fieldType(core.List$(dartservices.SourceEdit)),
    linkedEditGroups: dart.fieldType(core.List$(dartservices.LinkedEditGroup)),
    message: dart.fieldType(core.String),
    selectionOffset: dart.fieldType(core.int)
  }));
  const modulesBaseUrl = dart.privateName(dartservices, "CompileDDCResponse.modulesBaseUrl");
  const result = dart.privateName(dartservices, "CompileDDCResponse.result");
  dartservices.CompileDDCResponse = class CompileDDCResponse extends core.Object {
    get modulesBaseUrl() {
      return this[modulesBaseUrl];
    }
    set modulesBaseUrl(value) {
      this[modulesBaseUrl] = value;
    }
    get result() {
      return this[result];
    }
    set result(value) {
      this[result] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.modulesBaseUrl != null) {
        _json[$_set]("modulesBaseUrl", this.modulesBaseUrl);
      }
      if (this.result != null) {
        _json[$_set]("result", this.result);
      }
      return _json;
    }
  };
  (dartservices.CompileDDCResponse.new = function() {
    this[modulesBaseUrl] = null;
    this[result] = null;
    ;
  }).prototype = dartservices.CompileDDCResponse.prototype;
  (dartservices.CompileDDCResponse.fromJson = function(_json) {
    this[modulesBaseUrl] = null;
    this[result] = null;
    if (dart.test(_json[$containsKey]("modulesBaseUrl"))) {
      this.modulesBaseUrl = core.String._check(_json[$_get]("modulesBaseUrl"));
    }
    if (dart.test(_json[$containsKey]("result"))) {
      this.result = core.String._check(_json[$_get]("result"));
    }
  }).prototype = dartservices.CompileDDCResponse.prototype;
  dart.addTypeTests(dartservices.CompileDDCResponse);
  dart.setMethodSignature(dartservices.CompileDDCResponse, () => ({
    __proto__: dart.getMethods(dartservices.CompileDDCResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.CompileDDCResponse, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.CompileDDCResponse, () => ({
    __proto__: dart.getFields(dartservices.CompileDDCResponse.__proto__),
    modulesBaseUrl: dart.fieldType(core.String),
    result: dart.fieldType(core.String)
  }));
  const returnSourceMap = dart.privateName(dartservices, "CompileRequest.returnSourceMap");
  const source = dart.privateName(dartservices, "CompileRequest.source");
  dartservices.CompileRequest = class CompileRequest extends core.Object {
    get returnSourceMap() {
      return this[returnSourceMap];
    }
    set returnSourceMap(value) {
      this[returnSourceMap] = value;
    }
    get source() {
      return this[source];
    }
    set source(value) {
      this[source] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.returnSourceMap != null) {
        _json[$_set]("returnSourceMap", this.returnSourceMap);
      }
      if (this.source != null) {
        _json[$_set]("source", this.source);
      }
      return _json;
    }
  };
  (dartservices.CompileRequest.new = function() {
    this[returnSourceMap] = null;
    this[source] = null;
    ;
  }).prototype = dartservices.CompileRequest.prototype;
  (dartservices.CompileRequest.fromJson = function(_json) {
    this[returnSourceMap] = null;
    this[source] = null;
    if (dart.test(_json[$containsKey]("returnSourceMap"))) {
      this.returnSourceMap = core.bool._check(_json[$_get]("returnSourceMap"));
    }
    if (dart.test(_json[$containsKey]("source"))) {
      this.source = core.String._check(_json[$_get]("source"));
    }
  }).prototype = dartservices.CompileRequest.prototype;
  dart.addTypeTests(dartservices.CompileRequest);
  dart.setMethodSignature(dartservices.CompileRequest, () => ({
    __proto__: dart.getMethods(dartservices.CompileRequest.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.CompileRequest, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.CompileRequest, () => ({
    __proto__: dart.getFields(dartservices.CompileRequest.__proto__),
    returnSourceMap: dart.fieldType(core.bool),
    source: dart.fieldType(core.String)
  }));
  const result$ = dart.privateName(dartservices, "CompileResponse.result");
  const sourceMap = dart.privateName(dartservices, "CompileResponse.sourceMap");
  dartservices.CompileResponse = class CompileResponse extends core.Object {
    get result() {
      return this[result$];
    }
    set result(value) {
      this[result$] = value;
    }
    get sourceMap() {
      return this[sourceMap];
    }
    set sourceMap(value) {
      this[sourceMap] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.result != null) {
        _json[$_set]("result", this.result);
      }
      if (this.sourceMap != null) {
        _json[$_set]("sourceMap", this.sourceMap);
      }
      return _json;
    }
  };
  (dartservices.CompileResponse.new = function() {
    this[result$] = null;
    this[sourceMap] = null;
    ;
  }).prototype = dartservices.CompileResponse.prototype;
  (dartservices.CompileResponse.fromJson = function(_json) {
    this[result$] = null;
    this[sourceMap] = null;
    if (dart.test(_json[$containsKey]("result"))) {
      this.result = core.String._check(_json[$_get]("result"));
    }
    if (dart.test(_json[$containsKey]("sourceMap"))) {
      this.sourceMap = core.String._check(_json[$_get]("sourceMap"));
    }
  }).prototype = dartservices.CompileResponse.prototype;
  dart.addTypeTests(dartservices.CompileResponse);
  dart.setMethodSignature(dartservices.CompileResponse, () => ({
    __proto__: dart.getMethods(dartservices.CompileResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.CompileResponse, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.CompileResponse, () => ({
    __proto__: dart.getFields(dartservices.CompileResponse.__proto__),
    result: dart.fieldType(core.String),
    sourceMap: dart.fieldType(core.String)
  }));
  const completions = dart.privateName(dartservices, "CompleteResponse.completions");
  const replacementLength = dart.privateName(dartservices, "CompleteResponse.replacementLength");
  const replacementOffset = dart.privateName(dartservices, "CompleteResponse.replacementOffset");
  dartservices.CompleteResponse = class CompleteResponse extends core.Object {
    get completions() {
      return this[completions];
    }
    set completions(value) {
      this[completions] = value;
    }
    get replacementLength() {
      return this[replacementLength];
    }
    set replacementLength(value) {
      this[replacementLength] = value;
    }
    get replacementOffset() {
      return this[replacementOffset];
    }
    set replacementOffset(value) {
      this[replacementOffset] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.completions != null) {
        _json[$_set]("completions", this.completions);
      }
      if (this.replacementLength != null) {
        _json[$_set]("replacementLength", this.replacementLength);
      }
      if (this.replacementOffset != null) {
        _json[$_set]("replacementOffset", this.replacementOffset);
      }
      return _json;
    }
  };
  (dartservices.CompleteResponse.new = function() {
    this[completions] = null;
    this[replacementLength] = null;
    this[replacementOffset] = null;
    ;
  }).prototype = dartservices.CompleteResponse.prototype;
  (dartservices.CompleteResponse.fromJson = function(_json) {
    this[completions] = null;
    this[replacementLength] = null;
    this[replacementOffset] = null;
    if (dart.test(_json[$containsKey]("completions"))) {
      this.completions = core.List.as(_json[$_get]("completions"))[$map](MapOfString$String(), dart.fn(value => core.Map.as(value)[$cast](core.String, core.String), dynamicToMapOfString$String()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("replacementLength"))) {
      this.replacementLength = core.int._check(_json[$_get]("replacementLength"));
    }
    if (dart.test(_json[$containsKey]("replacementOffset"))) {
      this.replacementOffset = core.int._check(_json[$_get]("replacementOffset"));
    }
  }).prototype = dartservices.CompleteResponse.prototype;
  dart.addTypeTests(dartservices.CompleteResponse);
  dart.setMethodSignature(dartservices.CompleteResponse, () => ({
    __proto__: dart.getMethods(dartservices.CompleteResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.CompleteResponse, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.CompleteResponse, () => ({
    __proto__: dart.getFields(dartservices.CompleteResponse.__proto__),
    completions: dart.fieldType(core.List$(core.Map$(core.String, core.String))),
    replacementLength: dart.fieldType(core.int),
    replacementOffset: dart.fieldType(core.int)
  }));
  const info = dart.privateName(dartservices, "DocumentResponse.info");
  dartservices.DocumentResponse = class DocumentResponse extends core.Object {
    get info() {
      return this[info];
    }
    set info(value) {
      this[info] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.info != null) {
        _json[$_set]("info", this.info);
      }
      return _json;
    }
  };
  (dartservices.DocumentResponse.new = function() {
    this[info] = null;
    ;
  }).prototype = dartservices.DocumentResponse.prototype;
  (dartservices.DocumentResponse.fromJson = function(_json) {
    this[info] = null;
    if (dart.test(_json[$containsKey]("info"))) {
      this.info = core.Map.as(_json[$_get]("info"))[$cast](core.String, core.String);
    }
  }).prototype = dartservices.DocumentResponse.prototype;
  dart.addTypeTests(dartservices.DocumentResponse);
  dart.setMethodSignature(dartservices.DocumentResponse, () => ({
    __proto__: dart.getMethods(dartservices.DocumentResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.DocumentResponse, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.DocumentResponse, () => ({
    __proto__: dart.getFields(dartservices.DocumentResponse.__proto__),
    info: dart.fieldType(core.Map$(core.String, core.String))
  }));
  const fixes = dart.privateName(dartservices, "FixesResponse.fixes");
  dartservices.FixesResponse = class FixesResponse extends core.Object {
    get fixes() {
      return this[fixes];
    }
    set fixes(value) {
      this[fixes] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.fixes != null) {
        _json[$_set]("fixes", this.fixes[$map](MapOfString$Object(), dart.fn(value => value.toJson(), ProblemAndFixesToMapOfString$Object()))[$toList]());
      }
      return _json;
    }
  };
  (dartservices.FixesResponse.new = function() {
    this[fixes] = null;
    ;
  }).prototype = dartservices.FixesResponse.prototype;
  (dartservices.FixesResponse.fromJson = function(_json) {
    this[fixes] = null;
    if (dart.test(_json[$containsKey]("fixes"))) {
      this.fixes = core.List.as(_json[$_get]("fixes"))[$map](dartservices.ProblemAndFixes, dart.fn(value => new dartservices.ProblemAndFixes.fromJson(core.Map._check(value)), dynamicToProblemAndFixes()))[$toList]();
    }
  }).prototype = dartservices.FixesResponse.prototype;
  dart.addTypeTests(dartservices.FixesResponse);
  dart.setMethodSignature(dartservices.FixesResponse, () => ({
    __proto__: dart.getMethods(dartservices.FixesResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.FixesResponse, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.FixesResponse, () => ({
    __proto__: dart.getFields(dartservices.FixesResponse.__proto__),
    fixes: dart.fieldType(core.List$(dartservices.ProblemAndFixes))
  }));
  const newString = dart.privateName(dartservices, "FormatResponse.newString");
  const offset = dart.privateName(dartservices, "FormatResponse.offset");
  dartservices.FormatResponse = class FormatResponse extends core.Object {
    get newString() {
      return this[newString];
    }
    set newString(value) {
      this[newString] = value;
    }
    get offset() {
      return this[offset];
    }
    set offset(value) {
      this[offset] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.newString != null) {
        _json[$_set]("newString", this.newString);
      }
      if (this.offset != null) {
        _json[$_set]("offset", this.offset);
      }
      return _json;
    }
  };
  (dartservices.FormatResponse.new = function() {
    this[newString] = null;
    this[offset] = null;
    ;
  }).prototype = dartservices.FormatResponse.prototype;
  (dartservices.FormatResponse.fromJson = function(_json) {
    this[newString] = null;
    this[offset] = null;
    if (dart.test(_json[$containsKey]("newString"))) {
      this.newString = core.String._check(_json[$_get]("newString"));
    }
    if (dart.test(_json[$containsKey]("offset"))) {
      this.offset = core.int._check(_json[$_get]("offset"));
    }
  }).prototype = dartservices.FormatResponse.prototype;
  dart.addTypeTests(dartservices.FormatResponse);
  dart.setMethodSignature(dartservices.FormatResponse, () => ({
    __proto__: dart.getMethods(dartservices.FormatResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.FormatResponse, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.FormatResponse, () => ({
    __proto__: dart.getFields(dartservices.FormatResponse.__proto__),
    newString: dart.fieldType(core.String),
    offset: dart.fieldType(core.int)
  }));
  const length = dart.privateName(dartservices, "LinkedEditGroup.length");
  const positions = dart.privateName(dartservices, "LinkedEditGroup.positions");
  const suggestions = dart.privateName(dartservices, "LinkedEditGroup.suggestions");
  dartservices.LinkedEditGroup = class LinkedEditGroup extends core.Object {
    get length() {
      return this[length];
    }
    set length(value) {
      this[length] = value;
    }
    get positions() {
      return this[positions];
    }
    set positions(value) {
      this[positions] = value;
    }
    get suggestions() {
      return this[suggestions];
    }
    set suggestions(value) {
      this[suggestions] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.length != null) {
        _json[$_set]("length", this.length);
      }
      if (this.positions != null) {
        _json[$_set]("positions", this.positions);
      }
      if (this.suggestions != null) {
        _json[$_set]("suggestions", this.suggestions[$map](MapOfString$Object(), dart.fn(value => value.toJson(), LinkedEditSuggestionToMapOfString$Object()))[$toList]());
      }
      return _json;
    }
  };
  (dartservices.LinkedEditGroup.new = function() {
    this[length] = null;
    this[positions] = null;
    this[suggestions] = null;
    ;
  }).prototype = dartservices.LinkedEditGroup.prototype;
  (dartservices.LinkedEditGroup.fromJson = function(_json) {
    this[length] = null;
    this[positions] = null;
    this[suggestions] = null;
    if (dart.test(_json[$containsKey]("length"))) {
      this.length = core.int._check(_json[$_get]("length"));
    }
    if (dart.test(_json[$containsKey]("positions"))) {
      this.positions = core.List.as(_json[$_get]("positions"))[$cast](core.int);
    }
    if (dart.test(_json[$containsKey]("suggestions"))) {
      this.suggestions = core.List.as(_json[$_get]("suggestions"))[$map](dartservices.LinkedEditSuggestion, dart.fn(value => new dartservices.LinkedEditSuggestion.fromJson(core.Map._check(value)), dynamicToLinkedEditSuggestion()))[$toList]();
    }
  }).prototype = dartservices.LinkedEditGroup.prototype;
  dart.addTypeTests(dartservices.LinkedEditGroup);
  dart.setMethodSignature(dartservices.LinkedEditGroup, () => ({
    __proto__: dart.getMethods(dartservices.LinkedEditGroup.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.LinkedEditGroup, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.LinkedEditGroup, () => ({
    __proto__: dart.getFields(dartservices.LinkedEditGroup.__proto__),
    length: dart.fieldType(core.int),
    positions: dart.fieldType(core.List$(core.int)),
    suggestions: dart.fieldType(core.List$(dartservices.LinkedEditSuggestion))
  }));
  const kind$ = dart.privateName(dartservices, "LinkedEditSuggestion.kind");
  const value$ = dart.privateName(dartservices, "LinkedEditSuggestion.value");
  dartservices.LinkedEditSuggestion = class LinkedEditSuggestion extends core.Object {
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      this[kind$] = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.kind != null) {
        _json[$_set]("kind", this.kind);
      }
      if (this.value != null) {
        _json[$_set]("value", this.value);
      }
      return _json;
    }
  };
  (dartservices.LinkedEditSuggestion.new = function() {
    this[kind$] = null;
    this[value$] = null;
    ;
  }).prototype = dartservices.LinkedEditSuggestion.prototype;
  (dartservices.LinkedEditSuggestion.fromJson = function(_json) {
    this[kind$] = null;
    this[value$] = null;
    if (dart.test(_json[$containsKey]("kind"))) {
      this.kind = core.String._check(_json[$_get]("kind"));
    }
    if (dart.test(_json[$containsKey]("value"))) {
      this.value = core.String._check(_json[$_get]("value"));
    }
  }).prototype = dartservices.LinkedEditSuggestion.prototype;
  dart.addTypeTests(dartservices.LinkedEditSuggestion);
  dart.setMethodSignature(dartservices.LinkedEditSuggestion, () => ({
    __proto__: dart.getMethods(dartservices.LinkedEditSuggestion.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.LinkedEditSuggestion, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.LinkedEditSuggestion, () => ({
    __proto__: dart.getFields(dartservices.LinkedEditSuggestion.__proto__),
    kind: dart.fieldType(core.String),
    value: dart.fieldType(core.String)
  }));
  const fixes$ = dart.privateName(dartservices, "ProblemAndFixes.fixes");
  const length$ = dart.privateName(dartservices, "ProblemAndFixes.length");
  const offset$ = dart.privateName(dartservices, "ProblemAndFixes.offset");
  const problemMessage = dart.privateName(dartservices, "ProblemAndFixes.problemMessage");
  dartservices.ProblemAndFixes = class ProblemAndFixes extends core.Object {
    get fixes() {
      return this[fixes$];
    }
    set fixes(value) {
      this[fixes$] = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      this[length$] = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      this[offset$] = value;
    }
    get problemMessage() {
      return this[problemMessage];
    }
    set problemMessage(value) {
      this[problemMessage] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.fixes != null) {
        _json[$_set]("fixes", this.fixes[$map](MapOfString$Object(), dart.fn(value => value.toJson(), CandidateFixToMapOfString$Object()))[$toList]());
      }
      if (this.length != null) {
        _json[$_set]("length", this.length);
      }
      if (this.offset != null) {
        _json[$_set]("offset", this.offset);
      }
      if (this.problemMessage != null) {
        _json[$_set]("problemMessage", this.problemMessage);
      }
      return _json;
    }
  };
  (dartservices.ProblemAndFixes.new = function() {
    this[fixes$] = null;
    this[length$] = null;
    this[offset$] = null;
    this[problemMessage] = null;
    ;
  }).prototype = dartservices.ProblemAndFixes.prototype;
  (dartservices.ProblemAndFixes.fromJson = function(_json) {
    this[fixes$] = null;
    this[length$] = null;
    this[offset$] = null;
    this[problemMessage] = null;
    if (dart.test(_json[$containsKey]("fixes"))) {
      this.fixes = core.List.as(_json[$_get]("fixes"))[$map](dartservices.CandidateFix, dart.fn(value => new dartservices.CandidateFix.fromJson(core.Map._check(value)), dynamicToCandidateFix()))[$toList]();
    }
    if (dart.test(_json[$containsKey]("length"))) {
      this.length = core.int._check(_json[$_get]("length"));
    }
    if (dart.test(_json[$containsKey]("offset"))) {
      this.offset = core.int._check(_json[$_get]("offset"));
    }
    if (dart.test(_json[$containsKey]("problemMessage"))) {
      this.problemMessage = core.String._check(_json[$_get]("problemMessage"));
    }
  }).prototype = dartservices.ProblemAndFixes.prototype;
  dart.addTypeTests(dartservices.ProblemAndFixes);
  dart.setMethodSignature(dartservices.ProblemAndFixes, () => ({
    __proto__: dart.getMethods(dartservices.ProblemAndFixes.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.ProblemAndFixes, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.ProblemAndFixes, () => ({
    __proto__: dart.getFields(dartservices.ProblemAndFixes.__proto__),
    fixes: dart.fieldType(core.List$(dartservices.CandidateFix)),
    length: dart.fieldType(core.int),
    offset: dart.fieldType(core.int),
    problemMessage: dart.fieldType(core.String)
  }));
  const length$0 = dart.privateName(dartservices, "SourceEdit.length");
  const offset$0 = dart.privateName(dartservices, "SourceEdit.offset");
  const replacement = dart.privateName(dartservices, "SourceEdit.replacement");
  dartservices.SourceEdit = class SourceEdit extends core.Object {
    get length() {
      return this[length$0];
    }
    set length(value) {
      this[length$0] = value;
    }
    get offset() {
      return this[offset$0];
    }
    set offset(value) {
      this[offset$0] = value;
    }
    get replacement() {
      return this[replacement];
    }
    set replacement(value) {
      this[replacement] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.length != null) {
        _json[$_set]("length", this.length);
      }
      if (this.offset != null) {
        _json[$_set]("offset", this.offset);
      }
      if (this.replacement != null) {
        _json[$_set]("replacement", this.replacement);
      }
      return _json;
    }
  };
  (dartservices.SourceEdit.new = function() {
    this[length$0] = null;
    this[offset$0] = null;
    this[replacement] = null;
    ;
  }).prototype = dartservices.SourceEdit.prototype;
  (dartservices.SourceEdit.fromJson = function(_json) {
    this[length$0] = null;
    this[offset$0] = null;
    this[replacement] = null;
    if (dart.test(_json[$containsKey]("length"))) {
      this.length = core.int._check(_json[$_get]("length"));
    }
    if (dart.test(_json[$containsKey]("offset"))) {
      this.offset = core.int._check(_json[$_get]("offset"));
    }
    if (dart.test(_json[$containsKey]("replacement"))) {
      this.replacement = core.String._check(_json[$_get]("replacement"));
    }
  }).prototype = dartservices.SourceEdit.prototype;
  dart.addTypeTests(dartservices.SourceEdit);
  dart.setMethodSignature(dartservices.SourceEdit, () => ({
    __proto__: dart.getMethods(dartservices.SourceEdit.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.SourceEdit, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.SourceEdit, () => ({
    __proto__: dart.getFields(dartservices.SourceEdit.__proto__),
    length: dart.fieldType(core.int),
    offset: dart.fieldType(core.int),
    replacement: dart.fieldType(core.String)
  }));
  const offset$1 = dart.privateName(dartservices, "SourceRequest.offset");
  const source$ = dart.privateName(dartservices, "SourceRequest.source");
  dartservices.SourceRequest = class SourceRequest extends core.Object {
    get offset() {
      return this[offset$1];
    }
    set offset(value) {
      this[offset$1] = value;
    }
    get source() {
      return this[source$];
    }
    set source(value) {
      this[source$] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.offset != null) {
        _json[$_set]("offset", this.offset);
      }
      if (this.source != null) {
        _json[$_set]("source", this.source);
      }
      return _json;
    }
  };
  (dartservices.SourceRequest.new = function() {
    this[offset$1] = null;
    this[source$] = null;
    ;
  }).prototype = dartservices.SourceRequest.prototype;
  (dartservices.SourceRequest.fromJson = function(_json) {
    this[offset$1] = null;
    this[source$] = null;
    if (dart.test(_json[$containsKey]("offset"))) {
      this.offset = core.int._check(_json[$_get]("offset"));
    }
    if (dart.test(_json[$containsKey]("source"))) {
      this.source = core.String._check(_json[$_get]("source"));
    }
  }).prototype = dartservices.SourceRequest.prototype;
  dart.addTypeTests(dartservices.SourceRequest);
  dart.setMethodSignature(dartservices.SourceRequest, () => ({
    __proto__: dart.getMethods(dartservices.SourceRequest.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.SourceRequest, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.SourceRequest, () => ({
    __proto__: dart.getFields(dartservices.SourceRequest.__proto__),
    offset: dart.fieldType(core.int),
    source: dart.fieldType(core.String)
  }));
  const appEngineVersion = dart.privateName(dartservices, "VersionResponse.appEngineVersion");
  const runtimeVersion = dart.privateName(dartservices, "VersionResponse.runtimeVersion");
  const sdkVersion = dart.privateName(dartservices, "VersionResponse.sdkVersion");
  const sdkVersionFull = dart.privateName(dartservices, "VersionResponse.sdkVersionFull");
  const servicesVersion = dart.privateName(dartservices, "VersionResponse.servicesVersion");
  dartservices.VersionResponse = class VersionResponse extends core.Object {
    get appEngineVersion() {
      return this[appEngineVersion];
    }
    set appEngineVersion(value) {
      this[appEngineVersion] = value;
    }
    get runtimeVersion() {
      return this[runtimeVersion];
    }
    set runtimeVersion(value) {
      this[runtimeVersion] = value;
    }
    get sdkVersion() {
      return this[sdkVersion];
    }
    set sdkVersion(value) {
      this[sdkVersion] = value;
    }
    get sdkVersionFull() {
      return this[sdkVersionFull];
    }
    set sdkVersionFull(value) {
      this[sdkVersionFull] = value;
    }
    get servicesVersion() {
      return this[servicesVersion];
    }
    set servicesVersion(value) {
      this[servicesVersion] = value;
    }
    toJson() {
      let _json = new (LinkedMapOfString$Object()).new();
      if (this.appEngineVersion != null) {
        _json[$_set]("appEngineVersion", this.appEngineVersion);
      }
      if (this.runtimeVersion != null) {
        _json[$_set]("runtimeVersion", this.runtimeVersion);
      }
      if (this.sdkVersion != null) {
        _json[$_set]("sdkVersion", this.sdkVersion);
      }
      if (this.sdkVersionFull != null) {
        _json[$_set]("sdkVersionFull", this.sdkVersionFull);
      }
      if (this.servicesVersion != null) {
        _json[$_set]("servicesVersion", this.servicesVersion);
      }
      return _json;
    }
  };
  (dartservices.VersionResponse.new = function() {
    this[appEngineVersion] = null;
    this[runtimeVersion] = null;
    this[sdkVersion] = null;
    this[sdkVersionFull] = null;
    this[servicesVersion] = null;
    ;
  }).prototype = dartservices.VersionResponse.prototype;
  (dartservices.VersionResponse.fromJson = function(_json) {
    this[appEngineVersion] = null;
    this[runtimeVersion] = null;
    this[sdkVersion] = null;
    this[sdkVersionFull] = null;
    this[servicesVersion] = null;
    if (dart.test(_json[$containsKey]("appEngineVersion"))) {
      this.appEngineVersion = core.String._check(_json[$_get]("appEngineVersion"));
    }
    if (dart.test(_json[$containsKey]("runtimeVersion"))) {
      this.runtimeVersion = core.String._check(_json[$_get]("runtimeVersion"));
    }
    if (dart.test(_json[$containsKey]("sdkVersion"))) {
      this.sdkVersion = core.String._check(_json[$_get]("sdkVersion"));
    }
    if (dart.test(_json[$containsKey]("sdkVersionFull"))) {
      this.sdkVersionFull = core.String._check(_json[$_get]("sdkVersionFull"));
    }
    if (dart.test(_json[$containsKey]("servicesVersion"))) {
      this.servicesVersion = core.String._check(_json[$_get]("servicesVersion"));
    }
  }).prototype = dartservices.VersionResponse.prototype;
  dart.addTypeTests(dartservices.VersionResponse);
  dart.setMethodSignature(dartservices.VersionResponse, () => ({
    __proto__: dart.getMethods(dartservices.VersionResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, core.Object), [])
  }));
  dart.setLibraryUri(dartservices.VersionResponse, "package:templates/src/flutter/dartservices.dart");
  dart.setFieldSignature(dartservices.VersionResponse, () => ({
    __proto__: dart.getFields(dartservices.VersionResponse.__proto__),
    appEngineVersion: dart.fieldType(core.String),
    runtimeVersion: dart.fieldType(core.String),
    sdkVersion: dart.fieldType(core.String),
    sdkVersionFull: dart.fieldType(core.String),
    servicesVersion: dart.fieldType(core.String)
  }));
  dart.defineLazy(dartservices, {
    /*dartservices.USER_AGENT*/get USER_AGENT() {
      return "dart-api-client dartservices/v1";
    }
  });
  const _text$ = dart.privateName(common, "_text");
  common.StringTextProvider = class StringTextProvider extends core.Object {
    getText() {
      return this[_text$];
    }
  };
  (common.StringTextProvider.new = function(_text) {
    this[_text$] = _text;
    ;
  }).prototype = common.StringTextProvider.prototype;
  dart.addTypeTests(common.StringTextProvider);
  dart.setMethodSignature(common.StringTextProvider, () => ({
    __proto__: dart.getMethods(common.StringTextProvider.__proto__),
    getText: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(common.StringTextProvider, "package:templates/src/flutter/common.dart");
  dart.setFieldSignature(common.StringTextProvider, () => ({
    __proto__: dart.getFields(common.StringTextProvider.__proto__),
    [_text$]: dart.finalFieldType(core.String)
  }));
  const _starts = dart.privateName(common, "_starts");
  common.Lines = class Lines extends core.Object {
    getLineForOffset(offset) {
      if (dart.test(this[_starts][$isEmpty])) return 0;
      for (let i = 1; i < dart.notNull(this[_starts][$length]); i = i + 1) {
        if (dart.notNull(offset) < dart.notNull(this[_starts][$_get](i))) return i - 1;
      }
      return dart.notNull(this[_starts][$length]) - 1;
    }
    offsetForLine(line) {
      if (!(dart.notNull(line) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/templates/src/flutter/common.dart", 47, 12, "line >= 0");
      if (dart.test(this[_starts][$isEmpty])) return 0;
      if (dart.notNull(line) >= dart.notNull(this[_starts][$length])) line = dart.notNull(this[_starts][$length]) - 1;
      return this[_starts][$_get](line);
    }
  };
  (common.Lines.new = function(source) {
    this[_starts] = JSArrayOfint().of([]);
    let units = source[$codeUnits];
    let nextIsEol = true;
    for (let i = 0; i < dart.notNull(units[$length]); i = i + 1) {
      if (nextIsEol) {
        nextIsEol = false;
        this[_starts][$add](i);
      }
      if (units[$_get](i) === 10) nextIsEol = true;
    }
  }).prototype = common.Lines.prototype;
  dart.addTypeTests(common.Lines);
  dart.setMethodSignature(common.Lines, () => ({
    __proto__: dart.getMethods(common.Lines.__proto__),
    getLineForOffset: dart.fnType(core.int, [core.int]),
    offsetForLine: dart.fnType(core.int, [core.int])
  }));
  dart.setLibraryUri(common.Lines, "package:templates/src/flutter/common.dart");
  dart.setFieldSignature(common.Lines, () => ({
    __proto__: dart.getFields(common.Lines.__proto__),
    [_starts]: dart.finalFieldType(core.List$(core.int))
  }));
  dart.defineLazy(common, {
    /*common.serverURL*/get serverURL() {
      return "https://dart-services.appspot.com/";
    },
    /*common.serviceCallTimeout*/get serviceCallTimeout() {
      return new core.Duration.new({seconds: 10});
    },
    /*common.longServiceCallTimeout*/get longServiceCallTimeout() {
      return new core.Duration.new({seconds: 60});
    }
  });
  const success$ = dart.privateName(execution, "TestResult.success");
  const messages$ = dart.privateName(execution, "TestResult.messages");
  execution.TestResult = class TestResult extends core.Object {
    get success() {
      return this[success$];
    }
    set success(value) {
      super.success = value;
    }
    get messages() {
      return this[messages$];
    }
    set messages(value) {
      super.messages = value;
    }
  };
  (execution.TestResult.new = function(success, messages) {
    this[success$] = success;
    this[messages$] = messages;
    ;
  }).prototype = execution.TestResult.prototype;
  dart.addTypeTests(execution.TestResult);
  dart.setLibraryUri(execution.TestResult, "package:templates/src/iframe/execution.dart");
  dart.setFieldSignature(execution.TestResult, () => ({
    __proto__: dart.getFields(execution.TestResult.__proto__),
    success: dart.finalFieldType(core.bool),
    messages: dart.finalFieldType(core.List$(core.String))
  }));
  execution.ExecutionService = class ExecutionService extends core.Object {};
  (execution.ExecutionService.new = function() {
    ;
  }).prototype = execution.ExecutionService.prototype;
  dart.addTypeTests(execution.ExecutionService);
  dart.setLibraryUri(execution.ExecutionService, "package:templates/src/iframe/execution.dart");
  const _stdoutController = dart.privateName(execution_iframe, "_stdoutController");
  const _stderrController = dart.privateName(execution_iframe, "_stderrController");
  const _testResultsController = dart.privateName(execution_iframe, "_testResultsController");
  const _frameSrc = dart.privateName(execution_iframe, "_frameSrc");
  const _readyCompleter = dart.privateName(execution_iframe, "_readyCompleter");
  const _frame$ = dart.privateName(execution_iframe, "_frame");
  const _initListener = dart.privateName(execution_iframe, "_initListener");
  const _reset = dart.privateName(execution_iframe, "_reset");
  const _decorateJavaScript = dart.privateName(execution_iframe, "_decorateJavaScript");
  const _send = dart.privateName(execution_iframe, "_send");
  execution_iframe.ExecutionServiceIFrame = class ExecutionServiceIFrame extends core.Object {
    get frame() {
      return this[_frame$];
    }
    execute(html, css, javaScript, opts) {
      let modulesBaseUrl = opts && 'modulesBaseUrl' in opts ? opts.modulesBaseUrl : null;
      return this[_reset]().whenComplete(dart.fn(() => this[_send]("execute", new _js_helper.LinkedMap.from(["html", html, "css", css, "js", this[_decorateJavaScript](javaScript, {modulesBaseUrl: modulesBaseUrl})])), VoidToFuture()));
    }
    tearDown() {
      return this[_reset]();
    }
    replaceHtml(html) {
      this[_send]("setHtml", new _js_helper.LinkedMap.from(["html", html]));
    }
    replaceCss(css) {
      this[_send]("setCss", new _js_helper.LinkedMap.from(["css", css]));
    }
    set frameSrc(src) {
      this.frame.src = src;
      this[_frameSrc] = src;
    }
    get testResultDecoration() {
      return "void _result(bool success, [List<String> messages]) {\n  // Join messages into a comma-separated list for inclusion in the JSON array.\n  final joinedMessages = messages?.map((m) => '\"$m\"')?.join(',') ?? '';\n\n  print('" + "__TESTRESULT__ " + "{\"success\": $success, \"messages\": [$joinedMessages]}');\n}\n\n// Ensure we have at least one use of `_result`.\nvar resultFunction = _result;\n";
    }
    [_decorateJavaScript](javaScript, opts) {
      let modulesBaseUrl = opts && 'modulesBaseUrl' in opts ? opts.modulesBaseUrl : null;
      let postMessagePrint = "const testKey = '" + "__TESTRESULT__ " + "';\n\nfunction dartPrint(message) {\n  if (message.startsWith(testKey)) {\n    var resultMsg = JSON.parse(message.substring(testKey.length));\n    resultMsg.sender = 'frame';\n    resultMsg.type = 'testResult';\n    parent.postMessage(resultMsg, '*');\n  } else {\n    parent.postMessage(\n      {'sender': 'frame', 'type': 'stdout', 'message': message.toString()}, '*');\n  }\n}\n";
      let exceptionHandler = "var _thrownDartMainRunner = false;\nfunction dartMainRunner(main, args) {\n  try {\n    main(args);\n  } catch(error) {\n    parent.postMessage(\n      {'sender': 'frame', 'type': 'stderr', 'message': \"Uncaught exception:\\n\" + error.message}, '*');\n    _thrownDartMainRunner = true;\n    throw error;\n  }\n}\n\nwindow.onerror = function(message, url, lineNumber, colno, error) {\n  if (!_thrownDartMainRunner) {\n    var errorMessage = '';\n    if (error != null) {\n      errorMessage = 'Error: ' + error;\n    } \n    parent.postMessage(\n      {'sender': 'frame', 'type': 'stderr', 'message': message + errorMessage}, '*');\n  }\n  _thrownDartMainRunner = false;\n};\n";
      let requireConfig = "";
      if (modulesBaseUrl != null) {
        requireConfig = "require.config({\n  \"baseUrl\": \"" + dart.str(modulesBaseUrl) + "\",\n  \"waitSeconds\": 60\n});\n";
      }
      let usesRequireJs = modulesBaseUrl != null;
      let postfix = "";
      if (usesRequireJs) {
        postfix = "require([\"dartpad_main\", \"dart_sdk\"], function(dartpad_main, dart_sdk) {\n    // SDK initialization.\n    dart_sdk.dart.setStartAsyncSynchronously(true);\n    dart_sdk._isolate_helper.startRootIsolate(() => {}, []);\n\n    // Loads the `dartpad_main` module and runs its bootstrapped main method.\n    //\n    // DDK provides the user's code in a RequireJS module, which exports an\n    // object that looks something like this:\n    //\n    // {\n    //       [random_tokens]__bootstrap: bootstrap,\n    //       [random_tokens]__main: main\n    // }\n    //\n    // The first of those properties holds the compiled code for the bootstrap\n    // Dart file, which the server uses to wrap the user's code and wait on a\n    // call to dart:ui's `webOnlyInitializePlatform` before executing any of it.\n    //\n    // The loop below iterates over the properties of the exported object,\n    // looking for one that ends in \"__bootstrap\". Once found, it executes the\n    // bootstrapped main method, which calls the user's main method, which\n    // (presumably) calls runApp and starts Flutter's rendering. \n\n    for (var prop in dartpad_main) {\n          if (prop.endsWith(\"__bootstrap\")) {\n            dartpad_main[prop].main();\n          }\n    }});\n";
      }
      return (postMessagePrint + "\n" + exceptionHandler + "\n" + requireConfig + "\n" + dart.str(javaScript) + "\n" + postfix)[$trim]();
    }
    get onStdout() {
      return this[_stdoutController].stream;
    }
    get onStderr() {
      return this[_stderrController].stream;
    }
    get testResults() {
      return this[_testResultsController].stream;
    }
    [_send](command, params) {
      let m = new _js_helper.LinkedMap.from(["command", command]);
      m[$addAll](params);
      this.frame[$contentWindow][$postMessage](m, "*");
      return async.Future.value();
    }
    [_reset]() {
      if (this.frame[$parent] != null) {
        this[_readyCompleter] = async.Completer.new();
        let clone = html.IFrameElement._check(this[_frame$][$clone](false));
        clone.src = this[_frameSrc];
        let children = this.frame[$parent][$children];
        let index = children[$indexOf](this[_frame$]);
        children[$insert](index, clone);
        this.frame[$parent][$children][$remove](this[_frame$]);
        this[_frame$] = clone;
      }
      return this[_readyCompleter].future.timeout(new core.Duration.new({seconds: 1}), {onTimeout: dart.fn(() => {
          if (!dart.test(this[_readyCompleter].isCompleted)) this[_readyCompleter].complete();
        }, VoidToNull())});
    }
    [_initListener]() {
      js.context._set("dartMessageListener", js.JsFunction.withThis(dart.fn((_this, data) => {
        let t0;
        let type = core.String._check(dart.dsend(data, '_get', ["type"]));
        if (type === "testResult") {
          let result = new execution.TestResult.new(core.bool._check(dart.dsend(data, '_get', ["success"])), ListOfString().from(core.Iterable._check((t0 = dart.dsend(data, '_get', ["messages"]), t0 == null ? [] : t0))));
          this[_testResultsController].add(result);
        } else if (type === "stderr") {
          if (dart.test(this[_readyCompleter].isCompleted)) {
            this[_stderrController].add(core.String._check(dart.dsend(data, '_get', ["message"])));
          }
        } else if (type === "ready" && !dart.test(this[_readyCompleter].isCompleted)) {
          this[_readyCompleter].complete();
        } else {
          this[_stdoutController].add(core.String._check(dart.dsend(data, '_get', ["message"])));
        }
      }, dynamicAnddynamicToNull())));
    }
  };
  (execution_iframe.ExecutionServiceIFrame.new = function(_frame) {
    this[_stdoutController] = StreamControllerOfString().broadcast();
    this[_stderrController] = StreamControllerOfString().broadcast();
    this[_testResultsController] = StreamControllerOfTestResult().broadcast();
    this[_frameSrc] = null;
    this[_readyCompleter] = async.Completer.new();
    this[_frame$] = _frame;
    this[_frameSrc] = this[_frame$].src;
    this[_initListener]();
  }).prototype = execution_iframe.ExecutionServiceIFrame.prototype;
  dart.addTypeTests(execution_iframe.ExecutionServiceIFrame);
  execution_iframe.ExecutionServiceIFrame[dart.implements] = () => [execution.ExecutionService];
  dart.setMethodSignature(execution_iframe.ExecutionServiceIFrame, () => ({
    __proto__: dart.getMethods(execution_iframe.ExecutionServiceIFrame.__proto__),
    execute: dart.fnType(async.Future, [core.String, core.String, core.String], {modulesBaseUrl: core.String}, {}),
    tearDown: dart.fnType(async.Future, []),
    replaceHtml: dart.fnType(dart.void, [core.String]),
    replaceCss: dart.fnType(dart.void, [core.String]),
    [_decorateJavaScript]: dart.fnType(core.String, [core.String], {modulesBaseUrl: core.String}, {}),
    [_send]: dart.fnType(async.Future, [core.String, core.Map]),
    [_reset]: dart.fnType(async.Future, []),
    [_initListener]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(execution_iframe.ExecutionServiceIFrame, () => ({
    __proto__: dart.getGetters(execution_iframe.ExecutionServiceIFrame.__proto__),
    frame: html.IFrameElement,
    testResultDecoration: core.String,
    onStdout: async.Stream$(core.String),
    onStderr: async.Stream$(core.String),
    testResults: async.Stream$(execution.TestResult)
  }));
  dart.setSetterSignature(execution_iframe.ExecutionServiceIFrame, () => ({
    __proto__: dart.getSetters(execution_iframe.ExecutionServiceIFrame.__proto__),
    frameSrc: core.String
  }));
  dart.setLibraryUri(execution_iframe.ExecutionServiceIFrame, "package:templates/src/iframe/execution_iframe.dart");
  dart.setFieldSignature(execution_iframe.ExecutionServiceIFrame, () => ({
    __proto__: dart.getFields(execution_iframe.ExecutionServiceIFrame.__proto__),
    [_stdoutController]: dart.finalFieldType(async.StreamController$(core.String)),
    [_stderrController]: dart.finalFieldType(async.StreamController$(core.String)),
    [_testResultsController]: dart.finalFieldType(async.StreamController$(execution.TestResult)),
    [_frame$]: dart.fieldType(html.IFrameElement),
    [_frameSrc]: dart.fieldType(core.String),
    [_readyCompleter]: dart.fieldType(async.Completer)
  }));
  dart.defineLazy(execution_iframe.ExecutionServiceIFrame, {
    /*execution_iframe.ExecutionServiceIFrame.testKey*/get testKey() {
      return "__TESTRESULT__ ";
    }
  });
  dart.trackLibraries("packages/templates/src/flutter/common", {
    "package:templates/src/flutter/dependencies.dart": dependencies,
    "package:templates/src/flutter/dartservices.dart": dartservices,
    "package:templates/src/flutter/common.dart": common,
    "package:templates/src/iframe/execution.dart": execution,
    "package:templates/src/iframe/execution_iframe.dart": execution_iframe
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dependencies.dart","dartservices.dart","common.dart","../iframe/execution.dart","../iframe/execution_iframe.dart"],"names":[],"mappings":"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","file":"common.ddc.js"}');
  // Exports:
  return {
    src__flutter__dependencies: dependencies,
    src__flutter__dartservices: dartservices,
    src__flutter__common: common,
    src__iframe__execution: execution,
    src__iframe__execution_iframe: execution_iframe
  };
});

//# sourceMappingURL=common.ddc.js.map
