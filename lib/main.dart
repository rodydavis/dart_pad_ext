import 'dart:async';

import 'package:flutter/material.dart';
import 'dart:js' as js;

import 'package:flutter_colorpicker/flutter_colorpicker.dart';

import 'colors.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  void initState() {
    super.initState();
  }

  Color _value = Colors.white;
  final _debouncer = Debouncer(milliseconds: 500);
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, dimens) => Material(
        child: Center(
          child: ColorPicker(
            pickerColor: _value,
            colorPickerWidth: dimens.maxWidth / 2,
            onColorChanged: (val) {
              if (mounted)
                setState(() {
                  _value = val;
                });
              _debouncer.run(() {
                final _color = UIColors.colorToString(val.value);
                print('Color -> $_color');
                js.context.callMethod('changeColor', ['$_color']);
              });
            },
          ),
        ),
        // floatingActionButton: FloatingActionButton(
        //   child: Icon(Icons.add),
        //   onPressed: () {
        //     js.context.callMethod('changeColor', ['#3aa757']);
        //   },
        // ),
      ),
    );
  }
}

class Debouncer {
  final int milliseconds;
  VoidCallback action;
  Timer _timer;

  Debouncer({this.milliseconds});

  run(VoidCallback action) {
    if (_timer != null) {
      _timer.cancel();
    }

    _timer = Timer(Duration(milliseconds: milliseconds), action);
  }
}
