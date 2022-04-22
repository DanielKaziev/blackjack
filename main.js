function Main(){
    var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "tuz"];
    var sharpie = [];
    var player = [];
    for (let i = 0; i < 2; i++) { 
        var num = Math.floor(Math.random() * cards.length);
        sharpie.push(cards[num]);
        cards.splice(num, 1);
    }
    for (let i = 0; i < sharpie.length; i++) {
        if (sharpie[i] === "tuz") {
            sharpie.splice(i, 1, 11);
        }
    }
    for (let i = 0; i < 2; i++) { 
        var num = Math.floor(Math.random() * cards.length);
        player.push(cards[num]);
        cards.splice(num, 1);
    }
    for (let i = 0; i < player.length; i++) {
        if (player[i] === "tuz") {
            player.splice(i, 1, 11);
        }
    }

    console.log(sharpie);
    console.log(player);
    console.log(cards);
    // for (let i = 0; i < 2; i++) { 
    //     var num = Math.floor(Math.random() * cards.length);
    //     player.push(cards[num]);
    //     delete cards[num];
    // }
    // if (num == cards.length && sharpie.reduce((a,b)=>a+b) <= 21){
    //     sharpie.push(11);
    // } else if (num == cards.length && sharpie.reduce((a,b)=>a+b) >= 21){
    //     sharpie.push(1);
    // } else {
    //     sharpie.push(cards[num]);
    // }
    document.getElementById("sharpie").innerHTML = sharpie.reduce((a,b)=>a+b);
    document.getElementById("player").innerHTML = player.reduce((a,b)=>a+b);
}