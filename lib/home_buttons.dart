import 'package:flutter/material.dart';
import 'package:shop_ui/const.dart';
import 'package:shop_ui/screens/home/home.dart';
import 'package:shop_ui/screens/profile/profile.dart';
import 'package:shop_ui/screens/slide/slide.dart';

class HomeButtons extends StatelessWidget {
  const HomeButtons({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        child: const Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextButtons(
              text: "쇼핑 UI",
              route: HomeScreen(),
            ),
            SizedBox(
              height: kDefaultPadding / 2,
            ),
            TextButtons(
              text: "프로필 UI",
              route: Profile(),
            ),
            SizedBox(
              height: kDefaultPadding / 2,
            ),
            TextButtons(
              text: "슬라이드 UI",
              route: Slide(),
            ),
          ],
        ),
      ),
    );
  }
}

class TextButtons extends StatelessWidget {
  final String text;
  final Widget route;

  const TextButtons({
    super.key,
    required this.text,
    required this.route,
  });

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: const ButtonStyle(
        backgroundColor: MaterialStatePropertyAll(
          Colors.blue,
        ),
      ),
      onPressed: () => Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => route,
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: kDefaultPadding / 2),
        child: Text(
          text,
          style: const TextStyle(color: Colors.white, fontSize: 18),
        ),
      ),
    );
  }
}
