class Movie {
  final String image;
  final String title;
  final String director;

  Movie({
    required this.director,
    required this.title,
    required this.image,
  });
}

List<Movie> movie = [
  Movie(director: "강윤성", title: "범죄도시3", image: "assets/images/1.jpg"),
  Movie(director: "토드 필립스", title: "조커", image: "assets/images/2.jpg"),
  Movie(director: "토드 필립스", title: "조커2", image: "assets/images/3.jpg"),
];
