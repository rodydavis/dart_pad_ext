import 'package:flutter/material.dart';
import 'package:color/color.dart' as color;

class UIColors {
  static const lightRoyalBlue = Color(0xff304ffe);
  static const aquaBlue = Color(0xff26c6da);
  static const white = Color(0xffffffff);
  static const greyishBrown = Color(0xff444444);
  static const warmGrey = Color(0xff727272);
  static const warmGreyTwo = Color(0xff878787);
  static const whiteTwo = Color(0xfffafafa);
  static const whiteThree = Color(0xffd8d8d8);
  static const brownishGrey = Color(0xff5f5f5f);
  static const blueViolet0 = Color(0x006202ee);
  static const blueViolet = Color(0xff6200ee);
  static const black = Color(0xff2b2b2b);
  static const cerulean = Color(0xff0275d8);
  static const darkAquamarine = Color(0xff008464);
  static const brownishGreyTwo = Color(0xff656363);
  static const black58 = Color(0x93000000);
  static const black38 = Color(0x61000000);
  static const tealish = Color(0xff21aac3);
  static const ultramarineBlue = Color(0xff3b00dd);
  static const greyishBrown87 = Color(0xde4e4c4c);
  static const trueBlue = Color(0xff0700cf);
  static const black87 = Color(0xde000000);

  static String colorToString(int val) {
    final c = Color(val);
    if (val == Colors.transparent.value) {
      return null;
    }
    return color.Color.rgb(c.red, c.green, c.blue).toHexColor().toCssString();
  }

  static Color colorFromString(String val) {
    if (val == null || val.isEmpty) return null;
    // if (val == colorToString(Colors.transparent.value)) return null;
    final c = color.HexColor(val);
    return Color.fromRGBO(c.r, c.g, c.b, 1.0);
  }
}
