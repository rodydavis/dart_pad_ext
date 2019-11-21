import 'package:flutter/material.dart';
import 'dart:js' as js;

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
    // color.query(
    //   color.Options(
    //     currentWindow: true,
    //     active: true,
    //   ),
    //   (tabs) {
    //     final _first = tabs.first;
    //     final _color = '#3aa757';
    //     _first.executeScript(
    //       _first.id,
    //       code: 'document.body.style.backgroundColor = "' + _color + '";',
    //     );
    //   },
    // );
    // js.context.callMethod('alert', ['Hello from Dart!']);

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          js.context.callMethod('changeColor', ['#3aa757']);
        },
      ),
    );
  }
}
