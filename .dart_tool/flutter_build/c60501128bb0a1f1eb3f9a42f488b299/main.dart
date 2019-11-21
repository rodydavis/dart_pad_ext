import 'dart:ui' as ui;

import "file:///Users/rodydavis/Developer/GitHub/projects/dart_pad_ext/lib/main.dart" as entrypoint;

Future<void> main() async {
  if (true) {
    await ui.webOnlyInitializePlatform();
  }
  entrypoint.main();
}
