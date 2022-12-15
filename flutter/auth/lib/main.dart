import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: Login(),
  ));
}

class Login extends StatelessWidget {
  const Login({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("하이팩토리"),
      ),
      body: Container(),
      bottomNavigationBar: BottomNavigationBar(
        showSelectedLabels: false,
        showUnselectedLabels: false,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.accessibility_outlined), label: '안녕'),
          BottomNavigationBarItem(icon: Icon(Icons.abc_rounded), label: '안녕')
        ],
      )
    );
  }
}
