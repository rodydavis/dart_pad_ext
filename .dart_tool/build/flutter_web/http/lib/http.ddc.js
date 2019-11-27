define(['dart_sdk', 'packages/http/src/base_client', 'packages/http_parser/http_parser'], function(dart_sdk, packages__http__src__base_client, packages__http_parser__http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__http__src__base_client.src__utils;
  const byte_stream = packages__http__src__base_client.src__byte_stream;
  const response = packages__http__src__base_client.src__response;
  const client$ = packages__http__src__base_client.src__client;
  const base_request = packages__http__src__base_client.src__base_request;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const multipart_file_stub = Object.create(dart.library);
  const multipart_file = Object.create(dart.library);
  const http = Object.create(dart.library);
  const streamed_request = Object.create(dart.library);
  const multipart_request = Object.create(dart.library);
  const boundary_characters = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $replaceAll = dartx.replaceAll;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(response.Response)))();
  let ClientToFutureOfResponse = () => (ClientToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [client$.Client])))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let ClientToFutureOfString = () => (ClientToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [client$.Client])))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let ClientToFutureOfUint8List = () => (ClientToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [client$.Client])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  let JSArrayOfMultipartFile = () => (JSArrayOfMultipartFile = dart.constFn(_interceptors.JSArray$(multipart_file.MultipartFile)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    }
  });
  multipart_file_stub.multipartFileFromPath = function multipartFileFromPath(field, filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available."));
  };
  const _isFinalized = dart.privateName(multipart_file, "_isFinalized");
  const _stream = dart.privateName(multipart_file, "_stream");
  const field$ = dart.privateName(multipart_file, "MultipartFile.field");
  const length$ = dart.privateName(multipart_file, "MultipartFile.length");
  const filename$ = dart.privateName(multipart_file, "MultipartFile.filename");
  const contentType$ = dart.privateName(multipart_file, "MultipartFile.contentType");
  multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = byte_stream.ByteStream.fromBytes(value);
      return new multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType = contentType == null ? new media_type.MediaType.new("text", "plain") : contentType;
      let encoding = utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", encoding.name])});
      return multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPath(field, filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = utils.toByteStream(stream);
    this[contentType$] = contentType != null ? contentType : new media_type.MediaType.new("application", "octet-stream");
    ;
  }).prototype = multipart_file.MultipartFile.prototype;
  dart.addTypeTests(multipart_file.MultipartFile);
  dart.setMethodSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, [])
  }));
  dart.setGetterSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setLibraryUri(multipart_file.MultipartFile, "package:http/src/multipart_file.dart");
  dart.setFieldSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(core.String),
    contentType: dart.finalFieldType(media_type.MediaType),
    [_stream]: dart.finalFieldType(byte_stream.ByteStream),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  http.head = function head(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response.Response, dart.fn(client => client.head(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.get = function get(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response.Response, dart.fn(client => client.get(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.post = function post(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response.Response, dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.put = function put(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response.Response, dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.patch = function patch(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response.Response, dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.delete = function $delete(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response.Response, dart.fn(client => client.delete(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.read = function read(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(core.String, dart.fn(client => client.read(url, {headers: headers}), ClientToFutureOfString()));
  };
  http.readBytes = function readBytes(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(typed_data.Uint8List, dart.fn(client => client.readBytes(url, {headers: headers}), ClientToFutureOfUint8List()));
  };
  http._withClient = function _withClient(T, fn) {
    return async.async(T, function* _withClient() {
      let client = client$.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  const _controller = dart.privateName(streamed_request, "_controller");
  streamed_request.StreamedRequest = class StreamedRequest extends base_request.BaseRequest {
    get sink() {
      return this[_controller].sink;
    }
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_controller].stream);
    }
  };
  (streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller] = StreamControllerOfListOfint().new({sync: true});
    streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(streamed_request.StreamedRequest);
  dart.setGetterSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(streamed_request.StreamedRequest.__proto__),
    sink: async.EventSink$(core.List$(core.int))
  }));
  dart.setLibraryUri(streamed_request.StreamedRequest, "package:http/src/streamed_request.dart");
  dart.setFieldSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(streamed_request.StreamedRequest.__proto__),
    [_controller]: dart.finalFieldType(async.StreamController$(core.List$(core.int)))
  }));
  const _files = dart.privateName(multipart_request, "_files");
  const _headerForField = dart.privateName(multipart_request, "_headerForField");
  const _headerForFile = dart.privateName(multipart_request, "_headerForFile");
  const _boundaryString = dart.privateName(multipart_request, "_boundaryString");
  const _browserEncode = dart.privateName(multipart_request, "_browserEncode");
  const fields = dart.privateName(multipart_request, "MultipartRequest.fields");
  multipart_request.MultipartRequest = class MultipartRequest extends base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[_files];
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForField](name, value))[$length]) + dart.notNull(convert.utf8.encode(value)[$length]) + "\r\n".length);
      }, StringAndStringToNull()));
      for (let file of this[_files]) {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForFile](file))[$length]) + dart.notNull(file.length) + "\r\n".length);
      }
      return length + "--".length + 70 + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]("content-type", "multipart/form-data; boundary=" + dart.str(boundary));
      super.finalize();
      let controller = StreamControllerOfListOfint().new({sync: true});
      function writeAscii(string) {
        controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeAscii, StringTovoid());
      function writeUtf8(string) {
        return controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeUtf8, StringTovoid());
      function writeLine() {
        return controller.add(JSArrayOfint().of([13, 10]));
      }
      dart.fn(writeLine, VoidTovoid());
      this.fields[$forEach](dart.fn((name, value) => {
        writeAscii("--" + dart.str(boundary) + "\r\n");
        writeAscii(this[_headerForField](name, value));
        writeUtf8(value);
        writeLine();
      }, StringAndStringToNull()));
      async.Future.forEach(multipart_file.MultipartFile, this[_files], dart.fn(file => {
        writeAscii("--" + dart.str(boundary) + "\r\n");
        writeAscii(this[_headerForFile](multipart_file.MultipartFile._check(file)));
        return utils.writeStreamToSink(async.Stream._check(dart.dsend(file, 'finalize', [])), controller).then(dart.dynamic, dart.fn(_ => writeLine(), dynamicTovoid()));
      }, dynamicToFuture())).then(core.Null, dart.fn(_ => {
        writeAscii("--" + dart.str(boundary) + "--\r\n");
        controller.close();
      }, dynamicToNull()));
      return new byte_stream.ByteStream.new(controller.stream);
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](name)) + "\"";
      if (!dart.test(utils.isPlainAscii(value))) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](file) {
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](file.field)) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + dart.str(this[_browserEncode](file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]("\"", "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = ListOfint().generate(70 - prefix.length, dart.fn(index => boundary_characters.BOUNDARY_CHARACTERS[$_get](multipart_request.MultipartRequest._random.nextInt(boundary_characters.BOUNDARY_CHARACTERS[$length])), intToint()), {growable: false});
      return prefix + dart.str(core.String.fromCharCodes(list));
    }
  };
  (multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (IdentityMapOfString$String()).new();
    this[_files] = JSArrayOfMultipartFile().of([]);
    multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(multipart_request.MultipartRequest);
  dart.setMethodSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(multipart_request.MultipartRequest.__proto__),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [multipart_file.MultipartFile]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    [_boundaryString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getGetters(multipart_request.MultipartRequest.__proto__),
    files: core.List$(multipart_file.MultipartFile)
  }));
  dart.setLibraryUri(multipart_request.MultipartRequest, "package:http/src/multipart_request.dart");
  dart.setFieldSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_files]: dart.finalFieldType(core.List$(multipart_file.MultipartFile))
  }));
  dart.defineLazy(multipart_request.MultipartRequest, {
    /*multipart_request.MultipartRequest._BOUNDARY_LENGTH*/get _BOUNDARY_LENGTH() {
      return 70;
    },
    /*multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  });
  dart.defineLazy(multipart_request, {
    /*multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  });
  let C0;
  dart.defineLazy(boundary_characters, {
    /*boundary_characters.BOUNDARY_CHARACTERS*/get BOUNDARY_CHARACTERS() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/http/http", {
    "package:http/src/multipart_file_stub.dart": multipart_file_stub,
    "package:http/src/multipart_file.dart": multipart_file,
    "package:http/http.dart": http,
    "package:http/src/streamed_request.dart": streamed_request,
    "package:http/src/multipart_request.dart": multipart_request,
    "package:http/src/boundary_characters.dart": boundary_characters
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/multipart_file_stub.dart","src/multipart_file.dart","http.dart","src/streamed_request.dart","src/multipart_request.dart","src/boundary_characters.dart"],"names":[],"mappings":"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","file":"http.ddc.js"}');
  // Exports:
  return {
    src__multipart_file_stub: multipart_file_stub,
    src__multipart_file: multipart_file,
    http: http,
    src__streamed_request: streamed_request,
    src__multipart_request: multipart_request,
    src__boundary_characters: boundary_characters
  };
});

//# sourceMappingURL=http.ddc.js.map
