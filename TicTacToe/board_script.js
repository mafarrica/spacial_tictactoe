
        var GameBoard=[2,2,2,2,2,2,2,2,2];
        var Player=1;
        var player1 = localStorage.getItem('p1');
        var player2 = localStorage.getItem('p2');
        var p1Name = localStorage.getItem('n1');
        var p2Name = localStorage.getItem('n2');
        var a=1;
        var m=1;
        var q=1;
        
        
        function checkWinner(){
            if (GameBoard[0] == GameBoard[1]&&GameBoard[0] == GameBoard[2]&&GameBoard[0] !=2){
                findWinner();
                console.log("estado1");
                } 
            else if (GameBoard[3] == GameBoard[4]&&GameBoard[3] == GameBoard[5]&&GameBoard[3] !=2){
                findWinner();
                console.log("estado2");
                } 
            else if (GameBoard[6] == GameBoard[7]&&GameBoard[6] == GameBoard[8]&&GameBoard[6] !=2){
                findWinner();
                console.log("estado3");
                }
            else if (GameBoard[0] == GameBoard[3]&&GameBoard[0] == GameBoard[6]&&GameBoard[0] !=2){
                findWinner();
                console.log("estado4");
                }
            else if (GameBoard[1] == GameBoard[4]&&GameBoard[1] == GameBoard[7]&&GameBoard[1] !=2){
                findWinner();
                console.log("estado5");
                }
            else if (GameBoard[2] == GameBoard[5]&&GameBoard[2] == GameBoard[8]&&GameBoard[2] !=2){
                findWinner();
                console.log("estado6");
                }
            else if (GameBoard[0] == GameBoard[4]&&GameBoard[0] == GameBoard[8]&&GameBoard[0] !=2){
                findWinner();
                console.log("estado7");
                }
            else if (GameBoard[2] == GameBoard[4]&&GameBoard[2] == GameBoard[6]&&GameBoard[2] !=2){
                findWinner();
                console.log("estado8");
                }
            else { 
                if (GameBoard.findIndex((element) => element == 2) == -1) {
                    setTimeout(function () {
                    document.getElementById("tie").style.visibility="visible";
                    document.getElementById("tie").style.backgroundImage="none";
                    document.getElementById("game_board").style.opacity="50%";
                }, 0600);
                    }
                else {
                    return
                    }

                }
            
        }


        function findWinner(){
            setTimeout(function () {
                if(Player==0){
                    document.getElementById("win_player1").style.visibility="visible";
                    document.getElementById("game_board").style.opacity="50%";
                    return Player=1;
                }
                else{
                    document.getElementById("win_player2").style.visibility="visible";
                    document.getElementById("game_board").style.opacity="50%";
                    return Player=0;
                }
            }, 0600);
        }


        function Play(pos){
            if(Player==1){
                document.images[pos].src= player1;
                Player=0;
                GameBoard[pos]=Player;
                checkWinner(pos);
            }
            else{
                document.images[pos].src= player2;
                Player=1;
                GameBoard[pos]=Player;
                checkWinner(pos);
            }
        
        }
        
       
        function Check(pos){
            if(GameBoard[pos]==2){
               Play(pos);
               }
            
            else{
                alert("Ocupado");
            }
        }

        function meteoro(){
            document.getElementById("meteoro-gif").style.visibility="visible";
            setTimeout(function () {
            window.location.href="game_menu.html";
            }, 1100);
        }


        function openFact5(){
            if (a==1){
                document.getElementById("facts5").style.visibility="visible";
                document.getElementById("tie").style.visibility="hidden";
                document.getElementById("main-box").style.visibility="hidden";
                return a=2;
            }
            else{
                document.getElementById("facts5").style.visibility="hidden";
                document.getElementById("tie").style.visibility="visible";
                document.getElementById("main-box").style.visibility="visible";
                return a=1;
            }
        }

        function openFact6(){
            if (m==1){
                document.getElementById("facts6").style.visibility="visible";
                document.getElementById("win_player1").style.visibility="hidden";
                document.getElementById("main-box").style.visibility="hidden";
                return m=2;
            }
            else{
                document.getElementById("facts6").style.visibility="hidden";
                document.getElementById("win_player1").style.visibility="visible";
                document.getElementById("main-box").style.visibility="visible";
                return m=1;
            }
        }

        function openFact7(){
            if (q==1){
                document.getElementById("facts7").style.visibility="visible";
                document.getElementById("main-box").style.visibility="hidden";
                return q=2;
            }
            else{
                document.getElementById("facts7").style.visibility="hidden";
                document.getElementById("main-box").style.visibility="visible";
                return q=1;
            }
        }

