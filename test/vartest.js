var test = 1 + 1;

function vartest() {

    var test1 = 0;

    document.querySelector(".btn").addEventListener('click', function () {
        return test1 = 2
    });

    return test = test + test1;

}


vartest();

// let test1 = 0;

// document.querySelector(".btn").addEventListener('click', function () {
//     return test1 = 2

// });

document.querySelector(".btn").addEventListener('click', function () {
    console.log(test);


});

// vartest();

// console.log(vartest());

// let btn = document.querySelector(".btn");

// btn.addEventListener('click', function () {
//     alert("클릭")
// });

// console.log(test1)