import 'package:flutter/material.dart';
import 'package:shop_ui/const.dart';
import 'package:shop_ui/models/product.dart';
import 'package:shop_ui/screens/details/components/add_to_cart.dart';
import 'package:shop_ui/screens/details/components/color_and_size.dart';
import 'package:shop_ui/screens/details/components/coutner_with_fav_btn.dart';
import 'package:shop_ui/screens/details/components/description.dart';
import 'package:shop_ui/screens/details/components/product_title_with_image.dart';

class Body extends StatelessWidget {
  final Product product;

  const Body({
    super.key,
    required this.product,
  });

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return SingleChildScrollView(
      child: Column(
        children: [
          SizedBox(
            height: size.height,
            child: Stack(
              children: [
                Container(
                  padding: EdgeInsets.fromLTRB(
                    kDefaultPadding,
                    size.height * 0.12,
                    kDefaultPadding,
                    0,
                  ),
                  margin: EdgeInsets.only(top: size.height * 0.3),
                  decoration: const BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(24),
                      topRight: Radius.circular(24),
                    ),
                  ),
                  child: Column(
                    children: [
                      ColorAndSize(product: product),
                      const SizedBox(height: kDefaultPadding / 2),
                      Description(product: product),
                      const SizedBox(height: kDefaultPadding / 2),
                      const CounterWithFavBtn(),
                      const SizedBox(height: kDefaultPadding / 2),
                      AddToCart(product: product),
                    ],
                  ),
                ),
                ProductTitleWithImage(product: product),
              ],
            ),
          )
        ],
      ),
    );
  }
}
