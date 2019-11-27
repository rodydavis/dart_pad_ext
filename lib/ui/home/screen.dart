import 'package:flutter/material.dart';
import 'package:templates/ui/common/preview.dart';


class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String fullCode;
  @override
  void initState() {
    fullCode = """
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Draggable Custom Painter',
      home: Scaffold(
        body: DraggableCustomPainter(),
      ),
    );
  }
}

class DraggableCustomPainter extends StatefulWidget {
  @override
  _DraggableCustomPainterState createState() => _DraggableCustomPainterState();
}

class _DraggableCustomPainterState extends State<DraggableCustomPainter> {
  var xPos = 0.0;
  var yPos = 0.0;
  final width = 100.0;
  final height = 100.0;
  bool _dragging = false;

  /// Is the point (x, y) inside the rect?
  bool _insideRect(double x, double y) =>
      x >= xPos && x <= xPos + width && y >= yPos && y <= yPos + height;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onPanStart: (details) => _dragging = _insideRect(
        details.globalPosition.dx,
        details.globalPosition.dy,
      ),
      onPanEnd: (details) {
        _dragging = false;
      },
      onPanUpdate: (details) {
        if (_dragging) {
          setState(() {
            xPos += details.delta.dx;
            yPos += details.delta.dy;
          });
        }
      },
      child: Container(
        child: CustomPaint(
          painter: RectanglePainter(Rect.fromLTWH(xPos, yPos, width, height)),
          child: Container(),
        ),
      ),
    );
  }
}

class RectanglePainter extends CustomPainter {
  RectanglePainter(this.rect);
  final Rect rect;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(rect, Paint());
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => true;
}


""";
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, dimens) => Material(
          child: FlutterWebPreview(
        fullCode: fullCode,
        width: dimens.maxWidth,
        height: dimens.maxHeight,
      )),
    );
  }
}
