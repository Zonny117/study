import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:shop_ui/const.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  final ScrollController scrollController = ScrollController();

  // sliver 실시간 높이값
  double currentExtent = 0.0;
  // sliver 최소 높이값
  double minExtent() => 0.0;
  // sliver 최대 높이값
  double maxExtent() => 300.0;
  // sliver 높이값 차이
  double deltaExtent() => maxExtent() - minExtent();

  // 애니메이션 초기값
  double profileSize = 200;

  // 애니메이션 트윈 값
  final Tween<double> profileSizeTween = Tween(begin: 200, end: 50);

  // 이징
  Curve get curve => Curves.easeOutCubic;

  /* 
    [현재 높이값 계산 함수]

    OldRange = (OldMax - OldMin)  
    NewRange = (NewMax - NewMin)  
    NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
   */
  double _remapCurrentExtent(Tween<double> target) {
    final double deltaTarget = target.end! - target.begin!;

    double currentTarget =
        (((currentExtent - minExtent()) * deltaTarget) / deltaExtent()) +
            target.begin!;

    double t = (currentTarget - target.begin!) / deltaTarget;

    if (t > 1.0) return 50;
    double curveT = curve.transform(t);

    return lerpDouble(target.begin!, target.end!, curveT)!;
  }

  // 스크롤 리스너
  scrollLister() {
    setState(() {
      currentExtent = scrollController.offset;

      profileSize = _remapCurrentExtent(profileSizeTween);
    });
  }

  @override
  void initState() {
    scrollController.addListener(scrollLister);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        controller: scrollController,
        slivers: [
          SliverAppBar(
            backgroundColor: Colors.white,
            elevation: 0,
            pinned: true,
            centerTitle: false,
            expandedHeight: 300.0,
            flexibleSpace: FlexibleSpaceBar.createSettings(
              currentExtent: currentExtent,
              child: Stack(
                children: [
                  Positioned(
                    width: profileSize,
                    height: profileSize,
                    bottom: 10,
                    right: 10,
                    child: Container(
                      clipBehavior: Clip.antiAlias,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(100),
                      ),
                      child: Image.asset(
                        "assets/images/logo.png",
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return Padding(
                  padding: const EdgeInsets.all(kDefaultPadding),
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.black,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    height: 200,
                    width: MediaQuery.of(context).size.width,
                  ),
                );
              },
              childCount: 20,
            ),
          ),
        ],
      ),
    );
  }
}
