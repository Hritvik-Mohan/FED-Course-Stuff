let suits = ['♥', '♠', '♦', '♣'];
let cards = ['k', 'q', 'j', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];
let deck = [];
let distributeAmong = {
    A: [],
    B: [],
    C: [],
    D: [],
};

const shuffler = (suits, cards, deck, distributeAmong) => {

    // CREATE THE DECK
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            deck.push((suits[i] + cards[j]));
        }
    } // 13 cards per suit

    // SHUFFLE THE DECK

    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    // NUMBER OF CARDS PER PERSON

    let cardsPerPerson = Math.floor(deck.length/Object.keys(distributeAmong).length); 
    // Total number of cards divided by total number of people, 
    // is equal to the number of cards(~) per person.

    
    // DISTRIBUTE THE CARDS FROM THE DECK

    let start = 0;
    for (const key in distributeAmong) {
        for (let i = start; i < deck.length; i++) {
            distributeAmong[key].push(deck[i]);
            if (distributeAmong[key].length == cardsPerPerson) {
                start += cardsPerPerson - 1; 
                break;
            }
        }
    }
    return distributeAmong;
}

// Print the object as a table in the console
console.table(shuffler(suits, cards, deck, distributeAmong));

// Output
// ┌─────────┬──────┬──────┬───────┬──────┬──────┬──────┬──────┬───────┬──────┬──────┬──────┬───────┬──────┐
// │ (index) │  0   │  1   │   2   │  3   │  4   │  5   │  6   │   7   │  8   │  9   │  10  │  11   │  12  │
// ├─────────┼──────┼──────┼───────┼──────┼──────┼──────┼──────┼───────┼──────┼──────┼──────┼───────┼──────┤
// │    A    │ '♠4' │ '♠7' │ '♠2'  │ '♦q' │ '♦8' │ '♦5' │ '♠j' │ '♣3'  │ '♣A' │ '♥q' │ '♠8' │ '♣2'  │ '♥3' │
// │    B    │ '♥3' │ '♦9' │ '♣10' │ '♦4' │ '♠6' │ '♦A' │ '♥4' │ '♥10' │ '♠q' │ '♥k' │ '♠A' │ '♦10' │ '♥5' │
// │    C    │ '♥5' │ '♥j' │ '♥8'  │ '♠3' │ '♣j' │ '♣k' │ '♥6' │ '♣q'  │ '♠k' │ '♠5' │ '♥2' │ '♠9'  │ '♥9' │
// │    D    │ '♥9' │ '♣7' │ '♣8'  │ '♣5' │ '♥A' │ '♥7' │ '♦j' │ '♦k'  │ '♦3' │ '♣9' │ '♣6' │ '♦6'  │ '♦7' │
// └─────────┴──────┴──────┴───────┴──────┴──────┴──────┴──────┴───────┴──────┴──────┴──────┴───────┴──────┘