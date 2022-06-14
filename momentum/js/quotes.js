const quotes = [{
    quote: "힘든가? 오늘 쉬면 내일은 뛰어야 한다.",
    author: "카를레스 푸욜"
},
{
    quote: "Don't eat mashmallow.",
    author: "호아킴 데 포사다"
},
{
    quote: "자신을 용서하고, 타인을 용서하는 것을 배워라",
    author: "모리"
},
{
    quote: "It's not your fault.",
    author: "굿 윌 헌팅"
},
{
    quote: "힘든가? 오늘 쉬면 내일은 뛰어야 한다.",
    author: "카를레스 푸욜"
},
{
    quote: "Don't eat mashmallow.",
    author: "호아킴 데 포사다"
},
{
    quote: "자신을 용서하고, 타인을 요서하는 것을 배워라",
    author: "모리"
},
{
    quote: "It's not your fault.",
    author: "굿 윌 헌팅"
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;