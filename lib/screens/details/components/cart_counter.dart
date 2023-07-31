import 'package:flutter/material.dart';
import 'package:shop_ui/const.dart';

class CartCounter extends StatefulWidget {
  const CartCounter({super.key});

  @override
  State<CartCounter> createState() => _CartCounterState();
}

class _CartCounterState extends State<CartCounter> {
  int numOfItems = 1;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        BuildOutlinedButton(
          icon: Icons.remove,
          press: () {
            setState(() {
              if (numOfItems <= 0) return;
              numOfItems--;
            });
          },
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: kDefaultPadding / 2),
          child: Text(
            numOfItems.toString().padLeft(2, "0"),
            style: Theme.of(context).textTheme.titleLarge,
          ),
        ),
        BuildOutlinedButton(
          icon: Icons.add,
          press: () {
            setState(() {
              numOfItems++;
            });
          },
        )
      ],
    );
  }
}

class BuildOutlinedButton extends StatelessWidget {
  final IconData icon;
  final void Function()? press;

  const BuildOutlinedButton({
    super.key,
    required this.icon,
    this.press,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 40,
      height: 32,
      child: OutlinedButton(
        style: const ButtonStyle(
          padding: MaterialStatePropertyAll(EdgeInsets.zero),
        ),
        onPressed: press,
        child: Icon(icon),
      ),
    );
  }
}
