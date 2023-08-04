import 'package:flutter/material.dart';
import 'package:get_x/state/get_x.dart';

class SimpleState extends StatelessWidget {
  const SimpleState({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('단순 상태관리'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            WithGetX(),
          ],
        ),
      ),
    );
  }
}
