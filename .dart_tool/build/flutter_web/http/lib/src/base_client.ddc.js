define(['dart_sdk', 'packages/http_parser/http_parser', 'packages/pedantic/pedantic'], function(dart_sdk, packages__http_parser__http_parser, packages__pedantic__pedantic) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const pedantic = packages__pedantic__pedantic.pedantic;
  const request$ = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const byte_stream = Object.create(dart.library);
  const base_request = Object.create(dart.library);
  const streamed_response = Object.create(dart.library);
  const base_response = Object.create(dart.library);
  const client$ = Object.create(dart.library);
  const response$ = Object.create(dart.library);
  const browser_client = Object.create(dart.library);
  const exception = Object.create(dart.library);
  const base_client = Object.create(dart.library);
  const $length = dartx.length;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $toLowerCase = dartx.toLowerCase;
  const $hashCode = dartx.hashCode;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $map = dartx.map;
  const $join = dartx.join;
  const $isEmpty = dartx.isEmpty;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $buffer = dartx.buffer;
  const $onLoad = dartx.onLoad;
  const $response = dartx.response;
  const $result = dartx.result;
  const $responseHeaders = dartx.responseHeaders;
  const $onError = dartx.onError;
  const $toString = dartx.toString;
  const $addAll = dartx.addAll;
  const $cast = dartx.cast;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let LinkedHashMapOfString$String = () => (LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfListOfString = () => (JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(ListOfString())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringAndStringTovoid = () => (StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))();
  let ListOfStringToString = () => (ListOfStringToString = dart.constFn(dart.fnType(core.String, [ListOfString()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  let ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfint()])))();
  let Uint8ListToResponse = () => (Uint8ListToResponse = dart.constFn(dart.fnType(response$.Response, [typed_data.Uint8List])))();
  let _HashSetOfHttpRequest = () => (_HashSetOfHttpRequest = dart.constFn(collection._HashSet$(html.HttpRequest)))();
  let CompleterOfStreamedResponse = () => (CompleterOfStreamedResponse = dart.constFn(async.Completer$(streamed_response.StreamedResponse)))();
  let ProgressEventToNull = () => (ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))();
  let ResponseToString = () => (ResponseToString = dart.constFn(dart.fnType(core.String, [response$.Response])))();
  let ResponseToUint8List = () => (ResponseToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [response$.Response])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: convert.Latin1Codec.prototype,
        [Latin1Codec__allowInvalid]: false
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: false
      });
    },
    get C2() {
      return C2 = dart.constMap(core.String, core.String, []);
    }
  });
  const _defaultEncoding = dart.privateName(request$, "_defaultEncoding");
  const _bodyBytes = dart.privateName(request$, "_bodyBytes");
  const _contentType = dart.privateName(request$, "_contentType");
  const _checkFinalized = dart.privateName(request$, "_checkFinalized");
  const _contentLength = dart.privateName(base_request, "_contentLength");
  const _persistentConnection = dart.privateName(base_request, "_persistentConnection");
  const _followRedirects = dart.privateName(base_request, "_followRedirects");
  const _maxRedirects = dart.privateName(base_request, "_maxRedirects");
  const _finalized = dart.privateName(base_request, "_finalized");
  const _checkFinalized$ = dart.privateName(base_request, "_checkFinalized");
  const method$ = dart.privateName(base_request, "BaseRequest.method");
  const url$ = dart.privateName(base_request, "BaseRequest.url");
  const headers = dart.privateName(base_request, "BaseRequest.headers");
  base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(value) + "."));
      }
      this[_checkFinalized$]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized$]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized$]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized$]();
      this[_maxRedirects] = value;
    }
    get finalized() {
      return this[_finalized];
    }
    finalize() {
      if (dart.test(this.finalized)) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return null;
    }
    send() {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let client = client$.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = utils.onDone(ListOfint(), response.stream, dart.bind(client, 'close'));
          return new streamed_response.StreamedResponse.new(new byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (e) {
          let _ = dart.getThrown(e);
          client.close();
          dart.rethrow(e);
        }
      }).bind(this));
    }
    [_checkFinalized$]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return dart.str(this.method) + " " + dart.str(this.url);
    }
  };
  (base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[method$] = method;
    this[url$] = url;
    this[headers] = LinkedHashMapOfString$String().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), StringAndStringTobool()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], StringToint())});
    ;
  }).prototype = base_request.BaseRequest.prototype;
  dart.addTypeTests(base_request.BaseRequest);
  dart.setMethodSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(base_request.BaseRequest.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, []),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), []),
    [_checkFinalized$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(base_request.BaseRequest.__proto__),
    contentLength: core.int,
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int,
    finalized: core.bool
  }));
  dart.setSetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(base_request.BaseRequest.__proto__),
    contentLength: core.int,
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int
  }));
  dart.setLibraryUri(base_request.BaseRequest, "package:http/src/base_request.dart");
  dart.setFieldSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getFields(base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.Uri),
    [_contentLength]: dart.fieldType(core.int),
    [_persistentConnection]: dart.fieldType(core.bool),
    [_followRedirects]: dart.fieldType(core.bool),
    [_maxRedirects]: dart.fieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_finalized]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(base_request.BaseRequest, ['toString']);
  request$.Request = class Request extends base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.test(this[_contentType].parameters[$containsKey]("charset"))) {
        return this[_defaultEncoding];
      }
      return utils.requiredEncodingForCharset(this[_contentType].parameters[$_get]("charset"));
    }
    set encoding(value) {
      this[_checkFinalized]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized]();
      this[_bodyBytes] = utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("text", "plain", new (IdentityMapOfString$String()).from(["charset", this.encoding.name]));
      } else if (!dart.test(contentType.parameters[$containsKey]("charset"))) {
        this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot access the body fields of a Request without " + "content-type \"application/x-www-form-urlencoded\"."));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot set the body fields of a Request with " + "content-type \"" + dart.str(contentType.mimeType) + "\"."));
      }
      this.body = utils.mapToQuery(fields, {encoding: this.encoding});
    }
    finalize() {
      super.finalize();
      return byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]("content-type");
      if (contentType == null) return null;
      return media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      this.headers[$_set]("content-type", dart.toString(value));
    }
    [_checkFinalized]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (request$.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.utf8;
    this[_bodyBytes] = _native_typed_data.NativeUint8List.new(0);
    request$.Request.__proto__.new.call(this, method, url);
    ;
  }).prototype = request$.Request.prototype;
  dart.addTypeTests(request$.Request);
  dart.setMethodSignature(request$.Request, () => ({
    __proto__: dart.getMethods(request$.Request.__proto__),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(request$.Request, () => ({
    __proto__: dart.getGetters(request$.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: typed_data.Uint8List,
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: media_type.MediaType
  }));
  dart.setSetterSignature(request$.Request, () => ({
    __proto__: dart.getSetters(request$.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: core.List$(core.int),
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: media_type.MediaType
  }));
  dart.setLibraryUri(request$.Request, "package:http/src/request.dart");
  dart.setFieldSignature(request$.Request, () => ({
    __proto__: dart.getFields(request$.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(convert.Encoding),
    [_bodyBytes]: dart.fieldType(typed_data.Uint8List)
  }));
  const _is_Pair_default = Symbol('_is_Pair_default');
  const first$ = dart.privateName(utils, "Pair.first");
  const last$ = dart.privateName(utils, "Pair.last");
  utils.Pair$ = dart.generic((E, F) => {
    class Pair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        this[first$] = E._check(value);
      }
      get last() {
        return this[last$];
      }
      set last(value) {
        this[last$] = F._check(value);
      }
      toString() {
        return "(" + dart.str(this.first) + ", " + dart.str(this.last) + ")";
      }
      _equals(other) {
        if (other == null) return false;
        if (!utils.Pair.is(other)) return false;
        return dart.equals(dart.dload(other, 'first'), this.first) && dart.equals(dart.dload(other, 'last'), this.last);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.first)) ^ dart.notNull(dart.hashCode(this.last))) >>> 0;
      }
    }
    (Pair.new = function(first, last) {
      this[first$] = first;
      this[last$] = last;
      ;
    }).prototype = Pair.prototype;
    dart.addTypeTests(Pair);
    Pair.prototype[_is_Pair_default] = true;
    dart.setLibraryUri(Pair, "package:http/src/utils.dart");
    dart.setFieldSignature(Pair, () => ({
      __proto__: dart.getFields(Pair.__proto__),
      first: dart.fieldType(E),
      last: dart.fieldType(F)
    }));
    dart.defineExtensionMethods(Pair, ['toString', '_equals']);
    dart.defineExtensionAccessors(Pair, ['hashCode']);
    return Pair;
  });
  utils.Pair = utils.Pair$();
  dart.addTypeTests(utils.Pair, _is_Pair_default);
  const Latin1Codec__allowInvalid = dart.privateName(convert, "Latin1Codec._allowInvalid");
  let C0;
  utils.mapToQuery = function mapToQuery(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => pairs[$add](JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: encoding}), core.Uri.encodeQueryComponent(value, {encoding: encoding})])), StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => dart.str(pair[$_get](0)) + "=" + dart.str(pair[$_get](1)), ListOfStringToString()))[$join]("&");
  };
  utils.split1 = function split1(toSplit, pattern) {
    if (toSplit[$isEmpty]) return JSArrayOfString().of([]);
    let index = toSplit[$indexOf](pattern);
    if (index === -1) return JSArrayOfString().of([toSplit]);
    return JSArrayOfString().of([toSplit[$substring](0, index), toSplit[$substring](index + pattern.length)]);
  };
  utils.encodingForCharset = function encodingForCharset(charset, fallback) {
    if (fallback === void 0) fallback = C0 || CT.C0;
    if (charset == null) return fallback;
    let encoding = convert.Encoding.getByName(charset);
    return encoding == null ? fallback : encoding;
  };
  utils.requiredEncodingForCharset = function requiredEncodingForCharset(charset) {
    let encoding = convert.Encoding.getByName(charset);
    if (encoding != null) return encoding;
    dart.throw(new core.FormatException.new("Unsupported encoding \"" + dart.str(charset) + "\"."));
  };
  utils.isPlainAscii = function isPlainAscii(string) {
    return utils._ASCII_ONLY.hasMatch(string);
  };
  utils.toUint8List = function toUint8List(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return _native_typed_data.NativeUint8List.fromList(input);
  };
  utils.toByteStream = function toByteStream(stream) {
    if (byte_stream.ByteStream.is(stream)) return stream;
    return new byte_stream.ByteStream.new(stream);
  };
  utils.onDone = function onDone(T, stream, onDone) {
    return stream.transform(T, new (async._StreamHandlerTransformer$(T, T)).new({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))}));
  };
  utils.store = function store(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => {
        sink.close();
        completer.complete();
      }, VoidToNull())});
    return completer.future;
  };
  utils.writeStreamToSink = function writeStreamToSink(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => completer.complete(), VoidTovoid())});
    return completer.future;
  };
  utils.chainToCompleter = function chainToCompleter(future, completer) {
    future.then(dart.void, dart.bind(completer, 'complete'), {onError: dart.bind(completer, 'completeError')});
  };
  dart.defineLazy(utils, {
    /*utils._ASCII_ONLY*/get _ASCII_ONLY() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  });
  const Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  let C1;
  byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static fromBytes(bytes) {
      return new byte_stream.ByteStream.new(StreamOfListOfint().fromIterable(JSArrayOfListOfint().of([bytes])));
    }
    toBytes() {
      let completer = CompleterOfUint8List().new();
      let sink = new convert._ByteCallbackSink.new(dart.fn(bytes => completer.complete(_native_typed_data.NativeUint8List.fromList(bytes)), ListOfintTovoid()));
      this.listen(dart.bind(sink, 'add'), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding) {
      if (encoding === void 0) encoding = C1 || CT.C1;
      return encoding.decodeStream(this);
    }
    toStringStream(encoding) {
      if (encoding === void 0) encoding = C1 || CT.C1;
      return encoding.decoder.bind(this);
    }
  };
  (byte_stream.ByteStream.new = function(stream) {
    byte_stream.ByteStream.__proto__.new.call(this, stream);
    ;
  }).prototype = byte_stream.ByteStream.prototype;
  dart.addTypeTests(byte_stream.ByteStream);
  dart.setMethodSignature(byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  dart.setLibraryUri(byte_stream.ByteStream, "package:http/src/byte_stream.dart");
  let C2;
  const request$0 = dart.privateName(base_response, "BaseResponse.request");
  const statusCode$ = dart.privateName(base_response, "BaseResponse.statusCode");
  const reasonPhrase$ = dart.privateName(base_response, "BaseResponse.reasonPhrase");
  const contentLength$ = dart.privateName(base_response, "BaseResponse.contentLength");
  const headers$ = dart.privateName(base_response, "BaseResponse.headers");
  const isRedirect$ = dart.privateName(base_response, "BaseResponse.isRedirect");
  const persistentConnection$ = dart.privateName(base_response, "BaseResponse.persistentConnection");
  base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$0];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C2 || CT.C2;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$0] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (dart.notNull(this.statusCode) < 100) {
      dart.throw(new core.ArgumentError.new("Invalid status code " + dart.str(this.statusCode) + "."));
    } else if (this.contentLength != null && dart.notNull(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(this.contentLength) + "."));
    }
  }).prototype = base_response.BaseResponse.prototype;
  dart.addTypeTests(base_response.BaseResponse);
  dart.setLibraryUri(base_response.BaseResponse, "package:http/src/base_response.dart");
  dart.setFieldSignature(base_response.BaseResponse, () => ({
    __proto__: dart.getFields(base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(base_request.BaseRequest),
    statusCode: dart.finalFieldType(core.int),
    reasonPhrase: dart.finalFieldType(core.String),
    contentLength: dart.finalFieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    isRedirect: dart.finalFieldType(core.bool),
    persistentConnection: dart.finalFieldType(core.bool)
  }));
  const stream$ = dart.privateName(streamed_response, "StreamedResponse.stream");
  streamed_response.StreamedResponse = class StreamedResponse extends base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
  };
  (streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C2 || CT.C2;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = utils.toByteStream(stream);
    streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(streamed_response.StreamedResponse);
  dart.setLibraryUri(streamed_response.StreamedResponse, "package:http/src/streamed_response.dart");
  dart.setFieldSignature(streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(byte_stream.ByteStream)
  }));
  client$.Client = class Client extends core.Object {
    static new() {
      return browser_client.createClient();
    }
  };
  (client$.Client[dart.mixinNew] = function() {
  }).prototype = client$.Client.prototype;
  dart.addTypeTests(client$.Client);
  dart.setLibraryUri(client$.Client, "package:http/src/client.dart");
  const bodyBytes$ = dart.privateName(response$, "Response.bodyBytes");
  response$.Response = class Response extends base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return response$._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static fromStream(response) {
      return response.stream.toBytes().then(response$.Response, dart.fn(body => new response$.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase}), Uint8ListToResponse()));
    }
  };
  (response$.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C2 || CT.C2;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    response$.Response.bytes.call(this, response$._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = response$.Response.prototype;
  (response$.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C2 || CT.C2;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = utils.toUint8List(bodyBytes);
    response$.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = response$.Response.prototype;
  dart.addTypeTests(response$.Response);
  dart.setGetterSignature(response$.Response, () => ({
    __proto__: dart.getGetters(response$.Response.__proto__),
    body: core.String
  }));
  dart.setLibraryUri(response$.Response, "package:http/src/response.dart");
  dart.setFieldSignature(response$.Response, () => ({
    __proto__: dart.getFields(response$.Response.__proto__),
    bodyBytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  response$._encodingForHeaders = function _encodingForHeaders(headers) {
    return utils.encodingForCharset(response$._contentTypeForHeaders(headers).parameters[$_get]("charset"));
  };
  response$._contentTypeForHeaders = function _contentTypeForHeaders(headers) {
    let contentType = headers[$_get]("content-type");
    if (contentType != null) return media_type.MediaType.parse(contentType);
    return new media_type.MediaType.new("application", "octet-stream");
  };
  const _xhrs = dart.privateName(browser_client, "_xhrs");
  const _openHttpRequest = dart.privateName(browser_client, "_openHttpRequest");
  const _sendUnstreamed = dart.privateName(base_client, "_sendUnstreamed");
  const _checkResponseSuccess = dart.privateName(base_client, "_checkResponseSuccess");
  base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("DELETE", url, headers);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this.get(url, {headers: headers}).then(core.String, dart.fn(response => {
        this[_checkResponseSuccess](url, response);
        return response.body;
      }, ResponseToString()));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this.get(url, {headers: headers}).then(typed_data.Uint8List, dart.fn(response => {
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }, ResponseToUint8List()));
    }
    [_sendUnstreamed](method, url, headers, body, encoding) {
      if (body === void 0) body = null;
      if (encoding === void 0) encoding = null;
      return async.async(response$.Response, (function* _sendUnstreamed() {
        if (typeof url == 'string') url = core.Uri.parse(core.String._check(url));
        let request = new request$.Request.new(method, core.Uri._check(url));
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (typeof body == 'string') {
            request.body = body;
          } else if (core.List.is(body)) {
            request.bodyBytes = body[$cast](core.int);
          } else if (core.Map.is(body)) {
            request.bodyFields = body[$cast](core.String, core.String);
          } else {
            dart.throw(new core.ArgumentError.new("Invalid request body \"" + dart.str(body) + "\"."));
          }
        }
        return response$.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (dart.notNull(response.statusCode) < 400) return;
      let message = "Request to " + dart.str(url) + " failed with status " + dart.str(response.statusCode);
      if (response.reasonPhrase != null) {
        message = message + ": " + dart.str(response.reasonPhrase);
      }
      if (typeof url == 'string') url = core.Uri.parse(core.String._check(url));
      dart.throw(new exception.ClientException.new(message + ".", core.Uri._check(url)));
    }
    close() {
    }
  };
  (base_client.BaseClient.new = function() {
    ;
  }).prototype = base_client.BaseClient.prototype;
  dart.addTypeTests(base_client.BaseClient);
  base_client.BaseClient[dart.implements] = () => [client$.Client];
  dart.setMethodSignature(base_client.BaseClient, () => ({
    __proto__: dart.getMethods(base_client.BaseClient.__proto__),
    head: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    get: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    post: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}, {}),
    put: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}, {}),
    patch: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}, {}),
    delete: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    read: dart.fnType(async.Future$(core.String), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    readBytes: dart.fnType(async.Future$(typed_data.Uint8List), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    [_sendUnstreamed]: dart.fnType(async.Future$(response$.Response), [core.String, dart.dynamic, core.Map$(core.String, core.String)], [dart.dynamic, convert.Encoding]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [dart.dynamic, response$.Response]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(base_client.BaseClient, "package:http/src/base_client.dart");
  const withCredentials = dart.privateName(browser_client, "BrowserClient.withCredentials");
  browser_client.BrowserClient = class BrowserClient extends base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        this[_openHttpRequest](xhr, request.method, dart.toString(request.url), {asynch: true});
        xhr.responseType = "blob";
        xhr.withCredentials = this.withCredentials;
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = CompleterOfStreamedResponse().new();
        pedantic.unawaited(xhr[$onLoad].first.then(dart.void, dart.fn(_ => {
          let blob = xhr[$response] == null ? html.Blob.new([]) : xhr[$response];
          let reader = html.FileReader.new();
          reader[$onLoad].first.then(core.Null, dart.fn(_ => {
            let body = typed_data.Uint8List.as(reader[$result]);
            completer.complete(new streamed_response.StreamedResponse.new(byte_stream.ByteStream.fromBytes(body), xhr.status, {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
          }, ProgressEventToNull()));
          reader[$onError].first.then(core.Null, dart.fn(error => {
            completer.completeError(new exception.ClientException.new(dart.toString(error), request.url), core.StackTrace.current);
          }, ProgressEventToNull()));
          reader.readAsArrayBuffer(html.Blob._check(blob));
        }, ProgressEventToNull())));
        pedantic.unawaited(xhr[$onError].first.then(dart.void, dart.fn(_ => {
          completer.completeError(new exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, ProgressEventToNull())));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    [_openHttpRequest](request, method, url, opts) {
      let asynch = opts && 'asynch' in opts ? opts.asynch : null;
      let user = opts && 'user' in opts ? opts.user : null;
      let password = opts && 'password' in opts ? opts.password : null;
      request.open(method, url, {async: asynch, user: user, password: password});
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
  };
  (browser_client.BrowserClient.new = function() {
    this[_xhrs] = new (_HashSetOfHttpRequest()).new();
    this[withCredentials] = false;
    ;
  }).prototype = browser_client.BrowserClient.prototype;
  dart.addTypeTests(browser_client.BrowserClient);
  dart.setMethodSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(browser_client.BrowserClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest]),
    [_openHttpRequest]: dart.fnType(dart.void, [html.HttpRequest, core.String, core.String], {asynch: core.bool, password: core.String, user: core.String}, {})
  }));
  dart.setLibraryUri(browser_client.BrowserClient, "package:http/src/browser_client.dart");
  dart.setFieldSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(core.Set$(html.HttpRequest)),
    withCredentials: dart.fieldType(core.bool)
  }));
  browser_client.createClient = function createClient() {
    return new browser_client.BrowserClient.new();
  };
  const message$ = dart.privateName(exception, "ClientException.message");
  const uri$ = dart.privateName(exception, "ClientException.uri");
  exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this.message;
    }
  };
  (exception.ClientException.new = function(message, uri) {
    if (uri === void 0) uri = null;
    this[message$] = message;
    this[uri$] = uri;
    ;
  }).prototype = exception.ClientException.prototype;
  dart.addTypeTests(exception.ClientException);
  exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exception.ClientException, "package:http/src/exception.dart");
  dart.setFieldSignature(exception.ClientException, () => ({
    __proto__: dart.getFields(exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.defineExtensionMethods(exception.ClientException, ['toString']);
  dart.trackLibraries("packages/http/src/base_client", {
    "package:http/src/request.dart": request$,
    "package:http/src/utils.dart": utils,
    "package:http/src/byte_stream.dart": byte_stream,
    "package:http/src/base_request.dart": base_request,
    "package:http/src/streamed_response.dart": streamed_response,
    "package:http/src/base_response.dart": base_response,
    "package:http/src/client.dart": client$,
    "package:http/src/response.dart": response$,
    "package:http/src/browser_client.dart": browser_client,
    "package:http/src/exception.dart": exception,
    "package:http/src/base_client.dart": base_client
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_request.dart","request.dart","utils.dart","byte_stream.dart","base_response.dart","streamed_response.dart","client.dart","response.dart","base_client.dart","browser_client.dart","exception.dart"],"names":[],"mappings":"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","file":"base_client.ddc.js"}');
  // Exports:
  return {
    src__request: request$,
    src__utils: utils,
    src__byte_stream: byte_stream,
    src__base_request: base_request,
    src__streamed_response: streamed_response,
    src__base_response: base_response,
    src__client: client$,
    src__response: response$,
    src__browser_client: browser_client,
    src__exception: exception,
    src__base_client: base_client
  };
});

//# sourceMappingURL=base_client.ddc.js.map
