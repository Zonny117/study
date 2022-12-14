import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

// 파이어베이스 사용자인증
final auth = FirebaseAuth.instance;
// 파이어베이스 데이터베이스
final firestore = FirebaseFirestore.instance;

class Shop extends StatefulWidget {
  const Shop({super.key});

  @override
  State<Shop> createState() => _ShopState();
}

class _ShopState extends State<Shop> {
  getData() async {
    // 데이터베이스 사용법
    /* //예외처리
     try {
       var result = await firestore.collection('product').get();

       for (var doc in result.docs) {
         print(doc['name']);
       }
       //에러시
     } catch (e) {
       print('에러남');
     } 
    */

    await firestore.collection('product').get();

    //회원가입
    /* 
    try {
      var result = await auth.createUserWithEmailAndPassword(
        email: "kim@test.com",
        password: '123456',
      );
      print(result.user);
    } catch (e) {
      print(e);
    } 
    */
  }

  @override
  void initState() {
    super.initState();
    getData();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("샵페이지임"),
    );
  }
}
