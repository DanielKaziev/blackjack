function start(){
    var cards = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11];
    var dealer = [];
    var player = [];

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
    document.getElementById("take").style.display = "inline-block";
    document.getElementById("stand").style.display = "inline-block";
    document.getElementById("start").style.display = "none";
    

    take.onclick = function take(){
        let num = Math.floor(Math.random() * cards.length);
        player.push(cards[num]);
        cards.splice(num, 1);

        if (dealer.reduce((a,b)=>a+b) < 17){
            let num = Math.floor(Math.random() * cards.length);
            dealer.push(cards[num]);
            cards.splice(num, 1);
        }
        document.getElementById("dealer").innerHTML = dealer.reduce((a,b)=>a+b);
        document.getElementById("player").innerHTML = player.reduce((a,b)=>a+b);
        if (dealer.reduce((a,b)=>a+b) >= 21 || player.reduce((a,b)=>a+b) >= 21){
            checkWhoWon()
        }
    }

    stand.onclick = function take(){
        while(dealer.reduce((a,b)=>a+b) < 17){
            let num = Math.floor(Math.random() * cards.length);
            dealer.push(cards[num]);
            cards.splice(num, 1);
            console.log(dealer);
        }
        document.getElementById("dealer").innerHTML = dealer.reduce((a,b)=>a+b);
        document.getElementById("player").innerHTML = player.reduce((a,b)=>a+b);
        checkWhoWon();
    }
    
    function checkWhoWon(){
        let dealer_op = dealer.reduce((a,b)=>a+b);
        let player_op = player.reduce((a,b)=>a+b);

        document.getElementById("text").style.display = "inline-block";
        document.getElementById("reset").style.display = "block";
        document.getElementById("take").style.display = "none";
        document.getElementById("stand").style.display = "none";


        if (player_op == dealer_op){
            document.getElementById("text").innerHTML = "Ничья";
            drawSound();
        } else if (dealer_op == 21) {
            document.getElementById("text").innerHTML = "Дилер выиграл";
            loseSound();
        } else if (player_op == 21) {
            document.getElementById("text").innerHTML = "Игрок выиграл";
            winSound();
        } else if (dealer_op > player_op){
            if (dealer_op < 21){
                document.getElementById("text").innerHTML = "Дилер выиграл";
                loseSound();
            } else if(dealer_op > 21){
                document.getElementById("text").innerHTML = "Игрок выиграл";
                winSound();
            }
        } else if (player_op > dealer_op){
            if (player_op < 21){
                document.getElementById("text").innerHTML = "Игрок выиграл";
                winSound();
            } else if(player_op > 21){
                document.getElementById("text").innerHTML = "Дилер выиграл";
                loseSound();
            }
        }
    }
    document.getElementById("dealer").innerHTML = dealer.reduce((a,b)=>a+b);
    document.getElementById("player").innerHTML = player.reduce((a,b)=>a+b);
    
    document.getElementById("reset").onclick = function reset(){
        document.getElementById("text").style.display = "none";
        document.getElementById("reset").style.display = "none";
        document.getElementById("take").style.display = "none";
        document.getElementById("stand").style.display = "none";
        document.getElementById("start").style.display = "block";
        document.getElementById("dealer").innerHTML = "0";
        document.getElementById("player").innerHTML = "0";
    }
    function winSound() {
        var audio = new Audio(); 
        audio.src = "win.mp3";
        audio.autoplay = true;
    }
    function loseSound() {
        var audio = new Audio(); 
        audio.src = "lose.mp3";
        audio.autoplay = true;
    }
    function drawSound() {
        var audio = new Audio(); 
        audio.src = "draw.mp3";
        audio.autoplay = true;
    }
}