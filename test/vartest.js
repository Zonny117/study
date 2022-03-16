var test = 1 + 1;

function vartest() {

    var test1 = null;

    document.querySelector(".btn").addEventListener('click', function () {
        test1 = 2
    });

    return test1

}


// vartest();

// console.log(vartest());

// let test1 = 0;

// document.querySelector(".btn").addEventListener('click', function () {
//     return test1 = 3

// });

document.querySelector(".btn").addEventListener('click', function () {

    vartest();
    console.log(vartest());


});

// vartest();

// console.log(vartest());

// let btn = document.querySelector(".btn");

// btn.addEventListener('click', function () {
//     alert("클릭")
// });

// console.log(test1)