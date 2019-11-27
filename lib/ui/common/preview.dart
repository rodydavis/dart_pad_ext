import 'package:flutter/material.dart';
import 'dart:ui' as ui;
import 'dart:html' as html;
import 'package:http/http.dart' as http;

import '../../src/flutter/common.dart';
import '../../src/flutter/dartservices.dart';
import '../../src/iframe/execution.dart';
import '../../src/iframe/execution_iframe.dart';

class FlutterWebPreview extends StatefulWidget {
  final String fullCode;
  final num width, height;

  const FlutterWebPreview({
    Key key,
    @required this.fullCode,
    @required this.width,
    @required this.height,
  }) : super(key: key);
  @override
  _FlutterWebPreviewState createState() => _FlutterWebPreviewState();
}

class _FlutterWebPreviewState extends State<FlutterWebPreview> {
  DartservicesApi get dartServices => DartservicesApi(
        http.Client(),
        rootUrl: "https://dart-services.appspot.com/",
      );
  ExecutionService executionSvc;

  Future<String> _loadJsCode(String fullCode) {
    var input = CompileRequest()..source = fullCode;
    // print('Input: $fullCode');
    return dartServices
        .compileDDC(input)
        .timeout(longServiceCallTimeout)
        .then((CompileDDCResponse response) {
      executionSvc.execute(
        '',
        '',
        response.result,
        modulesBaseUrl: response.modulesBaseUrl,
      );
      print('execution -> ddc-compile-success');
      return response.result;
    }).catchError((e, st) {
      // consoleExpandController.showOutput('Error compiling to JavaScript:\n$e',
      //     error: true);
      print('Error: $e -> $st');
      print('execution -> ddc-compile-failure');
      return "";
    });
  }

  bool _loaded = false;
  String _id = 'iframe-output';
  @override
  void initState() {
    _loadJsCode(widget.fullCode).then((output) {
      final _iframe = html.IFrameElement();
      _iframe.src = 'javascript:void(0);';
      _iframe.innerHtml = output;
      final isDarkMode = Theme.of(context).brightness == Brightness.dark;
      executionSvc = ExecutionServiceIFrame(_iframe)
        ..frameSrc =
            isDarkMode ? '../scripts/frame_dark.html' : '../scripts/frame.html';
      // ignore: undefined_prefixed_name
      ui.platformViewRegistry.registerViewFactory(_id, (int viewId) {
        final element = _iframe
          ..height = widget.height.toInt().toString()
          ..width = widget.width.toInt().toString();
        return element;
      });
      if (mounted)
        setState(() {
          _loaded = true;
        });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widget?.width,
      height: widget?.height,
      child: _loaded
          ? AbsorbPointer(child: HtmlElementView(viewType: _id))
          : Center(child: CircularProgressIndicator()),
    );
  }
}
