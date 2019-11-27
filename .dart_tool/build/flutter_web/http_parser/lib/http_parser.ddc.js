define(['dart_sdk', 'packages/string_scanner/src/eager_span_scanner', 'packages/source_span/source_span', 'packages/collection/src/canonicalized_map', 'packages/typed_data/typed_buffers'], function(dart_sdk, packages__string_scanner__src__eager_span_scanner, packages__source_span__source_span, packages__collection__src__canonicalized_map, packages__typed_data__typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const string_scanner = packages__string_scanner__src__eager_span_scanner.src__string_scanner;
  const span_exception = packages__source_span__source_span.src__span_exception;
  const canonicalized_map = packages__collection__src__canonicalized_map.src__canonicalized_map;
  const typed_buffers = packages__typed_data__typed_buffers.typed_buffers;
  const scan = Object.create(dart.library);
  const authentication_challenge = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const case_insensitive_map = Object.create(dart.library);
  const media_type = Object.create(dart.library);
  const http_date = Object.create(dart.library);
  const chunked_coding = Object.create(dart.library);
  const decoder = Object.create(dart.library);
  const encoder = Object.create(dart.library);
  const http_parser = Object.create(dart.library);
  const $add = dartx.add;
  const $substring = dartx.substring;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $_set = dartx._set;
  const $toLowerCase = dartx.toLowerCase;
  const $contains = dartx.contains;
  const $split = dartx.split;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $forEach = dartx.forEach;
  const $toString = dartx.toString;
  const $indexOf = dartx.indexOf;
  const $isNotEmpty = dartx.isNotEmpty;
  const $asUint8List = dartx.asUint8List;
  const $toRadixString = dartx.toRadixString;
  const $toUpperCase = dartx.toUpperCase;
  const $codeUnits = dartx.codeUnits;
  const $setRange = dartx.setRange;
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let UnmodifiableMapViewOfString$String = () => (UnmodifiableMapViewOfString$String = dart.constFn(collection.UnmodifiableMapView$(core.String, core.String)))();
  let CaseInsensitiveMapOfString = () => (CaseInsensitiveMapOfString = dart.constFn(case_insensitive_map.CaseInsensitiveMap$(core.String)))();
  let ListOfAuthenticationChallenge = () => (ListOfAuthenticationChallenge = dart.constFn(core.List$(authentication_challenge.AuthenticationChallenge)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToAuthenticationChallenge = () => (VoidToAuthenticationChallenge = dart.constFn(dart.fnType(authentication_challenge.AuthenticationChallenge, [])))();
  let VoidToListOfAuthenticationChallenge = () => (VoidToListOfAuthenticationChallenge = dart.constFn(dart.fnType(ListOfAuthenticationChallenge(), [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let VoidToMediaType = () => (VoidToMediaType = dart.constFn(dart.fnType(media_type.MediaType, [])))();
  let LinkedHashMapOfString$String = () => (LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let intAndStringToNull = () => (intAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    get C1() {
      return C1 = dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: chunked_coding.ChunkedCodingCodec.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "boundary"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "size"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "size before LF"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body before CR"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body before LF"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end before CR"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end before LF"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: decoder.ChunkedCodingDecoder.prototype
      });
    },
    get C13() {
      return C13 = dart.constList([], core.int);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: encoder.ChunkedCodingEncoder.prototype
      });
    }
  });
  scan.parseList = function parseList(T, scanner, parseElement) {
    let result = _interceptors.JSArray$(T).of([]);
    while (dart.test(scanner.scan(","))) {
      scanner.scan(scan.whitespace);
    }
    result[$add](parseElement());
    scanner.scan(scan.whitespace);
    while (dart.test(scanner.scan(","))) {
      scanner.scan(scan.whitespace);
      if (dart.test(scanner.matches(",")) || dart.test(scanner.isDone)) continue;
      result[$add](parseElement());
      scanner.scan(scan.whitespace);
    }
    return result;
  };
  scan.expectQuotedString = function expectQuotedString(scanner, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    if (name == null) name = "quoted string";
    scanner.expect(scan._quotedString, {name: name});
    let string = scanner.lastMatch._get(0);
    return string[$substring](1, string.length - 1)[$replaceAllMapped](scan._quotedPair, dart.fn(match => match._get(1), MatchToString()));
  };
  dart.defineLazy(scan, {
    /*scan.token*/get token() {
      return core.RegExp.new("[^()<>@,;:\"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+");
    },
    /*scan._lws*/get _lws() {
      return core.RegExp.new("(?:\\r\\n)?[ \\t]+");
    },
    /*scan._quotedString*/get _quotedString() {
      return core.RegExp.new("\"(?:[^\"\\x00-\\x1F\\x7F]|\\\\.)*\"");
    },
    /*scan._quotedPair*/get _quotedPair() {
      return core.RegExp.new("\\\\(.)");
    },
    /*scan.nonToken*/get nonToken() {
      return core.RegExp.new("[()<>@,;:\"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]");
    },
    /*scan.whitespace*/get whitespace() {
      return core.RegExp.new("(?:" + dart.str(scan._lws.pattern) + ")*");
    }
  });
  const scheme$ = dart.privateName(authentication_challenge, "AuthenticationChallenge.scheme");
  const parameters$ = dart.privateName(authentication_challenge, "AuthenticationChallenge.parameters");
  authentication_challenge.AuthenticationChallenge = class AuthenticationChallenge extends core.Object {
    get scheme() {
      return this[scheme$];
    }
    set scheme(value) {
      super.scheme = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    static parseHeader(header) {
      return utils.wrapFormatException(ListOfAuthenticationChallenge(), "authentication header", header, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(header);
        scanner.scan(scan.whitespace);
        let challenges = scan.parseList(authentication_challenge.AuthenticationChallenge, scanner, dart.fn(() => {
          let scheme = authentication_challenge.AuthenticationChallenge._scanScheme(scanner, {whitespaceName: "\" \" or \"=\""});
          let params = new (IdentityMapOfString$String()).new();
          while (dart.test(scanner.scan(","))) {
            scanner.scan(scan.whitespace);
          }
          authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params);
          let beforeComma = scanner.position;
          while (dart.test(scanner.scan(","))) {
            scanner.scan(scan.whitespace);
            if (dart.test(scanner.matches(",")) || dart.test(scanner.isDone)) continue;
            scanner.expect(scan.token, {name: "a token"});
            let name = scanner.lastMatch._get(0);
            scanner.scan(scan.whitespace);
            if (!dart.test(scanner.scan("="))) {
              scanner.position = beforeComma;
              break;
            }
            scanner.scan(scan.whitespace);
            if (dart.test(scanner.scan(scan.token))) {
              params[$_set](name, scanner.lastMatch._get(0));
            } else {
              params[$_set](name, scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
            }
            scanner.scan(scan.whitespace);
            beforeComma = scanner.position;
          }
          return new authentication_challenge.AuthenticationChallenge.new(scheme, params);
        }, VoidToAuthenticationChallenge()));
        scanner.expectDone();
        return challenges;
      }, VoidToListOfAuthenticationChallenge()));
    }
    static parse(challenge) {
      return utils.wrapFormatException(authentication_challenge.AuthenticationChallenge, "authentication challenge", challenge, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(challenge);
        scanner.scan(scan.whitespace);
        let scheme = authentication_challenge.AuthenticationChallenge._scanScheme(scanner);
        let params = new (IdentityMapOfString$String()).new();
        scan.parseList(dart.void, scanner, dart.fn(() => authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params), VoidTovoid()));
        scanner.expectDone();
        return new authentication_challenge.AuthenticationChallenge.new(scheme, params);
      }, VoidToAuthenticationChallenge()));
    }
    static _scanScheme(scanner, opts) {
      let whitespaceName = opts && 'whitespaceName' in opts ? opts.whitespaceName : null;
      scanner.expect(scan.token, {name: "a token"});
      let scheme = scanner.lastMatch._get(0)[$toLowerCase]();
      scanner.scan(scan.whitespace);
      if (scanner.lastMatch == null || !scanner.lastMatch._get(0)[$contains](" ")) {
        scanner.expect(" ", {name: whitespaceName});
      }
      return scheme;
    }
    static _scanAuthParam(scanner, params) {
      scanner.expect(scan.token, {name: "a token"});
      let name = scanner.lastMatch._get(0);
      scanner.scan(scan.whitespace);
      scanner.expect("=");
      scanner.scan(scan.whitespace);
      if (dart.test(scanner.scan(scan.token))) {
        params[$_set](name, scanner.lastMatch._get(0));
      } else {
        params[$_set](name, scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
      }
      scanner.scan(scan.whitespace);
    }
  };
  (authentication_challenge.AuthenticationChallenge.new = function(scheme, parameters) {
    this[scheme$] = scheme;
    this[parameters$] = new (UnmodifiableMapViewOfString$String()).new(new (CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = authentication_challenge.AuthenticationChallenge.prototype;
  dart.addTypeTests(authentication_challenge.AuthenticationChallenge);
  dart.setLibraryUri(authentication_challenge.AuthenticationChallenge, "package:http_parser/src/authentication_challenge.dart");
  dart.setFieldSignature(authentication_challenge.AuthenticationChallenge, () => ({
    __proto__: dart.getFields(authentication_challenge.AuthenticationChallenge.__proto__),
    scheme: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  utils.wrapFormatException = function wrapFormatException(T, name, value, body) {
    try {
      return body();
    } catch (e) {
      let ex = dart.getThrown(e);
      if (span_exception.SourceSpanFormatException.is(ex)) {
        let error = ex;
        dart.throw(new span_exception.SourceSpanFormatException.new("Invalid " + dart.str(name) + ": " + dart.str(error.message), error.span, error.source));
      } else if (core.FormatException.is(ex)) {
        let error = ex;
        dart.throw(new core.FormatException.new("Invalid " + dart.str(name) + " \"" + dart.str(value) + "\": " + dart.str(error.message), error.source, error.offset));
      } else
        throw e;
    }
  };
  const _is_CaseInsensitiveMap_default = Symbol('_is_CaseInsensitiveMap_default');
  case_insensitive_map.CaseInsensitiveMap$ = dart.generic(V => {
    class CaseInsensitiveMap extends canonicalized_map.CanonicalizedMap$(core.String, core.String, V) {}
    (CaseInsensitiveMap.new = function() {
      CaseInsensitiveMap.__proto__.new.call(this, dart.fn(key => key[$toLowerCase](), StringToString()), {isValidKey: dart.fn(key => key != null, ObjectTobool())});
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    (CaseInsensitiveMap.from = function(other) {
      CaseInsensitiveMap.__proto__.from.call(this, other, dart.fn(key => key[$toLowerCase](), StringToString()), {isValidKey: dart.fn(key => key != null, ObjectTobool())});
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    dart.addTypeTests(CaseInsensitiveMap);
    CaseInsensitiveMap.prototype[_is_CaseInsensitiveMap_default] = true;
    dart.setLibraryUri(CaseInsensitiveMap, "package:http_parser/src/case_insensitive_map.dart");
    return CaseInsensitiveMap;
  });
  case_insensitive_map.CaseInsensitiveMap = case_insensitive_map.CaseInsensitiveMap$();
  dart.addTypeTests(case_insensitive_map.CaseInsensitiveMap, _is_CaseInsensitiveMap_default);
  const type$ = dart.privateName(media_type, "MediaType.type");
  const subtype$ = dart.privateName(media_type, "MediaType.subtype");
  const parameters$0 = dart.privateName(media_type, "MediaType.parameters");
  media_type.MediaType = class MediaType extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get subtype() {
      return this[subtype$];
    }
    set subtype(value) {
      super.subtype = value;
    }
    get parameters() {
      return this[parameters$0];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get mimeType() {
      return dart.str(this.type) + "/" + dart.str(this.subtype);
    }
    static parse(mediaType) {
      return utils.wrapFormatException(media_type.MediaType, "media type", mediaType, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(mediaType);
        scanner.scan(scan.whitespace);
        scanner.expect(scan.token);
        let type = scanner.lastMatch._get(0);
        scanner.expect("/");
        scanner.expect(scan.token);
        let subtype = scanner.lastMatch._get(0);
        scanner.scan(scan.whitespace);
        let parameters = new (IdentityMapOfString$String()).new();
        while (dart.test(scanner.scan(";"))) {
          scanner.scan(scan.whitespace);
          scanner.expect(scan.token);
          let attribute = scanner.lastMatch._get(0);
          scanner.expect("=");
          let value = null;
          if (dart.test(scanner.scan(scan.token))) {
            value = scanner.lastMatch._get(0);
          } else {
            value = scan.expectQuotedString(scanner);
          }
          scanner.scan(scan.whitespace);
          parameters[$_set](attribute, value);
        }
        scanner.expectDone();
        return new media_type.MediaType.new(type, subtype, parameters);
      }, VoidToMediaType()));
    }
    change(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subtype = opts && 'subtype' in opts ? opts.subtype : null;
      let mimeType = opts && 'mimeType' in opts ? opts.mimeType : null;
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let clearParameters = opts && 'clearParameters' in opts ? opts.clearParameters : false;
      if (mimeType != null) {
        if (type != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [type] and [mimeType]."));
        } else if (subtype != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [subtype] and " + "[mimeType]."));
        }
        let segments = mimeType[$split]("/");
        if (segments[$length] !== 2) {
          dart.throw(new core.FormatException.new("Invalid mime type \"" + dart.str(mimeType) + "\"."));
        }
        type = segments[$_get](0);
        subtype = segments[$_get](1);
      }
      if (type == null) type = this.type;
      if (subtype == null) subtype = this.subtype;
      if (parameters == null) parameters = new (IdentityMapOfString$String()).new();
      if (!dart.test(clearParameters)) {
        let newParameters = parameters;
        parameters = LinkedHashMapOfString$String().from(this.parameters);
        parameters[$addAll](newParameters);
      }
      return new media_type.MediaType.new(type, subtype, parameters);
    }
    toString() {
      let t2;
      let buffer = (t2 = new core.StringBuffer.new(), t2.write(this.type), t2.write("/"), t2.write(this.subtype), t2);
      this.parameters[$forEach](dart.fn((attribute, value) => {
        let t2;
        buffer.write("; " + dart.str(attribute) + "=");
        if (dart.test(scan.nonToken.hasMatch(value))) {
          t2 = buffer;
          t2.write("\"");
          t2.write(value[$replaceAllMapped](media_type._escapedChar, dart.fn(match => "\\" + dart.notNull(match._get(0)), MatchToString())));
          t2.write("\"");
          t2;
        } else {
          buffer.write(value);
        }
      }, StringAndStringToNull()));
      return dart.toString(buffer);
    }
  };
  (media_type.MediaType.new = function(type, subtype, parameters) {
    if (parameters === void 0) parameters = null;
    this[type$] = type[$toLowerCase]();
    this[subtype$] = subtype[$toLowerCase]();
    this[parameters$0] = new (UnmodifiableMapViewOfString$String()).new(parameters == null ? new (IdentityMapOfString$String()).new() : new (CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = media_type.MediaType.prototype;
  dart.addTypeTests(media_type.MediaType);
  dart.setMethodSignature(media_type.MediaType, () => ({
    __proto__: dart.getMethods(media_type.MediaType.__proto__),
    change: dart.fnType(media_type.MediaType, [], {clearParameters: core.bool, mimeType: core.String, parameters: core.Map$(core.String, core.String), subtype: core.String, type: core.String}, {})
  }));
  dart.setGetterSignature(media_type.MediaType, () => ({
    __proto__: dart.getGetters(media_type.MediaType.__proto__),
    mimeType: core.String
  }));
  dart.setLibraryUri(media_type.MediaType, "package:http_parser/src/media_type.dart");
  dart.setFieldSignature(media_type.MediaType, () => ({
    __proto__: dart.getFields(media_type.MediaType.__proto__),
    type: dart.finalFieldType(core.String),
    subtype: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(media_type.MediaType, ['toString']);
  dart.defineLazy(media_type, {
    /*media_type._escapedChar*/get _escapedChar() {
      return core.RegExp.new("[\"\\x00-\\x1F\\x7F]");
    }
  });
  http_date.formatHttpDate = function formatHttpDate(date) {
    let t2;
    date = date.toUtc();
    let buffer = (t2 = new core.StringBuffer.new(), t2.write(http_date._WEEKDAYS[$_get](dart.notNull(date.weekday) - 1)), t2.write(", "), t2.write(dart.notNull(date.day) <= 9 ? "0" : ""), t2.write(dart.toString(date.day)), t2.write(" "), t2.write(http_date._MONTHS[$_get](dart.notNull(date.month) - 1)), t2.write(" "), t2.write(dart.toString(date.year)), t2.write(dart.notNull(date.hour) <= 9 ? " 0" : " "), t2.write(dart.toString(date.hour)), t2.write(dart.notNull(date.minute) <= 9 ? ":0" : ":"), t2.write(dart.toString(date.minute)), t2.write(dart.notNull(date.second) <= 9 ? ":0" : ":"), t2.write(dart.toString(date.second)), t2.write(" GMT"), t2);
    return dart.toString(buffer);
  };
  http_date.parseHttpDate = function parseHttpDate(date) {
    return utils.wrapFormatException(core.DateTime, "HTTP date", date, dart.fn(() => {
      let scanner = new string_scanner.StringScanner.new(date);
      if (dart.test(scanner.scan(http_date._longWeekdayRegExp))) {
        scanner.expect(", ");
        let day = http_date._parseInt(scanner, 2);
        scanner.expect("-");
        let month = http_date._parseMonth(scanner);
        scanner.expect("-");
        let year = 1900 + dart.notNull(http_date._parseInt(scanner, 2));
        scanner.expect(" ");
        let time = http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(http_date._shortWeekdayRegExp);
      if (dart.test(scanner.scan(", "))) {
        let day = http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let month = http_date._parseMonth(scanner);
        scanner.expect(" ");
        let year = http_date._parseInt(scanner, 4);
        scanner.expect(" ");
        let time = http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(" ");
      let month = http_date._parseMonth(scanner);
      scanner.expect(" ");
      let day = dart.test(scanner.scan(" ")) ? http_date._parseInt(scanner, 1) : http_date._parseInt(scanner, 2);
      scanner.expect(" ");
      let time = http_date._parseTime(scanner);
      scanner.expect(" ");
      let year = http_date._parseInt(scanner, 4);
      scanner.expectDone();
      return http_date._makeDateTime(year, month, day, time);
    }, VoidToDateTime()));
  };
  http_date._parseMonth = function _parseMonth(scanner) {
    scanner.expect(http_date._monthRegExp);
    return dart.notNull(http_date._MONTHS[$indexOf](scanner.lastMatch._get(0))) + 1;
  };
  http_date._parseInt = function _parseInt(scanner, digits) {
    scanner.expect(http_date._digitRegExp);
    if (scanner.lastMatch._get(0).length !== digits) {
      scanner.error("expected a " + dart.str(digits) + "-digit number.");
    }
    return core.int.parse(scanner.lastMatch._get(0));
  };
  http_date._parseTime = function _parseTime(scanner) {
    let hours = http_date._parseInt(scanner, 2);
    if (dart.notNull(hours) >= 24) scanner.error("hours may not be greater than 24.");
    scanner.expect(":");
    let minutes = http_date._parseInt(scanner, 2);
    if (dart.notNull(minutes) >= 60) scanner.error("minutes may not be greater than 60.");
    scanner.expect(":");
    let seconds = http_date._parseInt(scanner, 2);
    if (dart.notNull(seconds) >= 60) scanner.error("seconds may not be greater than 60.");
    return new core.DateTime.new(1, 1, 1, hours, minutes, seconds);
  };
  http_date._makeDateTime = function _makeDateTime(year, month, day, time) {
    let dateTime = new core.DateTime.utc(year, month, day, time.hour, time.minute, time.second);
    if (dateTime.month != month) {
      dart.throw(new core.FormatException.new("invalid day '" + dart.str(day) + "' for month '" + dart.str(month) + "'."));
    }
    return dateTime;
  };
  let C0;
  let C1;
  dart.defineLazy(http_date, {
    /*http_date._WEEKDAYS*/get _WEEKDAYS() {
      return C0 || CT.C0;
    },
    /*http_date._MONTHS*/get _MONTHS() {
      return C1 || CT.C1;
    },
    /*http_date._shortWeekdayRegExp*/get _shortWeekdayRegExp() {
      return core.RegExp.new("Mon|Tue|Wed|Thu|Fri|Sat|Sun");
    },
    /*http_date._longWeekdayRegExp*/get _longWeekdayRegExp() {
      return core.RegExp.new("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday");
    },
    /*http_date._monthRegExp*/get _monthRegExp() {
      return core.RegExp.new("Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec");
    },
    /*http_date._digitRegExp*/get _digitRegExp() {
      return core.RegExp.new("\\d+");
    }
  });
  chunked_coding.ChunkedCodingCodec = class ChunkedCodingCodec extends convert.Codec$(core.List$(core.int), core.List$(core.int)) {
    get encoder() {
      return encoder.chunkedCodingEncoder;
    }
    get decoder() {
      return decoder.chunkedCodingDecoder;
    }
  };
  (chunked_coding.ChunkedCodingCodec.__ = function() {
    chunked_coding.ChunkedCodingCodec.__proto__.new.call(this);
    ;
  }).prototype = chunked_coding.ChunkedCodingCodec.prototype;
  dart.addTypeTests(chunked_coding.ChunkedCodingCodec);
  dart.setGetterSignature(chunked_coding.ChunkedCodingCodec, () => ({
    __proto__: dart.getGetters(chunked_coding.ChunkedCodingCodec.__proto__),
    encoder: encoder.ChunkedCodingEncoder,
    decoder: decoder.ChunkedCodingDecoder
  }));
  dart.setLibraryUri(chunked_coding.ChunkedCodingCodec, "package:http_parser/src/chunked_coding.dart");
  let C2;
  dart.defineLazy(chunked_coding, {
    /*chunked_coding.chunkedCoding*/get chunkedCoding() {
      return C2 || CT.C2;
    }
  });
  const _decode = dart.privateName(decoder, "_decode");
  const _state = dart.privateName(decoder, "_state");
  decoder.ChunkedCodingDecoder = class ChunkedCodingDecoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    convert(bytes) {
      ListOfint()._check(bytes);
      let sink = new decoder._Sink.new(null);
      let output = sink[_decode](bytes, 0, bytes[$length]);
      if (dart.equals(sink[_state], decoder._State.end)) return output;
      dart.throw(new core.FormatException.new("Input ended unexpectedly.", bytes, bytes[$length]));
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new decoder._Sink.new(sink);
    }
  };
  (decoder.ChunkedCodingDecoder.__ = function() {
    decoder.ChunkedCodingDecoder.__proto__.new.call(this);
    ;
  }).prototype = decoder.ChunkedCodingDecoder.prototype;
  dart.addTypeTests(decoder.ChunkedCodingDecoder);
  dart.setMethodSignature(decoder.ChunkedCodingDecoder, () => ({
    __proto__: dart.getMethods(decoder.ChunkedCodingDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(decoder.ChunkedCodingDecoder, "package:http_parser/src/chunked_coding/decoder.dart");
  const _size = dart.privateName(decoder, "_size");
  const _sink$ = dart.privateName(decoder, "_sink");
  const _close = dart.privateName(decoder, "_close");
  const _digitForByte = dart.privateName(decoder, "_digitForByte");
  const _State__name = dart.privateName(decoder, "_State._name");
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  decoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      let output = this[_decode](chunk, start, end);
      if (dart.test(output[$isNotEmpty])) this[_sink$].add(output);
      if (dart.test(isLast)) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (!dart.equals(this[_state], decoder._State.end)) {
        dart.throw(new core.FormatException.new("Input ended unexpectedly.", chunk, index));
      }
      this[_sink$].close();
    }
    [_decode](bytes, start, end) {
      function assertCurrentChar(char, name) {
        if (bytes[$_get](start) != char) {
          dart.throw(new core.FormatException.new("Expected " + dart.str(name) + ".", bytes, start));
        }
      }
      dart.fn(assertCurrentChar, intAndStringToNull());
      let buffer = new typed_buffers.Uint8Buffer.new();
      while (start != end) {
        switch (this[_state]) {
          case C3 || CT.C3:
          {
            this[_size] = this[_digitForByte](bytes, start);
            this[_state] = decoder._State.size;
            start = dart.notNull(start) + 1;
            break;
          }
          case C4 || CT.C4:
          {
            if (bytes[$_get](start) === 13) {
              this[_state] = decoder._State.sizeBeforeLF;
            } else {
              this[_size] = (dart.notNull(this[_size]) << 4 >>> 0) + dart.notNull(this[_digitForByte](bytes, start));
            }
            start = dart.notNull(start) + 1;
            break;
          }
          case C5 || CT.C5:
          {
            assertCurrentChar(10, "LF");
            this[_state] = this[_size] === 0 ? decoder._State.endBeforeCR : decoder._State.body;
            start = dart.notNull(start) + 1;
            break;
          }
          case C6 || CT.C6:
          {
            let chunkEnd = math.min(core.int, end, dart.notNull(start) + dart.notNull(this[_size]));
            buffer.addAll(bytes, start, chunkEnd);
            this[_size] = dart.notNull(this[_size]) - (chunkEnd - dart.notNull(start));
            start = chunkEnd;
            if (this[_size] === 0) this[_state] = decoder._State.bodyBeforeCR;
            break;
          }
          case C7 || CT.C7:
          {
            assertCurrentChar(13, "CR");
            this[_state] = decoder._State.bodyBeforeLF;
            start = dart.notNull(start) + 1;
            break;
          }
          case C8 || CT.C8:
          {
            assertCurrentChar(10, "LF");
            this[_state] = decoder._State.boundary;
            start = dart.notNull(start) + 1;
            break;
          }
          case C9 || CT.C9:
          {
            assertCurrentChar(13, "CR");
            this[_state] = decoder._State.endBeforeLF;
            start = dart.notNull(start) + 1;
            break;
          }
          case C10 || CT.C10:
          {
            assertCurrentChar(10, "LF");
            this[_state] = decoder._State.end;
            start = dart.notNull(start) + 1;
            break;
          }
          case C11 || CT.C11:
          {
            dart.throw(new core.FormatException.new("Expected no more data.", bytes, start));
          }
        }
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    [_digitForByte](bytes, index) {
      let byte = bytes[$_get](index);
      let digit = (48 ^ dart.notNull(byte)) >>> 0;
      if (digit <= 9) {
        if (digit >= 0) return digit;
      } else {
        let letter = (32 | dart.notNull(byte)) >>> 0;
        if (97 <= letter && letter <= 102) return letter - 97 + 10;
      }
      dart.throw(new core.FormatException.new("Invalid hexadecimal byte 0x" + byte[$toRadixString](16)[$toUpperCase]() + ".", bytes, index));
    }
  };
  (decoder._Sink.new = function(_sink) {
    this[_state] = decoder._State.boundary;
    this[_size] = null;
    this[_sink$] = _sink;
    decoder._Sink.__proto__.new.call(this);
    ;
  }).prototype = decoder._Sink.prototype;
  dart.addTypeTests(decoder._Sink);
  dart.setMethodSignature(decoder._Sink, () => ({
    __proto__: dart.getMethods(decoder._Sink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [core.List$(core.int), core.int]),
    [_decode]: dart.fnType(typed_data.Uint8List, [core.List$(core.int), core.int, core.int]),
    [_digitForByte]: dart.fnType(core.int, [core.List$(core.int), core.int])
  }));
  dart.setLibraryUri(decoder._Sink, "package:http_parser/src/chunked_coding/decoder.dart");
  dart.setFieldSignature(decoder._Sink, () => ({
    __proto__: dart.getFields(decoder._Sink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(core.List$(core.int))),
    [_state]: dart.fieldType(decoder._State),
    [_size]: dart.fieldType(core.int)
  }));
  const _name = dart.privateName(decoder, "_name");
  decoder._State = class _State extends core.Object {
    get [_name]() {
      return this[_name$];
    }
    set [_name](value) {
      super[_name] = value;
    }
    toString() {
      return this[_name];
    }
  };
  (decoder._State.__ = function(_name) {
    this[_name$] = _name;
    ;
  }).prototype = decoder._State.prototype;
  dart.addTypeTests(decoder._State);
  const _name$ = _State__name;
  dart.setLibraryUri(decoder._State, "package:http_parser/src/chunked_coding/decoder.dart");
  dart.setFieldSignature(decoder._State, () => ({
    __proto__: dart.getFields(decoder._State.__proto__),
    [_name]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(decoder._State, ['toString']);
  dart.defineLazy(decoder._State, {
    /*decoder._State.boundary*/get boundary() {
      return C3 || CT.C3;
    },
    /*decoder._State.size*/get size() {
      return C4 || CT.C4;
    },
    /*decoder._State.sizeBeforeLF*/get sizeBeforeLF() {
      return C5 || CT.C5;
    },
    /*decoder._State.body*/get body() {
      return C6 || CT.C6;
    },
    /*decoder._State.bodyBeforeCR*/get bodyBeforeCR() {
      return C7 || CT.C7;
    },
    /*decoder._State.bodyBeforeLF*/get bodyBeforeLF() {
      return C8 || CT.C8;
    },
    /*decoder._State.endBeforeCR*/get endBeforeCR() {
      return C9 || CT.C9;
    },
    /*decoder._State.endBeforeLF*/get endBeforeLF() {
      return C10 || CT.C10;
    },
    /*decoder._State.end*/get end() {
      return C11 || CT.C11;
    }
  });
  let C12;
  dart.defineLazy(decoder, {
    /*decoder.chunkedCodingDecoder*/get chunkedCodingDecoder() {
      return C12 || CT.C12;
    }
  });
  encoder.ChunkedCodingEncoder = class ChunkedCodingEncoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return encoder._convert(bytes, 0, bytes[$length], {isLast: true});
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new encoder._Sink.new(sink);
    }
  };
  (encoder.ChunkedCodingEncoder.__ = function() {
    encoder.ChunkedCodingEncoder.__proto__.new.call(this);
    ;
  }).prototype = encoder.ChunkedCodingEncoder.prototype;
  dart.addTypeTests(encoder.ChunkedCodingEncoder);
  dart.setMethodSignature(encoder.ChunkedCodingEncoder, () => ({
    __proto__: dart.getMethods(encoder.ChunkedCodingEncoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  dart.setLibraryUri(encoder.ChunkedCodingEncoder, "package:http_parser/src/chunked_coding/encoder.dart");
  const _sink$0 = dart.privateName(encoder, "_sink");
  encoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink$0].add(encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$0].add(encoder._convert(chunk, start, end, {isLast: isLast}));
      if (dart.test(isLast)) this[_sink$0].close();
    }
    close() {
      this[_sink$0].add(encoder._doneChunk);
      this[_sink$0].close();
    }
  };
  (encoder._Sink.new = function(_sink) {
    this[_sink$0] = _sink;
    encoder._Sink.__proto__.new.call(this);
    ;
  }).prototype = encoder._Sink.prototype;
  dart.addTypeTests(encoder._Sink);
  dart.setMethodSignature(encoder._Sink, () => ({
    __proto__: dart.getMethods(encoder._Sink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(encoder._Sink, "package:http_parser/src/chunked_coding/encoder.dart");
  dart.setFieldSignature(encoder._Sink, () => ({
    __proto__: dart.getFields(encoder._Sink.__proto__),
    [_sink$0]: dart.finalFieldType(core.Sink$(core.List$(core.int)))
  }));
  let C13;
  encoder._convert = function _convert(bytes, start, end, opts) {
    let t2, t2$, t2$0, t2$1;
    let isLast = opts && 'isLast' in opts ? opts.isLast : false;
    if (end == start) return dart.test(isLast) ? encoder._doneChunk : C13 || CT.C13;
    let size = dart.notNull(end) - dart.notNull(start);
    let sizeInHex = size[$toRadixString](16);
    let footerSize = dart.test(isLast) ? encoder._doneChunk[$length] : 0;
    let list = _native_typed_data.NativeUint8List.new(sizeInHex.length + 4 + size + dart.notNull(footerSize));
    list[$setRange](0, sizeInHex.length, sizeInHex[$codeUnits]);
    let cursor = sizeInHex.length;
    list[$_set]((t2 = cursor, cursor = t2 + 1, t2), 13);
    list[$_set]((t2$ = cursor, cursor = t2$ + 1, t2$), 10);
    list[$setRange](cursor, cursor + dart.notNull(end) - dart.notNull(start), bytes, start);
    cursor = cursor + (dart.notNull(end) - dart.notNull(start));
    list[$_set]((t2$0 = cursor, cursor = t2$0 + 1, t2$0), 13);
    list[$_set]((t2$1 = cursor, cursor = t2$1 + 1, t2$1), 10);
    if (dart.test(isLast)) {
      list[$setRange](dart.notNull(list[$length]) - dart.notNull(footerSize), list[$length], encoder._doneChunk);
    }
    return list;
  };
  let C14;
  dart.defineLazy(encoder, {
    /*encoder.chunkedCodingEncoder*/get chunkedCodingEncoder() {
      return C14 || CT.C14;
    },
    /*encoder._doneChunk*/get _doneChunk() {
      return _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([48, 13, 10, 13, 10]));
    }
  });
  dart.trackLibraries("packages/http_parser/http_parser", {
    "package:http_parser/src/scan.dart": scan,
    "package:http_parser/src/authentication_challenge.dart": authentication_challenge,
    "package:http_parser/src/utils.dart": utils,
    "package:http_parser/src/case_insensitive_map.dart": case_insensitive_map,
    "package:http_parser/src/media_type.dart": media_type,
    "package:http_parser/src/http_date.dart": http_date,
    "package:http_parser/src/chunked_coding.dart": chunked_coding,
    "package:http_parser/src/chunked_coding/decoder.dart": decoder,
    "package:http_parser/src/chunked_coding/encoder.dart": encoder,
    "package:http_parser/http_parser.dart": http_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/scan.dart","src/authentication_challenge.dart","src/utils.dart","src/case_insensitive_map.dart","src/media_type.dart","src/http_date.dart","src/chunked_coding.dart","src/chunked_coding/decoder.dart","src/chunked_coding/encoder.dart"],"names":[],"mappings":"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","file":"http_parser.ddc.js"}');
  // Exports:
  return {
    src__scan: scan,
    src__authentication_challenge: authentication_challenge,
    src__utils: utils,
    src__case_insensitive_map: case_insensitive_map,
    src__media_type: media_type,
    src__http_date: http_date,
    src__chunked_coding: chunked_coding,
    src__chunked_coding__decoder: decoder,
    src__chunked_coding__encoder: encoder,
    http_parser: http_parser
  };
});

//# sourceMappingURL=http_parser.ddc.js.map
