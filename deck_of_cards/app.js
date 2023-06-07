console.log("deck_of_cards/app.js")
console.log('hello world')

// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit(e.g.“5 of spades”, “queen of diamonds”).
const BASE_URL = "https://deckofcardsapi.com/api/deck";
let deckId = "new";
$.getJSON(`${BASE_URL}/${deckId}/draw/?count=1`).then((data) => {
    console.log(data.cards[0].value + " of " + data.cards[0].suit);
});


// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.
$.getJSON(`${BASE_URL}/${deckId}/draw/?count=1`).then((data) => {
    console.log(data.cards[0].value + " of " + data.cards[0].suit);
    deckId = data.deck_id; //NOTE this is how you get the deck_id from the first request, once you have it you can use it in the second request
    $.getJSON(`${BASE_URL}/${deckId}/draw/?count=1`).then((data) => {
        console.log(data.cards[0].value + " of " + data.cards[0].suit);
    });
});

// 3. On page load, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
let deckId2 = "new";
$.getJSON(`${BASE_URL}/${deckId2}/draw/?count=1`).then((data) => {
    console.log(data.cards[0].value + " of " + data.cards[0].suit);
    deckId2 = data.deck_id;
    $(".cards").prepend(`<button class="btn dark">Draw a Card</button>`);
    $(".btn").on("click", () => {
        $.getJSON(`${BASE_URL}/${deckId2}/draw/?count=1`).then((data) => {
            console.log(data.cards[0].value + " of " + data.cards[0].suit);
            if (data.remaining === 0) {
                $(".btn").remove();
            }
            else {
                $(".deck-of-cards").append(`<img src="${data.cards[0].image}">`);
            }
        });
    });
});