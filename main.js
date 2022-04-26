function start(){
    var cards = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11];
    var dealer = [];
    var player = [];
    // раздача карт для начала игры
    for (let i = 0; i < 2; i++) { 
        let num = Math.floor(Math.random() * cards.length);
        dealer.push(cards[num]);
        cards.splice(num, 1);
    }
    for (let i = 0; i < 2; i++) { 
        let num = Math.floor(Math.random() * cards.length);
        player.push(cards[num]);
        cards.splice(num, 1);
    }
    // рендер кнопок
    document.getElementById("take").style.display = "inline-block";
    document.getElementById("stand").style.display = "inline-block";
    document.getElementById("start").style.display = "none";
    
    // добор карт
    take.onclick = function take(){
        let num = Math.floor(Math.random() * cards.length);
        player.push(cards[num]);
        cards.splice(num, 1);
        // Если у  дилера менише 17 очков, то добирает.
        if (dealer.reduce((a,b)=>a+b) < 17){
            let num = Math.floor(Math.random() * cards.length);
            dealer.push(cards[num]);
            cards.splice(num, 1);
        }
        document.getElementById("dealer").innerHTML = dealer.reduce((a,b)=>a+b);
        document.getElementById("player").innerHTML = player.reduce((a,b)=>a+b);
    }
    // оставит карты
    stand.onclick = function take(){
        // Если у  дилера менише 17 очков, то добирает.
        while(dealer.reduce((a,b)=>a+b) < 17){
            let num = Math.floor(Math.random() * cards.length);
            dealer.push(cards[num]);
            cards.splice(num, 1);
            console.log(dealer);
        }
        document.getElementById("dealer").innerHTML = dealer.reduce((a,b)=>a+b);
        document.getElementById("player").innerHTML = player.reduce((a,b)=>a+b);
    }
    
    function checkWhoWon(){
        let dealer_op = dealer.reduce((a,b)=>a+b);
        let player_op = player.reduce((a,b)=>a+b);
    }
    console.log(player);
    console.log(dealer);
    console.log(cards);

    document.getElementById("dealer").innerHTML = dealer.reduce((a,b)=>a+b);
    document.getElementById("player").innerHTML = player.reduce((a,b)=>a+b);
}