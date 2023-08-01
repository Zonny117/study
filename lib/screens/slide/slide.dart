import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:shop_ui/const.dart';
import 'package:shop_ui/models/movie.dart';

class Slide extends StatefulWidget {
  const Slide({super.key});

  @override
  State<Slide> createState() => _SlideState();
}

class _SlideState extends State<Slide> {
  final controller = PageController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
      ),
      body: Stack(
        children: [
          PageView(
            reverse: true,
            physics: const NeverScrollableScrollPhysics(),
            controller: controller,
            children: movie.map((e) {
              return Builder(
                builder: (context) => Image.asset(
                  e.image,
                  fit: BoxFit.cover,
                  width: double.maxFinite,
                  height: double.maxFinite,
                ),
              );
            }).toList(),
          ),
          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Colors.black.withOpacity(0.1),
                  Colors.black,
                ],
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: CarouselSlider(
              items: movie.map((t) {
                return Builder(
                  builder: (context) => Container(
                    padding: const EdgeInsets.all(kDefaultPadding),
                    decoration: const BoxDecoration(
                      color: Colors.black,
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(20),
                        topRight: Radius.circular(20),
                      ),
                    ),
                    width: 300,
                    child: Column(
                      children: [
                        Expanded(
                          child: Image.asset(
                            t.image,
                            fit: BoxFit.cover,
                          ),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Text(
                          t.title,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Text(
                          t.director,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 18,
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              }).toList(),
              options: CarouselOptions(
                enableInfiniteScroll: true,
                viewportFraction: 0.85,
                height: MediaQuery.of(context).size.height * 0.6,
                onPageChanged: (index, reason) {
                  controller.animateToPage(
                    index,
                    duration: const Duration(milliseconds: 600),
                    curve: Curves.easeInOutCubic,
                  );
                },
              ),
            ),
          ),
        ],
      ),
    );
  }
}
