import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_x/dependency/dependency_controller.dart';
import 'package:get_x/dependency/dependency_pages.dart';

class DependencyManagePage extends StatelessWidget {
  const DependencyManagePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("의존성 주입"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                Get.to(
                  () => const GetPut(),
                  binding: BindingsBuilder(() {
                    // 페이지를 넘어갈 때 biding 속성으로 특정 컨트롤러를 주입할 수 있다.
                    // 이는 GetX가 알아서 컨트롤러 인스턴스를 생성하고 삭제할 수 있다는 뜻이다.
                    // 따라서 메모리 최적화를 자동으로 할 수 있어, 앱의 퍼포먼스를 끌어낼 수 있다.
                    Get.put(DependencyController());
                  }),
                );
              },
              child: const Text("Getput"),
            ),
            ElevatedButton(
              onPressed: () {
                Get.to(() => const GetLazyPut(), binding: BindingsBuilder(() {
                  // lazyPut은 다음 페이지로 넘어가도 인스턴스가 바로 생성되지 않는다.
                  // 다음 페이지에서 해당 인스턴스를 사용하려 할 때 생성이 된다.
                  // 따라서 불필요하게 인스턴스를 바로 생성하지 않는 이점이 있다.
                  Get.lazyPut(() => DependencyController());
                }));
              },
              child: const Text("Get.lazyPut"),
            ),
            ElevatedButton(
              onPressed: () {
                Get.to(() => const GetPut(), binding: BindingsBuilder(() {
                  // 비동기 방식으로 인스턴스를 생성할 수 있다.
                  Get.putAsync(() async {
                    await Future.delayed(const Duration(seconds: 5));
                    return DependencyController();
                  });
                }));
              },
              child: const Text("Get.putAsync"),
            ),
            ElevatedButton(
              onPressed: () {
                Get.to(() => const GetCreate(), binding: BindingsBuilder(() {
                  // 상위 3개의 기능과는 달리 create는 인스턴스를 반복적으로 생성한다.
                  // 상위 3개는 한 개의 인스턴스만 생성하고 그 뒤로는 생성하지 않는다.
                  // 이는 print로 찍히는 hashcode가 같다는 것으로 확인할 수 있다. (싱글톤 방식)

                  // 반면, create는 매번 hashcode가 다름을 알 수 있다.
                  // 또한 페이지를 빠져나가도 인스턴스를 메모리에서 삭제하지 않기 떄문에 직접 삭제해야한다.

                  // 인스턴스는 여러번 생성하면 앱 퍼포먼스에 영향을 주므로, 사용하는 것을 지양하도록 하자.
                  // 보통은 Get.put 혹은 Get.lazyPut을 주로 사용한다.
                  Get.create(() => DependencyController2());
                }));
              },
              child: const Text("Get.create"),
            ),
          ],
        ),
      ),
    );
  }
}
