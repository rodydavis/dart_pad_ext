define(['dart_sdk', 'packages/http/src/base_client'], function(dart_sdk, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const streamed_response = packages__http__src__base_client.src__streamed_response;
  const client = packages__http__src__base_client.src__client;
  const byte_stream = packages__http__src__base_client.src__byte_stream;
  const base_request = packages__http__src__base_client.src__base_request;
  const _discoveryapis_commons = Object.create(dart.library);
  const requests = Object.create(dart.library);
  const clients = Object.create(dart.library);
  const version_fallback = Object.create(dart.library);
  const $modulo = dartx['%'];
  const $leftShift = dartx['<<'];
  const $_get = dartx._get;
  const $endsWith = dartx.endsWith;
  const $cast = dartx.cast;
  const $isEmpty = dartx.isEmpty;
  const $startsWith = dartx.startsWith;
  const $_set = dartx._set;
  const $substring = dartx.substring;
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $addAll = dartx.addAll;
  const $length = dartx.length;
  const $removeWhere = dartx.removeWhere;
  const $truncate = dartx.truncate;
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $clear = dartx.clear;
  const $sublist = dartx.sublist;
  const $first = dartx.first;
  const $toString = dartx.toString;
  const $removeRange = dartx.removeRange;
  const $replaceAll = dartx.replaceAll;
  const $containsKey = dartx.containsKey;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $toLowerCase = dartx.toLowerCase;
  let intToDuration = () => (intToDuration = dart.constFn(dart.fnType(core.Duration, [core.int])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let IdentityMapOfString$ListOfString = () => (IdentityMapOfString$ListOfString = dart.constFn(_js_helper.IdentityMap$(core.String, ListOfString())))();
  let StringAndStringTovoid = () => (StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))();
  let StringAndListOfStringToNull = () => (StringAndListOfStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, ListOfString()])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let FutureOfStreamedResponse = () => (FutureOfStreamedResponse = dart.constFn(async.Future$(streamed_response.StreamedResponse)))();
  let VoidToFutureOfStreamedResponse = () => (VoidToFutureOfStreamedResponse = dart.constFn(dart.fnType(FutureOfStreamedResponse(), [])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfint()])))();
  let dynamicAndStackTraceTovoid = () => (dynamicAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let CompleterOfStreamedResponse = () => (CompleterOfStreamedResponse = dart.constFn(async.Completer$(streamed_response.StreamedResponse)))();
  let ResumableChunkToFuture = () => (ResumableChunkToFuture = dart.constFn(dart.fnType(async.Future, [clients.ResumableChunk])))();
  let ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  let StreamedResponseToNull = () => (StreamedResponseToNull = dart.constFn(dart.fnType(core.Null, [streamed_response.StreamedResponse])))();
  let UriToFutureOfStreamedResponse = () => (UriToFutureOfStreamedResponse = dart.constFn(dart.fnType(FutureOfStreamedResponse(), [core.Uri])))();
  let dynamicToUri = () => (dynamicToUri = dart.constFn(dart.fnType(core.Uri, [dart.dynamic])))();
  let FutureOfUri = () => (FutureOfUri = dart.constFn(async.Future$(core.Uri)))();
  let StreamedResponseToFutureOfUri = () => (StreamedResponseToFutureOfUri = dart.constFn(dart.fnType(FutureOfUri(), [streamed_response.StreamedResponse])))();
  let StreamedResponseToFuture = () => (StreamedResponseToFuture = dart.constFn(dart.fnType(async.Future, [streamed_response.StreamedResponse])))();
  let dynamicToFutureOfStreamedResponse = () => (dynamicToFutureOfStreamedResponse = dart.constFn(dart.fnType(FutureOfStreamedResponse(), [dart.dynamic])))();
  let FutureOrOfStreamedResponse = () => (FutureOrOfStreamedResponse = dart.constFn(async.FutureOr$(streamed_response.StreamedResponse)))();
  let StreamedResponseToFutureOrOfStreamedResponse = () => (StreamedResponseToFutureOrOfStreamedResponse = dart.constFn(dart.fnType(FutureOrOfStreamedResponse(), [streamed_response.StreamedResponse])))();
  let intToFutureOfStreamedResponse = () => (intToFutureOfStreamedResponse = dart.constFn(dart.fnType(FutureOfStreamedResponse(), [core.int])))();
  let JSArrayOfResumableChunk = () => (JSArrayOfResumableChunk = dart.constFn(_interceptors.JSArray$(clients.ResumableChunk)))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let JSArrayOfApiRequestErrorDetail = () => (JSArrayOfApiRequestErrorDetail = dart.constFn(_interceptors.JSArray$(requests.ApiRequestErrorDetail)))();
  let dynamicToApiRequestErrorDetail = () => (dynamicToApiRequestErrorDetail = dart.constFn(dart.fnType(requests.ApiRequestErrorDetail, [dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: requests.UploadOptions.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: requests.DownloadOptions.prototype
      });
    },
    get C2() {
      return C2 = dart.constList([], requests.ApiRequestErrorDetail);
    },
    get C3() {
      return C3 = dart.constList(["resumable"], core.String);
    },
    get C4() {
      return C4 = dart.constList(["media"], core.String);
    },
    get C5() {
      return C5 = dart.constList(["multipart"], core.String);
    },
    get C6() {
      return C6 = dart.constList(["json"], core.String);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: convert.Utf8Decoder.prototype,
        [Utf8Decoder__allowMalformed]: true
      });
    },
    get C8() {
      return C8 = dart.constList(["user-agent", "content-length"], core.String);
    }
  });
  const stream$ = dart.privateName(requests, "Media.stream");
  const contentType$ = dart.privateName(requests, "Media.contentType");
  const length$ = dart.privateName(requests, "Media.length");
  requests.Media = class Media extends core.Object {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
  };
  (requests.Media.new = function(stream, length, opts) {
    let contentType = opts && 'contentType' in opts ? opts.contentType : "application/octet-stream";
    this[stream$] = stream;
    this[length$] = length;
    this[contentType$] = contentType;
    if (this.stream == null || this.contentType == null) {
      dart.throw(new core.ArgumentError.new("Arguments stream, contentType and length must not be null."));
    }
    if (this.length != null && dart.notNull(this.length) < 0) {
      dart.throw(new core.ArgumentError.new("A negative content length is not allowed"));
    }
  }).prototype = requests.Media.prototype;
  dart.addTypeTests(requests.Media);
  dart.setLibraryUri(requests.Media, "package:_discoveryapis_commons/src/requests.dart");
  dart.setFieldSignature(requests.Media, () => ({
    __proto__: dart.getFields(requests.Media.__proto__),
    stream: dart.finalFieldType(async.Stream$(core.List$(core.int))),
    contentType: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int)
  }));
  let C0;
  requests.UploadOptions = class UploadOptions extends core.Object {};
  (requests.UploadOptions.new = function() {
    ;
  }).prototype = requests.UploadOptions.prototype;
  dart.addTypeTests(requests.UploadOptions);
  dart.setLibraryUri(requests.UploadOptions, "package:_discoveryapis_commons/src/requests.dart");
  dart.defineLazy(requests.UploadOptions, {
    /*requests.UploadOptions.Default*/get Default() {
      return C0 || CT.C0;
    },
    /*requests.UploadOptions.Resumable*/get Resumable() {
      return new requests.ResumableUploadOptions.new();
    }
  });
  const numberOfAttempts$ = dart.privateName(requests, "ResumableUploadOptions.numberOfAttempts");
  const chunkSize$ = dart.privateName(requests, "ResumableUploadOptions.chunkSize");
  const backoffFunction$ = dart.privateName(requests, "ResumableUploadOptions.backoffFunction");
  requests.ResumableUploadOptions = class ResumableUploadOptions extends requests.UploadOptions {
    get numberOfAttempts() {
      return this[numberOfAttempts$];
    }
    set numberOfAttempts(value) {
      super.numberOfAttempts = value;
    }
    get chunkSize() {
      return this[chunkSize$];
    }
    set chunkSize(value) {
      super.chunkSize = value;
    }
    get backoffFunction() {
      return this[backoffFunction$];
    }
    set backoffFunction(value) {
      super.backoffFunction = value;
    }
  };
  (requests.ResumableUploadOptions.new = function(opts) {
    let numberOfAttempts = opts && 'numberOfAttempts' in opts ? opts.numberOfAttempts : 3;
    let chunkSize = opts && 'chunkSize' in opts ? opts.chunkSize : 1048576;
    let backoffFunction = opts && 'backoffFunction' in opts ? opts.backoffFunction : null;
    this[numberOfAttempts$] = numberOfAttempts;
    this[chunkSize$] = chunkSize;
    this[backoffFunction$] = backoffFunction == null ? requests.ResumableUploadOptions.ExponentialBackoff : backoffFunction;
    requests.ResumableUploadOptions.__proto__.new.call(this);
    if (dart.notNull(this.numberOfAttempts) < 1 || this.chunkSize[$modulo](256 * 1024) !== 0) {
      dart.throw(new core.ArgumentError.new("Invalid arguments."));
    }
  }).prototype = requests.ResumableUploadOptions.prototype;
  dart.addTypeTests(requests.ResumableUploadOptions);
  dart.setLibraryUri(requests.ResumableUploadOptions, "package:_discoveryapis_commons/src/requests.dart");
  dart.setFieldSignature(requests.ResumableUploadOptions, () => ({
    __proto__: dart.getFields(requests.ResumableUploadOptions.__proto__),
    numberOfAttempts: dart.finalFieldType(core.int),
    chunkSize: dart.finalFieldType(core.int),
    backoffFunction: dart.finalFieldType(core.Function)
  }));
  dart.defineLazy(requests.ResumableUploadOptions, {
    /*requests.ResumableUploadOptions.ExponentialBackoff*/get ExponentialBackoff() {
      return dart.fn(failedAttempts => {
        if (dart.notNull(failedAttempts) > 5) return null;
        return new core.Duration.new({seconds: (1)[$leftShift](dart.notNull(failedAttempts) - 1)});
      }, intToDuration());
    }
  });
  let C1;
  requests.DownloadOptions = class DownloadOptions extends core.Object {
    get isMetadataDownload() {
      return true;
    }
  };
  (requests.DownloadOptions.new = function() {
    ;
  }).prototype = requests.DownloadOptions.prototype;
  dart.addTypeTests(requests.DownloadOptions);
  dart.setGetterSignature(requests.DownloadOptions, () => ({
    __proto__: dart.getGetters(requests.DownloadOptions.__proto__),
    isMetadataDownload: core.bool
  }));
  dart.setLibraryUri(requests.DownloadOptions, "package:_discoveryapis_commons/src/requests.dart");
  dart.defineLazy(requests.DownloadOptions, {
    /*requests.DownloadOptions.Metadata*/get Metadata() {
      return C1 || CT.C1;
    },
    /*requests.DownloadOptions.FullMedia*/get FullMedia() {
      return new requests.PartialDownloadOptions.new(new requests.ByteRange.new(0, -1));
    }
  });
  const range$ = dart.privateName(requests, "PartialDownloadOptions.range");
  requests.PartialDownloadOptions = class PartialDownloadOptions extends requests.DownloadOptions {
    get range() {
      return this[range$];
    }
    set range(value) {
      super.range = value;
    }
    get isMetadataDownload() {
      return false;
    }
    get isFullDownload() {
      return this.range.start === 0 && this.range.end === -1;
    }
  };
  (requests.PartialDownloadOptions.new = function(range) {
    this[range$] = range;
    requests.PartialDownloadOptions.__proto__.new.call(this);
    ;
  }).prototype = requests.PartialDownloadOptions.prototype;
  dart.addTypeTests(requests.PartialDownloadOptions);
  dart.setGetterSignature(requests.PartialDownloadOptions, () => ({
    __proto__: dart.getGetters(requests.PartialDownloadOptions.__proto__),
    isFullDownload: core.bool
  }));
  dart.setLibraryUri(requests.PartialDownloadOptions, "package:_discoveryapis_commons/src/requests.dart");
  dart.setFieldSignature(requests.PartialDownloadOptions, () => ({
    __proto__: dart.getFields(requests.PartialDownloadOptions.__proto__),
    range: dart.finalFieldType(requests.ByteRange)
  }));
  const start$ = dart.privateName(requests, "ByteRange.start");
  const end$ = dart.privateName(requests, "ByteRange.end");
  requests.ByteRange = class ByteRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get length() {
      return dart.notNull(this.end) - dart.notNull(this.start) + 1;
    }
  };
  (requests.ByteRange.new = function(start, end) {
    this[start$] = start;
    this[end$] = end;
    if (!(this.start === 0 && this.end === -1 || dart.notNull(this.start) >= 0 && dart.notNull(this.end) >= dart.notNull(this.start))) {
      dart.throw(new core.ArgumentError.new("Invalid media range [" + dart.str(this.start) + ", " + dart.str(this.end) + "]"));
    }
  }).prototype = requests.ByteRange.prototype;
  dart.addTypeTests(requests.ByteRange);
  dart.setGetterSignature(requests.ByteRange, () => ({
    __proto__: dart.getGetters(requests.ByteRange.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(requests.ByteRange, "package:_discoveryapis_commons/src/requests.dart");
  dart.setFieldSignature(requests.ByteRange, () => ({
    __proto__: dart.getFields(requests.ByteRange.__proto__),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int)
  }));
  const message$ = dart.privateName(requests, "ApiRequestError.message");
  requests.ApiRequestError = class ApiRequestError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "ApiRequestError(message: " + dart.str(this.message) + ")";
    }
  };
  (requests.ApiRequestError.new = function(message) {
    this[message$] = message;
    requests.ApiRequestError.__proto__.new.call(this);
    ;
  }).prototype = requests.ApiRequestError.prototype;
  dart.addTypeTests(requests.ApiRequestError);
  dart.setLibraryUri(requests.ApiRequestError, "package:_discoveryapis_commons/src/requests.dart");
  dart.setFieldSignature(requests.ApiRequestError, () => ({
    __proto__: dart.getFields(requests.ApiRequestError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(requests.ApiRequestError, ['toString']);
  let C2;
  const status$ = dart.privateName(requests, "DetailedApiRequestError.status");
  const errors$ = dart.privateName(requests, "DetailedApiRequestError.errors");
  const jsonResponse$ = dart.privateName(requests, "DetailedApiRequestError.jsonResponse");
  requests.DetailedApiRequestError = class DetailedApiRequestError extends requests.ApiRequestError {
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      super.errors = value;
    }
    get jsonResponse() {
      return this[jsonResponse$];
    }
    set jsonResponse(value) {
      super.jsonResponse = value;
    }
    toString() {
      return "DetailedApiRequestError(status: " + dart.str(this.status) + ", message: " + dart.str(this.message) + ")";
    }
  };
  (requests.DetailedApiRequestError.new = function(status, message, opts) {
    let errors = opts && 'errors' in opts ? opts.errors : C2 || CT.C2;
    let jsonResponse = opts && 'jsonResponse' in opts ? opts.jsonResponse : null;
    this[status$] = status;
    this[errors$] = errors;
    this[jsonResponse$] = jsonResponse;
    requests.DetailedApiRequestError.__proto__.new.call(this, message);
    ;
  }).prototype = requests.DetailedApiRequestError.prototype;
  dart.addTypeTests(requests.DetailedApiRequestError);
  dart.setLibraryUri(requests.DetailedApiRequestError, "package:_discoveryapis_commons/src/requests.dart");
  dart.setFieldSignature(requests.DetailedApiRequestError, () => ({
    __proto__: dart.getFields(requests.DetailedApiRequestError.__proto__),
    status: dart.finalFieldType(core.int),
    errors: dart.finalFieldType(core.List$(requests.ApiRequestErrorDetail)),
    jsonResponse: dart.finalFieldType(core.Map$(core.String, dart.dynamic))
  }));
  dart.defineExtensionMethods(requests.DetailedApiRequestError, ['toString']);
  const domain$ = dart.privateName(requests, "ApiRequestErrorDetail.domain");
  const reason$ = dart.privateName(requests, "ApiRequestErrorDetail.reason");
  const message$0 = dart.privateName(requests, "ApiRequestErrorDetail.message");
  const location$ = dart.privateName(requests, "ApiRequestErrorDetail.location");
  const locationType$ = dart.privateName(requests, "ApiRequestErrorDetail.locationType");
  const extendedHelp$ = dart.privateName(requests, "ApiRequestErrorDetail.extendedHelp");
  const sendReport$ = dart.privateName(requests, "ApiRequestErrorDetail.sendReport");
  const originalJson$ = dart.privateName(requests, "ApiRequestErrorDetail.originalJson");
  requests.ApiRequestErrorDetail = class ApiRequestErrorDetail extends core.Object {
    get domain() {
      return this[domain$];
    }
    set domain(value) {
      super.domain = value;
    }
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get locationType() {
      return this[locationType$];
    }
    set locationType(value) {
      super.locationType = value;
    }
    get extendedHelp() {
      return this[extendedHelp$];
    }
    set extendedHelp(value) {
      super.extendedHelp = value;
    }
    get sendReport() {
      return this[sendReport$];
    }
    set sendReport(value) {
      super.sendReport = value;
    }
    get originalJson() {
      return this[originalJson$];
    }
    set originalJson(value) {
      super.originalJson = value;
    }
  };
  (requests.ApiRequestErrorDetail.new = function(opts) {
    let domain = opts && 'domain' in opts ? opts.domain : null;
    let reason = opts && 'reason' in opts ? opts.reason : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let locationType = opts && 'locationType' in opts ? opts.locationType : null;
    let extendedHelp = opts && 'extendedHelp' in opts ? opts.extendedHelp : null;
    let sendReport = opts && 'sendReport' in opts ? opts.sendReport : null;
    this[domain$] = domain;
    this[reason$] = reason;
    this[message$0] = message;
    this[location$] = location;
    this[locationType$] = locationType;
    this[extendedHelp$] = extendedHelp;
    this[sendReport$] = sendReport;
    this[originalJson$] = null;
    ;
  }).prototype = requests.ApiRequestErrorDetail.prototype;
  (requests.ApiRequestErrorDetail.fromJson = function(originalJson) {
    this[originalJson$] = originalJson;
    this[domain$] = core.String.as(originalJson[$_get]("domain"));
    this[reason$] = core.String.as(originalJson[$_get]("reason"));
    this[message$0] = core.String.as(originalJson[$_get]("message"));
    this[location$] = core.String.as(originalJson[$_get]("location"));
    this[locationType$] = core.String.as(originalJson[$_get]("locationType"));
    this[extendedHelp$] = core.String.as(originalJson[$_get]("extendedHelp"));
    this[sendReport$] = core.String.as(originalJson[$_get]("sendReport"));
    ;
  }).prototype = requests.ApiRequestErrorDetail.prototype;
  dart.addTypeTests(requests.ApiRequestErrorDetail);
  dart.setLibraryUri(requests.ApiRequestErrorDetail, "package:_discoveryapis_commons/src/requests.dart");
  dart.setFieldSignature(requests.ApiRequestErrorDetail, () => ({
    __proto__: dart.getFields(requests.ApiRequestErrorDetail.__proto__),
    domain: dart.finalFieldType(core.String),
    reason: dart.finalFieldType(core.String),
    message: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.String),
    locationType: dart.finalFieldType(core.String),
    extendedHelp: dart.finalFieldType(core.String),
    sendReport: dart.finalFieldType(core.String),
    originalJson: dart.finalFieldType(core.Map)
  }));
  const _httpClient$ = dart.privateName(clients, "_httpClient");
  const _rootUrl$ = dart.privateName(clients, "_rootUrl");
  const _basePath$ = dart.privateName(clients, "_basePath");
  const _userAgent$ = dart.privateName(clients, "_userAgent");
  const _request = dart.privateName(clients, "_request");
  let C3;
  let C4;
  let C5;
  let C6;
  clients.ApiRequester = class ApiRequester extends core.Object {
    request(requestUrl, method, opts) {
      let body = opts && 'body' in opts ? opts.body : null;
      let queryParams = opts && 'queryParams' in opts ? opts.queryParams : null;
      let uploadMedia = opts && 'uploadMedia' in opts ? opts.uploadMedia : null;
      let uploadOptions = opts && 'uploadOptions' in opts ? opts.uploadOptions : null;
      let downloadOptions = opts && 'downloadOptions' in opts ? opts.downloadOptions : C1 || CT.C1;
      return async.async(dart.dynamic, (function* request() {
        let t0;
        if (uploadMedia != null && !dart.equals(downloadOptions, requests.DownloadOptions.Metadata)) {
          dart.throw(new core.ArgumentError.new("When uploading a [Media] you cannot download a " + "[Media] at the same time!"));
        }
        let downloadRange = null;
        if (requests.PartialDownloadOptions.is(downloadOptions) && !dart.test(downloadOptions.isFullDownload)) {
          downloadRange = downloadOptions.range;
        }
        queryParams = (t0 = queryParams, t0 == null ? null : t0[$cast](core.String, ListOfString()));
        let response = (yield this[_request](requestUrl, method, body, queryParams, uploadMedia, uploadOptions, downloadOptions, downloadRange));
        response = (yield clients._validateResponse(response));
        if (downloadOptions == null) {
          return response.stream.drain(dart.dynamic);
        } else if (dart.equals(downloadOptions, requests.DownloadOptions.Metadata)) {
          let stringStream = clients._decodeStreamAsText(response);
          if (stringStream == null) {
            dart.throw(new requests.ApiRequestError.new("Unable to read response with content-type " + dart.str(response.headers[$_get]("content-type")) + "."));
          }
          let bodyString = (yield stringStream.join(""));
          if (bodyString[$isEmpty]) return null;
          return convert.json.decode(bodyString);
        }
        let contentType = response.headers[$_get]("content-type");
        if (contentType == null) {
          dart.throw(new requests.ApiRequestError.new("No 'content-type' header in media response."));
        }
        let contentLength = null;
        if (response.headers[$_get]("content-length") != null) {
          contentLength = core.int.tryParse(response.headers[$_get]("content-length"));
        }
        if (downloadRange != null) {
          if (contentLength != downloadRange.length) {
            dart.throw(new requests.ApiRequestError.new("Content length of response does not match requested range " + "length."));
          }
          let contentRange = response.headers[$_get]("content-range");
          let expected = "bytes " + dart.str(downloadRange.start) + "-" + dart.str(downloadRange.end) + "/";
          if (contentRange == null || !contentRange[$startsWith](expected)) {
            dart.throw(new requests.ApiRequestError.new("Attempting partial " + "download but got invalid 'Content-Range' header " + "(was: " + dart.str(contentRange) + ", expected: " + expected + ")."));
          }
        }
        return new requests.Media.new(response.stream, contentLength, {contentType: contentType});
      }).bind(this));
    }
    [_request](requestUrl, method, body, queryParams, uploadMedia, uploadOptions, downloadOptions, downloadRange) {
      let downloadAsMedia = downloadOptions != null && !dart.equals(downloadOptions, requests.DownloadOptions.Metadata);
      queryParams == null ? queryParams = new (IdentityMapOfString$ListOfString()).new() : null;
      if (uploadMedia != null) {
        if (requests.ResumableUploadOptions.is(uploadOptions)) {
          queryParams[$_set]("uploadType", C3 || CT.C3);
        } else if (body == null) {
          queryParams[$_set]("uploadType", C4 || CT.C4);
        } else {
          queryParams[$_set]("uploadType", C5 || CT.C5);
        }
      }
      if (downloadAsMedia) {
        queryParams[$_set]("alt", C4 || CT.C4);
      } else if (downloadOptions != null) {
        queryParams[$_set]("alt", C6 || CT.C6);
      }
      let path = null;
      if (requestUrl[$startsWith]("/")) {
        path = dart.str(this[_rootUrl$]) + requestUrl[$substring](1);
      } else {
        path = dart.str(this[_rootUrl$]) + dart.str(this[_basePath$]) + dart.str(requestUrl);
      }
      let containsQueryParameter = path[$contains]("?");
      function addQueryParameter(name, value) {
        name = clients.Escaper.escapeQueryComponent(name);
        value = clients.Escaper.escapeQueryComponent(value);
        if (containsQueryParameter) {
          path = dart.str(path) + "&" + dart.str(name) + "=" + dart.str(value);
        } else {
          path = dart.str(path) + "?" + dart.str(name) + "=" + dart.str(value);
        }
        containsQueryParameter = true;
      }
      dart.fn(addQueryParameter, StringAndStringTovoid());
      queryParams[$forEach](dart.fn((key, values) => {
        for (let value of values) {
          addQueryParameter(key, value);
        }
      }, StringAndListOfStringToNull()));
      let uri = core.Uri.parse(path);
      const simpleUpload = () => {
        let bodyStream = uploadMedia.stream;
        let request = new clients._RequestImpl.new(method, uri, bodyStream);
        request.headers[$addAll](new (IdentityMapOfString$String()).from(["user-agent", this[_userAgent$], "content-type", uploadMedia.contentType, "content-length", dart.str(uploadMedia.length)]));
        return this[_httpClient$].send(request);
      };
      dart.fn(simpleUpload, VoidToFutureOfStreamedResponse());
      const simpleRequest = () => {
        let length = 0;
        let bodyController = StreamControllerOfListOfint().new();
        if (body != null) {
          let bytes = convert.utf8.encode(body);
          bodyController.add(bytes);
          length = bytes[$length];
        }
        bodyController.close();
        let headers = null;
        if (downloadRange != null) {
          headers = new (IdentityMapOfString$String()).from(["user-agent", this[_userAgent$], "content-type", "application/json; charset=utf-8", "content-length", dart.str(length), "range", "bytes=" + dart.str(downloadRange.start) + "-" + dart.str(downloadRange.end), "x-goog-api-client", "gl-dart/" + dart.str(version_fallback.dartVersion)]);
        } else {
          headers = new (IdentityMapOfString$String()).from(["user-agent", this[_userAgent$], "content-type", "application/json; charset=utf-8", "content-length", dart.str(length), "x-goog-api-client", "gl-dart/" + dart.str(version_fallback.dartVersion)]);
        }
        headers[$removeWhere](dart.fn((key, value) => clients._forbiddenHeaders[$contains](key), StringAndStringTobool()));
        let request = new clients._RequestImpl.new(method, uri, bodyController.stream);
        request.headers[$addAll](headers);
        return this[_httpClient$].send(request);
      };
      dart.fn(simpleRequest, VoidToFutureOfStreamedResponse());
      if (uploadMedia != null) {
        if (requests.ResumableUploadOptions.is(uploadOptions)) {
          let helper = new clients.ResumableMediaUploader.new(this[_httpClient$], uploadMedia, body, uri, method, uploadOptions, this[_userAgent$]);
          return helper.upload();
        }
        if (uploadMedia.length == null) {
          dart.throw(new core.ArgumentError.new("For non-resumable uploads you need to specify the length of the " + "media to upload."));
        }
        if (body == null) {
          return simpleUpload();
        } else {
          let uploader = new clients.MultipartMediaUploader.new(this[_httpClient$], uploadMedia, body, uri, method, this[_userAgent$]);
          return uploader.upload();
        }
      }
      return simpleRequest();
    }
  };
  (clients.ApiRequester.new = function(_httpClient, _rootUrl, _basePath, _userAgent) {
    this[_httpClient$] = _httpClient;
    this[_rootUrl$] = _rootUrl;
    this[_basePath$] = _basePath;
    this[_userAgent$] = _userAgent;
    if (!this[_rootUrl$][$endsWith]("/")) dart.assertFailed(null, "org-dartlang-app:///packages/_discoveryapis_commons/src/clients.dart", 35, 12, "_rootUrl.endsWith('/')");
  }).prototype = clients.ApiRequester.prototype;
  dart.addTypeTests(clients.ApiRequester);
  dart.setMethodSignature(clients.ApiRequester, () => ({
    __proto__: dart.getMethods(clients.ApiRequester.__proto__),
    request: dart.fnType(async.Future, [core.String, core.String], {body: core.String, downloadOptions: requests.DownloadOptions, queryParams: core.Map$(core.String, core.List$(core.String)), uploadMedia: requests.Media, uploadOptions: requests.UploadOptions}, {}),
    [_request]: dart.fnType(async.Future$(streamed_response.StreamedResponse), [core.String, core.String, core.String, core.Map$(core.String, core.List$(core.String)), requests.Media, requests.UploadOptions, requests.DownloadOptions, requests.ByteRange])
  }));
  dart.setLibraryUri(clients.ApiRequester, "package:_discoveryapis_commons/src/clients.dart");
  dart.setFieldSignature(clients.ApiRequester, () => ({
    __proto__: dart.getFields(clients.ApiRequester.__proto__),
    [_httpClient$]: dart.finalFieldType(client.Client),
    [_rootUrl$]: dart.finalFieldType(core.String),
    [_basePath$]: dart.finalFieldType(core.String),
    [_userAgent$]: dart.finalFieldType(core.String)
  }));
  const _uploadMedia$ = dart.privateName(clients, "_uploadMedia");
  const _body$ = dart.privateName(clients, "_body");
  const _uri$ = dart.privateName(clients, "_uri");
  const _method$ = dart.privateName(clients, "_method");
  clients.MultipartMediaUploader = class MultipartMediaUploader extends core.Object {
    upload() {
      let base64MediaStream = this[_uploadMedia$].stream.transform(core.String, clients.MultipartMediaUploader._base64Encoder).transform(ListOfint(), convert.ascii.encoder);
      let base64MediaStreamLength = clients.Base64Encoder.lengthOfBase64Stream(this[_uploadMedia$].length);
      let bodyHead = "--" + dart.str(clients.MultipartMediaUploader._boundary) + "\r\n" + "Content-Type: " + "application/json; charset=utf-8" + "\r\n\r\n" + dart.notNull(this[_body$]) + ("\r\n--" + dart.str(clients.MultipartMediaUploader._boundary) + "\r\n" + "Content-Type: " + dart.str(this[_uploadMedia$].contentType) + "\r\n" + "Content-Transfer-Encoding: base64\r\n\r\n");
      let bodyTail = "\r\n--" + dart.str(clients.MultipartMediaUploader._boundary) + "--";
      let totalLength = bodyHead.length + dart.notNull(base64MediaStreamLength) + bodyTail.length;
      let bodyController = StreamControllerOfListOfint().new();
      bodyController.add(convert.utf8.encode(bodyHead));
      bodyController.addStream(base64MediaStream).then(core.Null, dart.fn(_ => {
        bodyController.add(convert.utf8.encode(bodyTail));
      }, dynamicToNull())).catchError(dart.fn((error, stack) => {
        bodyController.addError(error, stack);
      }, dynamicAndStackTraceToNull())).then(core.Null, dart.fn(_ => {
        bodyController.close();
      }, ObjectToNull()));
      let headers = new (IdentityMapOfString$String()).from(["user-agent", this[_userAgent$], "content-type", "multipart/related; boundary=\"" + dart.str(clients.MultipartMediaUploader._boundary) + "\"", "content-length", dart.str(totalLength)]);
      let bodyStream = bodyController.stream;
      let request = new clients._RequestImpl.new(this[_method$], this[_uri$], bodyStream);
      request.headers[$addAll](headers);
      return this[_httpClient$].send(request);
    }
  };
  (clients.MultipartMediaUploader.new = function(_httpClient, _uploadMedia, _body, _uri, _method, _userAgent) {
    this[_httpClient$] = _httpClient;
    this[_uploadMedia$] = _uploadMedia;
    this[_body$] = _body;
    this[_uri$] = _uri;
    this[_method$] = _method;
    this[_userAgent$] = _userAgent;
    ;
  }).prototype = clients.MultipartMediaUploader.prototype;
  dart.addTypeTests(clients.MultipartMediaUploader);
  dart.setMethodSignature(clients.MultipartMediaUploader, () => ({
    __proto__: dart.getMethods(clients.MultipartMediaUploader.__proto__),
    upload: dart.fnType(async.Future$(streamed_response.StreamedResponse), [])
  }));
  dart.setLibraryUri(clients.MultipartMediaUploader, "package:_discoveryapis_commons/src/clients.dart");
  dart.setFieldSignature(clients.MultipartMediaUploader, () => ({
    __proto__: dart.getFields(clients.MultipartMediaUploader.__proto__),
    [_httpClient$]: dart.finalFieldType(client.Client),
    [_uploadMedia$]: dart.finalFieldType(requests.Media),
    [_uri$]: dart.finalFieldType(core.Uri),
    [_body$]: dart.finalFieldType(core.String),
    [_method$]: dart.finalFieldType(core.String),
    [_userAgent$]: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(clients.MultipartMediaUploader, {
    /*clients.MultipartMediaUploader._boundary*/get _boundary() {
      return "314159265358979323846";
    },
    /*clients.MultipartMediaUploader._base64Encoder*/get _base64Encoder() {
      return new clients.Base64Encoder.new();
    }
  });
  clients.Base64Encoder = class Base64Encoder extends async.StreamTransformerBase$(core.List$(core.int), core.String) {
    static lengthOfBase64Stream(lengthOfByteStream) {
      return ((dart.notNull(lengthOfByteStream) + 2) / 3)[$truncate]() * 4;
    }
    bind(stream) {
      StreamOfListOfint()._check(stream);
      let controller = null;
      let remainingBytes = JSArrayOfint().of([]);
      function onData(bytes) {
        if (dart.notNull(remainingBytes[$length]) + dart.notNull(bytes[$length]) < 3) {
          remainingBytes[$addAll](bytes);
          return;
        }
        let start = null;
        if (dart.test(remainingBytes[$isEmpty])) {
          start = 0;
        } else if (remainingBytes[$length] === 1) {
          remainingBytes[$add](bytes[$_get](0));
          remainingBytes[$add](bytes[$_get](1));
          start = 2;
        } else if (remainingBytes[$length] === 2) {
          remainingBytes[$add](bytes[$_get](0));
          start = 1;
        }
        if (dart.test(remainingBytes[$isNotEmpty])) {
          controller.add(convert.base64.encode(remainingBytes));
          remainingBytes[$clear]();
        }
        let chunksOf3 = ((dart.notNull(bytes[$length]) - dart.notNull(start)) / 3)[$truncate]();
        let end = dart.notNull(start) + 3 * chunksOf3;
        if (start === 0 && end === bytes[$length]) {
          controller.add(convert.base64.encode(bytes));
        } else {
          controller.add(convert.base64.encode(bytes[$sublist](start, end)));
          if (end < dart.notNull(bytes[$length])) {
            remainingBytes[$addAll](bytes[$sublist](end));
          }
        }
      }
      dart.fn(onData, ListOfintTovoid());
      function onError(error, stack) {
        controller.addError(error, stack);
      }
      dart.fn(onError, dynamicAndStackTraceTovoid());
      function onDone() {
        if (dart.test(remainingBytes[$isNotEmpty])) {
          controller.add(convert.base64.encode(remainingBytes));
          remainingBytes[$clear]();
        }
        controller.close();
      }
      dart.fn(onDone, VoidTovoid());
      let subscription = null;
      controller = StreamControllerOfString().new({onListen: dart.fn(() => {
          subscription = stream.listen(onData, {onError: onError, onDone: onDone});
        }, VoidToNull()), onPause: dart.fn(() => {
          subscription.pause();
        }, VoidToNull()), onResume: dart.fn(() => {
          subscription.resume();
        }, VoidToNull()), onCancel: dart.fn(() => {
          subscription.cancel();
        }, VoidToNull())});
      return controller.stream;
    }
  };
  (clients.Base64Encoder.new = function() {
    clients.Base64Encoder.__proto__.new.call(this);
    ;
  }).prototype = clients.Base64Encoder.prototype;
  dart.addTypeTests(clients.Base64Encoder);
  dart.setMethodSignature(clients.Base64Encoder, () => ({
    __proto__: dart.getMethods(clients.Base64Encoder.__proto__),
    bind: dart.fnType(async.Stream$(core.String), [core.Object])
  }));
  dart.setLibraryUri(clients.Base64Encoder, "package:_discoveryapis_commons/src/clients.dart");
  const _options$ = dart.privateName(clients, "_options");
  const _startSession = dart.privateName(clients, "_startSession");
  const _uploadChunkDrained = dart.privateName(clients, "_uploadChunkDrained");
  const _uploadChunkResumable = dart.privateName(clients, "_uploadChunkResumable");
  const _bytes2Stream = dart.privateName(clients, "_bytes2Stream");
  const _uploadChunk = dart.privateName(clients, "_uploadChunk");
  const _listOfBytes2Stream = dart.privateName(clients, "_listOfBytes2Stream");
  clients.ResumableMediaUploader = class ResumableMediaUploader extends core.Object {
    upload() {
      return this[_startSession]().then(streamed_response.StreamedResponse, dart.fn(uploadUri => {
        let subscription = null;
        let completer = CompleterOfStreamedResponse().new();
        let completed = false;
        let chunkStack = new clients.ChunkStack.new(this[_options$].chunkSize);
        subscription = this[_uploadMedia$].stream.listen(dart.fn(bytes => {
          chunkStack.addBytes(bytes);
          let hasPartialChunk = chunkStack.hasPartialChunk;
          if (dart.notNull(chunkStack.length) > 1 || chunkStack.length === 1 && dart.test(hasPartialChunk)) {
            subscription.pause();
            let fullChunks = null;
            if (dart.test(hasPartialChunk)) {
              fullChunks = chunkStack.removeSublist(0, chunkStack.length);
            } else {
              fullChunks = chunkStack.removeSublist(0, dart.notNull(chunkStack.length) - 1);
            }
            async.Future.forEach(clients.ResumableChunk, fullChunks, dart.fn(c => this[_uploadChunkDrained](uploadUri, c), ResumableChunkToFuture())).then(core.Null, dart.fn(_ => {
              subscription.resume();
            }, dynamicToNull())).catchError(dart.fn((error, stack) => {
              subscription.cancel();
              completed = true;
              completer.completeError(error, stack);
            }, dynamicAndStackTraceToNull()));
          }
        }, ListOfintToNull()), {onError: dart.fn((error, stack) => {
            subscription.cancel();
            if (!completed) {
              completed = true;
              completer.completeError(error, stack);
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
            if (!completed) {
              chunkStack.finalize();
              let lastChunk = null;
              if (chunkStack.length === 1) {
                lastChunk = chunkStack.removeSublist(0, chunkStack.length)[$first];
              } else {
                completer.completeError(new core.StateError.new("Resumable uploads need to result in at least one non-empty " + "chunk at the end."));
                return;
              }
              let end = lastChunk.endOfChunk;
              if (this[_uploadMedia$].length != null) {
                if (dart.notNull(end) < dart.notNull(this[_uploadMedia$].length)) {
                  completer.completeError(new requests.ApiRequestError.new("Received less bytes than indicated by [Media.length]."));
                  return;
                } else if (dart.notNull(end) > dart.notNull(this[_uploadMedia$].length)) {
                  completer.completeError(new requests.ApiRequestError.new("Received more bytes than indicated by [Media.length]."));
                  return;
                }
              }
              this[_uploadChunkResumable](uploadUri, lastChunk, {lastChunk: true}).then(core.Null, dart.fn(response => {
                completer.complete(response);
              }, StreamedResponseToNull())).catchError(dart.fn((error, stack) => {
                completer.completeError(error, stack);
              }, dynamicAndStackTraceToNull()));
            }
          }, VoidToNull())});
        return completer.future;
      }, UriToFutureOfStreamedResponse()));
    }
    [_startSession]() {
      let length = 0;
      let bytes = null;
      if (this[_body$] != null) {
        bytes = convert.utf8.encode(this[_body$]);
        length = bytes[$length];
      }
      let bodyStream = this[_bytes2Stream](bytes);
      let request = new clients._RequestImpl.new(this[_method$], this[_uri$], bodyStream);
      request.headers[$addAll](new (IdentityMapOfString$String()).from(["user-agent", this[_userAgent$], "content-type", "application/json; charset=utf-8", "content-length", dart.str(length), "x-upload-content-type", this[_uploadMedia$].contentType, "x-upload-content-length", dart.str(this[_uploadMedia$].length)]));
      return this[_httpClient$].send(request).then(core.Uri, dart.fn(response => response.stream.drain(dart.dynamic).then(core.Uri, dart.fn(_ => {
        let uploadUri = response.headers[$_get]("location");
        if (response.statusCode !== 200 || uploadUri == null) {
          dart.throw(new requests.ApiRequestError.new("Invalid response for resumable upload attempt " + "(status was: " + dart.str(response.statusCode) + ")"));
        }
        return core.Uri.parse(uploadUri);
      }, dynamicToUri())), StreamedResponseToFutureOfUri()));
    }
    [_uploadChunkDrained](uri, chunk) {
      return this[_uploadChunkResumable](uri, chunk).then(dart.dynamic, dart.fn(response => response.stream.drain(dart.dynamic), StreamedResponseToFuture()));
    }
    [_uploadChunkResumable](uri, chunk, opts) {
      let lastChunk = opts && 'lastChunk' in opts ? opts.lastChunk : false;
      const tryUpload = attemptsLeft => {
        return this[_uploadChunk](uri, chunk, {lastChunk: lastChunk}).then(streamed_response.StreamedResponse, dart.fn(response => {
          let status = response.statusCode;
          if (dart.notNull(attemptsLeft) > 0 && (status === 500 || 502 <= dart.notNull(status) && dart.notNull(status) < 504)) {
            return response.stream.drain(dart.dynamic).then(streamed_response.StreamedResponse, dart.fn(_ => {
              let failedAttempts = dart.notNull(this[_options$].numberOfAttempts) - dart.notNull(attemptsLeft);
              let duration = core.Duration.as(dart.dsend(this[_options$], 'backoffFunction', [failedAttempts]));
              if (duration == null) {
                dart.throw(new requests.DetailedApiRequestError.new(status, "Resumable upload: Uploading a chunk resulted in status " + dart.str(status) + ". Maximum number of retries reached."));
              }
              return async.Future.delayed(duration).then(streamed_response.StreamedResponse, dart.fn(_ => tryUpload(dart.notNull(attemptsLeft) - 1), dynamicToFutureOfStreamedResponse()));
            }, dynamicToFutureOfStreamedResponse()));
          } else if (!dart.test(lastChunk) && status !== 308) {
            return response.stream.drain(dart.dynamic).then(streamed_response.StreamedResponse, dart.fn(_ => {
              dart.throw(new requests.DetailedApiRequestError.new(status, "Resumable upload: Uploading a chunk resulted in status " + dart.str(status) + " instead of 308."));
            }, dynamicToNull()));
          } else if (dart.test(lastChunk) && status !== 201 && status !== 200) {
            return response.stream.drain(dart.dynamic).then(streamed_response.StreamedResponse, dart.fn(_ => {
              dart.throw(new requests.DetailedApiRequestError.new(status, "Resumable upload: Uploading a chunk resulted in status " + dart.str(status) + " instead of 200 or 201."));
            }, dynamicToNull()));
          } else {
            return response;
          }
        }, StreamedResponseToFutureOrOfStreamedResponse()));
      };
      dart.fn(tryUpload, intToFutureOfStreamedResponse());
      return tryUpload(dart.notNull(this[_options$].numberOfAttempts) - 1);
    }
    [_uploadChunk](uri, chunk, opts) {
      let lastChunk = opts && 'lastChunk' in opts ? opts.lastChunk : false;
      let mediaTotalLength = this[_uploadMedia$].length == null ? null : dart.toString(this[_uploadMedia$].length);
      if (mediaTotalLength == null || dart.test(lastChunk)) {
        if (dart.test(lastChunk)) {
          mediaTotalLength = dart.str(chunk.endOfChunk);
        } else {
          mediaTotalLength = "*";
        }
      }
      let headers = new (IdentityMapOfString$String()).from(["user-agent", this[_userAgent$], "content-type", this[_uploadMedia$].contentType, "content-length", dart.str(chunk.length), "content-range", "bytes " + dart.str(chunk.offset) + "-" + dart.str(dart.notNull(chunk.endOfChunk) - 1) + "/" + dart.str(mediaTotalLength)]);
      let stream = this[_listOfBytes2Stream](chunk.byteArrays);
      let request = new clients._RequestImpl.new("PUT", uri, stream);
      request.headers[$addAll](headers);
      return this[_httpClient$].send(request);
    }
    [_bytes2Stream](bytes) {
      let bodyController = StreamControllerOfListOfint().new();
      if (bytes != null) {
        bodyController.add(bytes);
      }
      bodyController.close();
      return bodyController.stream;
    }
    [_listOfBytes2Stream](listOfBytes) {
      let controller = StreamControllerOfListOfint().new();
      for (let array of listOfBytes) {
        controller.add(array);
      }
      controller.close();
      return controller.stream;
    }
  };
  (clients.ResumableMediaUploader.new = function(_httpClient, _uploadMedia, _body, _uri, _method, _options, _userAgent) {
    this[_httpClient$] = _httpClient;
    this[_uploadMedia$] = _uploadMedia;
    this[_body$] = _body;
    this[_uri$] = _uri;
    this[_method$] = _method;
    this[_options$] = _options;
    this[_userAgent$] = _userAgent;
    ;
  }).prototype = clients.ResumableMediaUploader.prototype;
  dart.addTypeTests(clients.ResumableMediaUploader);
  dart.setMethodSignature(clients.ResumableMediaUploader, () => ({
    __proto__: dart.getMethods(clients.ResumableMediaUploader.__proto__),
    upload: dart.fnType(async.Future$(streamed_response.StreamedResponse), []),
    [_startSession]: dart.fnType(async.Future$(core.Uri), []),
    [_uploadChunkDrained]: dart.fnType(async.Future, [core.Uri, clients.ResumableChunk]),
    [_uploadChunkResumable]: dart.fnType(async.Future$(streamed_response.StreamedResponse), [core.Uri, clients.ResumableChunk], {lastChunk: core.bool}, {}),
    [_uploadChunk]: dart.fnType(async.Future$(streamed_response.StreamedResponse), [core.Uri, clients.ResumableChunk], {lastChunk: core.bool}, {}),
    [_bytes2Stream]: dart.fnType(async.Stream$(core.List$(core.int)), [core.List$(core.int)]),
    [_listOfBytes2Stream]: dart.fnType(async.Stream$(core.List$(core.int)), [core.List$(core.List$(core.int))])
  }));
  dart.setLibraryUri(clients.ResumableMediaUploader, "package:_discoveryapis_commons/src/clients.dart");
  dart.setFieldSignature(clients.ResumableMediaUploader, () => ({
    __proto__: dart.getFields(clients.ResumableMediaUploader.__proto__),
    [_httpClient$]: dart.finalFieldType(client.Client),
    [_uploadMedia$]: dart.finalFieldType(requests.Media),
    [_uri$]: dart.finalFieldType(core.Uri),
    [_body$]: dart.finalFieldType(core.String),
    [_method$]: dart.finalFieldType(core.String),
    [_options$]: dart.finalFieldType(requests.ResumableUploadOptions),
    [_userAgent$]: dart.finalFieldType(core.String)
  }));
  const _chunkStack = dart.privateName(clients, "_chunkStack");
  const _byteArrays = dart.privateName(clients, "_byteArrays");
  const _length = dart.privateName(clients, "_length");
  const _offset = dart.privateName(clients, "_offset");
  const _finalized = dart.privateName(clients, "_finalized");
  const _chunkSize$ = dart.privateName(clients, "_chunkSize");
  clients.ChunkStack = class ChunkStack extends core.Object {
    get hasPartialChunk() {
      return dart.notNull(this[_length]) > 0;
    }
    get length() {
      return this[_chunkStack][$length];
    }
    get totalByteLength() {
      if (!dart.test(this[_finalized])) {
        dart.throw(new core.StateError.new("ChunkStack has not been finalized yet."));
      }
      return this[_offset];
    }
    removeSublist(from, to) {
      let sublist = this[_chunkStack][$sublist](from, to);
      this[_chunkStack][$removeRange](from, to);
      return sublist;
    }
    addBytes(bytes) {
      if (dart.test(this[_finalized])) {
        dart.throw(new core.StateError.new("ChunkStack has already been finalized."));
      }
      let remaining = dart.notNull(this[_chunkSize$]) - dart.notNull(this[_length]);
      if (dart.notNull(bytes[$length]) >= remaining) {
        let left = bytes[$sublist](0, remaining);
        let right = bytes[$sublist](remaining);
        this[_byteArrays][$add](left);
        this[_length] = dart.notNull(this[_length]) + dart.notNull(left[$length]);
        this[_chunkStack][$add](new clients.ResumableChunk.new(this[_byteArrays], this[_offset], this[_length]));
        this[_byteArrays] = JSArrayOfListOfint().of([]);
        this[_offset] = dart.notNull(this[_offset]) + dart.notNull(this[_length]);
        this[_length] = 0;
        this.addBytes(right);
      } else if (dart.test(bytes[$isNotEmpty])) {
        this[_byteArrays][$add](bytes);
        this[_length] = dart.notNull(this[_length]) + dart.notNull(bytes[$length]);
      }
    }
    finalize() {
      if (dart.test(this[_finalized])) {
        dart.throw(new core.StateError.new("ChunkStack has already been finalized."));
      }
      this[_finalized] = true;
      if (dart.notNull(this[_length]) > 0) {
        this[_chunkStack][$add](new clients.ResumableChunk.new(this[_byteArrays], this[_offset], this[_length]));
        this[_offset] = dart.notNull(this[_offset]) + dart.notNull(this[_length]);
      }
    }
  };
  (clients.ChunkStack.new = function(_chunkSize) {
    this[_chunkStack] = JSArrayOfResumableChunk().of([]);
    this[_byteArrays] = JSArrayOfListOfint().of([]);
    this[_length] = 0;
    this[_offset] = 0;
    this[_finalized] = false;
    this[_chunkSize$] = _chunkSize;
    ;
  }).prototype = clients.ChunkStack.prototype;
  dart.addTypeTests(clients.ChunkStack);
  dart.setMethodSignature(clients.ChunkStack, () => ({
    __proto__: dart.getMethods(clients.ChunkStack.__proto__),
    removeSublist: dart.fnType(core.List$(clients.ResumableChunk), [core.int, core.int]),
    addBytes: dart.fnType(dart.void, [core.List$(core.int)]),
    finalize: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(clients.ChunkStack, () => ({
    __proto__: dart.getGetters(clients.ChunkStack.__proto__),
    hasPartialChunk: core.bool,
    length: core.int,
    totalByteLength: core.int
  }));
  dart.setLibraryUri(clients.ChunkStack, "package:_discoveryapis_commons/src/clients.dart");
  dart.setFieldSignature(clients.ChunkStack, () => ({
    __proto__: dart.getFields(clients.ChunkStack.__proto__),
    [_chunkSize$]: dart.finalFieldType(core.int),
    [_chunkStack]: dart.finalFieldType(core.List$(clients.ResumableChunk)),
    [_byteArrays]: dart.fieldType(core.List$(core.List$(core.int))),
    [_length]: dart.fieldType(core.int),
    [_offset]: dart.fieldType(core.int),
    [_finalized]: dart.fieldType(core.bool)
  }));
  const byteArrays$ = dart.privateName(clients, "ResumableChunk.byteArrays");
  const offset$ = dart.privateName(clients, "ResumableChunk.offset");
  const length$0 = dart.privateName(clients, "ResumableChunk.length");
  clients.ResumableChunk = class ResumableChunk extends core.Object {
    get byteArrays() {
      return this[byteArrays$];
    }
    set byteArrays(value) {
      super.byteArrays = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    get endOfChunk() {
      return dart.notNull(this.offset) + dart.notNull(this.length);
    }
  };
  (clients.ResumableChunk.new = function(byteArrays, offset, length) {
    this[byteArrays$] = byteArrays;
    this[offset$] = offset;
    this[length$0] = length;
    ;
  }).prototype = clients.ResumableChunk.prototype;
  dart.addTypeTests(clients.ResumableChunk);
  dart.setGetterSignature(clients.ResumableChunk, () => ({
    __proto__: dart.getGetters(clients.ResumableChunk.__proto__),
    endOfChunk: core.int
  }));
  dart.setLibraryUri(clients.ResumableChunk, "package:_discoveryapis_commons/src/clients.dart");
  dart.setFieldSignature(clients.ResumableChunk, () => ({
    __proto__: dart.getFields(clients.ResumableChunk.__proto__),
    byteArrays: dart.finalFieldType(core.List$(core.List$(core.int))),
    offset: dart.finalFieldType(core.int),
    length: dart.finalFieldType(core.int)
  }));
  const _stream = dart.privateName(clients, "_stream");
  clients._RequestImpl = class _RequestImpl extends base_request.BaseRequest {
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_stream]);
    }
  };
  (clients._RequestImpl.new = function(method, url, stream) {
    if (stream === void 0) stream = null;
    this[_stream] = stream == null ? StreamOfListOfint().fromIterable(JSArrayOfListOfint().of([])) : stream;
    clients._RequestImpl.__proto__.new.call(this, method, url);
    ;
  }).prototype = clients._RequestImpl.prototype;
  dart.addTypeTests(clients._RequestImpl);
  dart.setLibraryUri(clients._RequestImpl, "package:_discoveryapis_commons/src/clients.dart");
  dart.setFieldSignature(clients._RequestImpl, () => ({
    __proto__: dart.getFields(clients._RequestImpl.__proto__),
    [_stream]: dart.finalFieldType(async.Stream$(core.List$(core.int)))
  }));
  clients.Escaper = class Escaper extends core.Object {
    static ecapeVariableReserved(name) {
      return core.Uri.encodeFull(name);
    }
    static ecapePathComponent(name) {
      return clients.Escaper._encodeUnreserved(name);
    }
    static ecapeVariable(name) {
      return clients.Escaper._encodeUnreserved(name);
    }
    static escapeQueryComponent(name) {
      return clients.Escaper._encodeUnreserved(name);
    }
    static _encodeUnreserved(name) {
      return core.Uri.encodeQueryComponent(name)[$replaceAll]("+", "%20");
    }
  };
  (clients.Escaper.new = function() {
    ;
  }).prototype = clients.Escaper.prototype;
  dart.addTypeTests(clients.Escaper);
  dart.setLibraryUri(clients.Escaper, "package:_discoveryapis_commons/src/clients.dart");
  const Utf8Decoder__allowMalformed = dart.privateName(convert, "Utf8Decoder._allowMalformed");
  let C7;
  clients._validateResponse = function _validateResponse(response) {
    return async.async(streamed_response.StreamedResponse, function* _validateResponse() {
      let statusCode = response.statusCode;
      if (dart.notNull(statusCode) < 200 || dart.notNull(statusCode) >= 400) {
        let stringStream = clients._decodeStreamAsText(response);
        if (stringStream != null) {
          let jsonResponse = (yield stringStream.transform(core.Object, convert.json.decoder).first);
          if (core.Map.is(jsonResponse) && core.Map.is(jsonResponse[$_get]("error"))) {
            let error = core.Map.as(jsonResponse[$_get]("error"));
            let codeValue = error[$_get]("code");
            let message = core.String.as(error[$_get]("message"));
            let code = typeof codeValue == 'string' ? core.int.tryParse(codeValue) : core.int.as(codeValue);
            let errors = JSArrayOfApiRequestErrorDetail().of([]);
            if (dart.test(error[$containsKey]("errors")) && core.List.is(error[$_get]("errors"))) {
              errors = core.List.as(error[$_get]("errors"))[$map](requests.ApiRequestErrorDetail, dart.fn(e => new requests.ApiRequestErrorDetail.fromJson(core.Map.as(e)), dynamicToApiRequestErrorDetail()))[$toList]();
            }
            dart.throw(new requests.DetailedApiRequestError.new(code, message, {errors: errors, jsonResponse: MapOfString$dynamic().as(jsonResponse)}));
          }
        }
        dart.throw(new requests.DetailedApiRequestError.new(statusCode, "No error details. HTTP status was: " + dart.str(statusCode) + "."));
      }
      return response;
    });
  };
  clients._decodeStreamAsText = function _decodeStreamAsText(response) {
    let contentType = response.headers[$_get]("content-type");
    if (contentType != null && contentType[$toLowerCase]()[$startsWith]("application/json")) {
      return response.stream.transform(core.String, C7 || CT.C7);
    } else {
      return null;
    }
  };
  clients.mapMap = function mapMap(F, T, source, convert) {
    if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/_discoveryapis_commons/src/clients.dart", 880, 10, "source != null");
    if (!(convert != null)) dart.assertFailed(null, "org-dartlang-app:///packages/_discoveryapis_commons/src/clients.dart", 881, 10, "convert != null");
    let result = new (_js_helper.IdentityMap$(core.String, T)).new();
    source[$forEach](dart.fn((key, value) => {
      result[$_set](key, convert(value));
    }, dart.fnType(core.Null, [core.String, F])));
    return result;
  };
  let C8;
  dart.defineLazy(clients, {
    /*clients.CONTENT_TYPE_JSON_UTF8*/get CONTENT_TYPE_JSON_UTF8() {
      return "application/json; charset=utf-8";
    },
    /*clients._forbiddenHeaders*/get _forbiddenHeaders() {
      return C8 || CT.C8;
    }
  });
  dart.defineLazy(version_fallback, {
    /*version_fallback.dartVersion*/get dartVersion() {
      return "2.0.0";
    }
  });
  dart.trackLibraries("packages/_discoveryapis_commons/_discoveryapis_commons", {
    "package:_discoveryapis_commons/_discoveryapis_commons.dart": _discoveryapis_commons,
    "package:_discoveryapis_commons/src/requests.dart": requests,
    "package:_discoveryapis_commons/src/clients.dart": clients,
    "package:_discoveryapis_commons/src/version_fallback.dart": version_fallback
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/requests.dart","src/clients.dart","src/version_fallback.dart"],"names":[],"mappings":"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","file":"_discoveryapis_commons.ddc.js"}');
  // Exports:
  return {
    _discoveryapis_commons: _discoveryapis_commons,
    src__requests: requests,
    src__clients: clients,
    src__version_fallback: version_fallback
  };
});

//# sourceMappingURL=_discoveryapis_commons.ddc.js.map
