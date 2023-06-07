console.table("number_facts/app.js");
console.table("hello world");

//1. Make a call to the API to get a fact about num
const n = 6;
const BASE_URL = "http://numbersapi.com";

$.getJSON(`${BASE_URL}/${n}?json`).then((data) => {
  console.table(data);
});

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numFacts = [];
$.getJSON(`${BASE_URL}/${nums}?json`).then((data) => {
  console.table(data);
  for (let key in data) {
    numFacts.push(data[key]);
  }
  console.table(numFacts);
  numFacts.forEach((fact) => {
    $(".facts").append(`<p>${fact}</p>`);
  });
});

// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page.Example URL: http://numbersapi.com/17/trivia?json

const favNums = [6, 6, 6, 6]
const favNumFacts = [];
Promise.all(
    favNums.map((num) => {
        $.getJSON(`${BASE_URL}/${num}?json`)
        .then((data) => {
            $(".fave-num-facts").append(`<p>${data.text}</p>`);
    })
        .catch((err) => {    
            console.log(err);
        })
    })
)
