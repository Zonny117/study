import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_x/dependency/dependency_controller.dart';

class GetPut extends StatelessWidget {
  const GetPut({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: ElevatedButton(
        onPressed: () {
          Get.find<DependencyController>().increase();
        },
        child: const Text("인스턴스 호출"),
      ),
    );
  }
}

class GetLazyPut extends StatelessWidget {
  const GetLazyPut({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: ElevatedButton(
        onPressed: () {
          debugPrint("${Get.find<DependencyController>().hashCode}");
          Get.find<DependencyController>().increase();
        },
        child: const Text("인스턴스 호출"),
      ),
    );
  }
}

class GetCreate extends StatelessWidget {
  const GetCreate({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: ElevatedButton(
        onPressed: () {
          debugPrint("${Get.find<DependencyController2>().hashCode}");
          Get.find<DependencyController2>().increase();
        },
        child: const Text("인스턴스 호출"),
      ),
    );
  }
}
