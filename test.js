define('dartpad_main', ['dart_sdk', 'flutter_web'], function(dart_sdk, flutter_web) {
    'use strict';
     const core = dart_sdk.core;
     const ui = dart_sdk.ui;
     const async = dart_sdk.async;
     const dart = dart_sdk.dart;
     const dartx = dart_sdk.dartx;
     const app = flutter_web.src__material__app;
     const scaffold = flutter_web.src__material__scaffold;
     const framework = flutter_web.src__widgets__framework;
     const gesture_detector = flutter_web.src__widgets__gesture_detector;
     const drag_details = flutter_web.src__gestures__drag_details;
     const container = flutter_web.src__widgets__container;
     const basic = flutter_web.src__widgets__basic;
     const colors = flutter_web.src__material__colors;
     const custom_paint = flutter_web.src__rendering__custom_paint;
     const binding = flutter_web.src__widgets__binding;
     const bootstrap = Object.create(dart.library);
     const main = Object.create(dart.library);
     let DragStartDetailsTobool = () => (DragStartDetailsTobool = dart.constFn(dart.fnType(core.bool, [drag_details.DragStartDetails])))();
     let DragEndDetailsToNull = () => (DragEndDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragEndDetails])))();
     let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
     let DragUpdateDetailsToNull = () => (DragUpdateDetailsToNull = dart.constFn(dart.fnType(core.Null, [drag_details.DragUpdateDetails])))();
     const CT = Object.create(null);
     bootstrap.main = function main$() {
      return async.async(dart.void, function* main$() {
        yield ui.webOnlyInitializePlatform();
             main.main();
          });
        };
         main.MyApp = class MyApp extends framework.StatelessWidget {
      build(context) {
        return new app.MaterialApp.new({title: "Draggable Custom Painter", home: new scaffold.Scaffold.new({body: new main.DraggableCustomPainter.new()})});
          }
        };
         (main.MyApp.new = function() {
      main.MyApp.__proto__.new.call(this);
         ;
    }).prototype = main.MyApp.prototype;
       dart.addTypeTests(main.MyApp);
       dart.setMethodSignature(main.MyApp, () => ({
      __proto__: dart.getMethods(main.MyApp.__proto__),
         build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
       dart.setLibraryUri(main.MyApp, "file:///tmp/dartpadRIRSZK/main.dart");
       main.DraggableCustomPainter = class DraggableCustomPainter extends framework.StatefulWidget {
      createState() {
        return new main._DraggableCustomPainterState.new();
          }
        };
         (main.DraggableCustomPainter.new = function() {
      main.DraggableCustomPainter.__proto__.new.call(this);
         ;
    }).prototype = main.DraggableCustomPainter.prototype;
       dart.addTypeTests(main.DraggableCustomPainter);
       dart.setMethodSignature(main.DraggableCustomPainter, () => ({
      __proto__: dart.getMethods(main.DraggableCustomPainter.__proto__),
         createState: dart.fnType(main._DraggableCustomPainterState, [])
    }));
       dart.setLibraryUri(main.DraggableCustomPainter, "file:///tmp/dartpadRIRSZK/main.dart");
       const _dragging = dart.privateName(main, "_dragging");
       const _paint = dart.privateName(main, "_paint");
       const _insideRect = dart.privateName(main, "_insideRect");
       main._DraggableCustomPainterState = class _DraggableCustomPainterState extends framework.State$(main.DraggableCustomPainter) {
      [_insideRect](x, y) {
        return dart.notNull(x) >= dart.notNull(this.xPos) && dart.notNull(x) <= dart.notNull(this.xPos) + dart.notNull(this.width) && dart.notNull(y) >= dart.notNull(this.yPos) && dart.notNull(y) <= dart.notNull(this.yPos) + dart.notNull(this.height);
          }
           build(context) {
        return new gesture_detector.GestureDetector.new({onPanStart: dart.fn(details => this[_dragging] = this[_insideRect](details.globalPosition.dx, details.globalPosition.dy), DragStartDetailsTobool()), onPanEnd: dart.fn(details => {
            this[_dragging] = false;
                  }, DragEndDetailsToNull()), onPanUpdate: dart.fn(details => {
            if (dart.test(this[_dragging])) {
              this.setState(dart.fn(() => {
                this.xPos = dart.notNull(this.xPos) + dart.notNull(details.delta.dx);
                             this.yPos = dart.notNull(this.yPos) + dart.notNull(details.delta.dy);
                          }, VoidToNull()));
                        }
                      }, DragUpdateDetailsToNull()), child: new container.Container.new({child: new basic.CustomPaint.new({painter: new main.RectanglePainter.new({rect: new ui.Rect.fromLTWH(this.xPos, this.yPos, this.width, this.height), painter: this[_paint]}), child: new container.Container.new({color: colors.Colors.red})})})});
                  }
                };
                 (main._DraggableCustomPainterState.new = function() {
      this.xPos = 0.0;
         this.yPos = 0.0;
         this.width = 100.0;
         this.height = 100.0;
         this[_dragging] = false;
         this[_paint] = new ui.Paint.new();
         main._DraggableCustomPainterState.__proto__.new.call(this);
         ;
    }).prototype = main._DraggableCustomPainterState.prototype;
       dart.addTypeTests(main._DraggableCustomPainterState);
       dart.setMethodSignature(main._DraggableCustomPainterState, () => ({
      __proto__: dart.getMethods(main._DraggableCustomPainterState.__proto__),
         [_insideRect]: dart.fnType(core.bool, [core.double, core.double]),
         build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
       dart.setLibraryUri(main._DraggableCustomPainterState, "file:///tmp/dartpadRIRSZK/main.dart");
       dart.setFieldSignature(main._DraggableCustomPainterState, () => ({
      __proto__: dart.getFields(main._DraggableCustomPainterState.__proto__),
         xPos: dart.fieldType(core.double),
         yPos: dart.fieldType(core.double),
         width: dart.finalFieldType(core.double),
         height: dart.finalFieldType(core.double),
         [_dragging]: dart.fieldType(core.bool),
         [_paint]: dart.finalFieldType(ui.Paint)
    }));
       const RectanglePainter_rect = dart.privateName(main, "RectanglePainter.rect");
       const RectanglePainter_painter = dart.privateName(main, "RectanglePainter.painter");
       main.RectanglePainter = class RectanglePainter extends custom_paint.CustomPainter {
      get rect() {
        return this[rect$];
          }
           set rect(value) {
        super.rect = value;
          }
           get painter() {
        return this[painter$];
          }
           set painter(value) {
        super.painter = value;
          }
           paint(canvas, size) {
        canvas.drawRect(this.rect, this.painter);
          }
           shouldRepaint(oldDelegate) {
        custom_paint.CustomPainter._check(oldDelegate);
             return true;
          }
        };
         (main.RectanglePainter.new = function(opts) {
      let rect = opts && 'rect' in opts ? opts.rect : null;
         let painter = opts && 'painter' in opts ? opts.painter : null;
         this[rect$] = rect;
         this[painter$] = painter;
         main.RectanglePainter.__proto__.new.call(this);
         ;
    }).prototype = main.RectanglePainter.prototype;
       dart.addTypeTests(main.RectanglePainter);
       const rect$ = RectanglePainter_rect;
       const painter$ = RectanglePainter_painter;
       dart.setMethodSignature(main.RectanglePainter, () => ({
      __proto__: dart.getMethods(main.RectanglePainter.__proto__),
         paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
         shouldRepaint: dart.fnType(core.bool, [core.Object])
    }));
       dart.setLibraryUri(main.RectanglePainter, "file:///tmp/dartpadRIRSZK/main.dart");
       dart.setFieldSignature(main.RectanglePainter, () => ({
      __proto__: dart.getFields(main.RectanglePainter.__proto__),
         rect: dart.finalFieldType(ui.Rect),
         painter: dart.finalFieldType(ui.Paint)
    }));
       main.main = function main$0() {
      return binding.runApp(new main.MyApp.new());
    };
       dart.trackLibraries("dartpad_main", {
      "file:///tmp/dartpadRIRSZK/bootstrap.dart": bootstrap,
         "file:///tmp/dartpadRIRSZK/main.dart": main
    }, {
   
}, null);
 // Exports:
 return {
      tmp__dartpadRIRSZK__bootstrap: bootstrap,
         tmp__dartpadRIRSZK__main: main
    };n});nn//# sourceMappingURL=main.dart.js.mapn