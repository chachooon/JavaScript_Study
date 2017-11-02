var cardDeck = [] ;


function card() {
    var card = document.createElement('img');
    card.name = 0;
    card.src ='resource/0.jpg';
    card.display = 'inline-block';
    card.width = 100;
    card.border = 'solid 1px #000';ㅊㅇ
    return card;
}



window.onload = function () {
    var n = 0, num = 1;

    // 카드 배열 만들기
    for (var i=0; i<40; i++) {
        cardDeck[i] = card();
    }

    for (var i=0; i<5; i++){
        var row = document.createElement('div');
        for (var j=0; j<8; j++){
            cardDeck[n].name = num;
            row.appendChild(cardDeck[n]);
            (num==20) ? num = 1 : num++ ;
            n++;
        }
        document.body.appendChild(row);
    }
};

//
// function shuffle(){
//    var random, temp;
//     console.log(cardDeck[0]);
//    for (var i=0; i<20; i++) {
//
//        console.log(cardDeck[0]);
//        random = Math.floor(Math.random()*19);
//        temp = cardDeck[i];
//        cardDeck[i] = cardDeck[random];
//        cardDeck[random] = temp;
//
//    }
//    set(cardDeck);
// }
//
