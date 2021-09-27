"use strict";

const API_BASE_URL = 'http://deckofcardsapi.com/api/deck/';

let deck;
let deckId;

async function shuffleDeck() {
    const resp = await axios.get(`${API_BASE_URL}new/shuffle/?deck_count=1`);
    return resp.data;
}

async function drawCard() {
    const resp = await axios.get(`${API_BASE_URL}${deckId}/draw/?count=1`)
    return resp.data.cards[0];
}

async function drawAndShowCards() {
    const card1 = await drawCard()
    const card2 = await drawCard()

    console.log("Card1:",  card1.value,  card1.suit);
    console.log("Card2:",  card2.value,  card2.suit);
}
// Why does await not work inside of console.log?

async function start() {
    deck = await shuffleDeck();
    deckId = deck.deck_id;
}

