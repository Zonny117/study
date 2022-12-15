import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class ChatScreen extends StatelessWidget {
  const ChatScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('하이팩토리'),
      ),
      body: Container(
        child: Text('메인페이지'),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.usb_rounded), label: 'usb'),
          BottomNavigationBarItem(icon: Icon(Icons.usb_rounded), label: 'usb')
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          FirebaseAuth.instance.signOut();
        },
        child: Text(
          '로그아웃',
          style: TextStyle(fontSize: 12),
        ),
      ),
    );
  }
}
