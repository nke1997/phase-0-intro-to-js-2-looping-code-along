// Code your solutions in this file
function writeCards(giftGivers) {
    let thankYouNotes = [];
    for (let i = 0; i < giftGivers.length; i++) {
        thankYouNotes.push(`Thank you, ${giftGivers[i]}, for the wonderful surprise gift!`);
    };
    return thankYouNotes;
};

function countDown(numberInput) {
    for (let i = numberInput; i >= 0; i--) {
        console.log(i);
    };
};