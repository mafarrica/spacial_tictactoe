var box_p=["imgs/planeta_amarelo.png", "imgs/planeta_azul.png", "imgs/planeta_bonito.png", "imgs/planeta_colorido.png", "imgs/planeta_laranja.png", "imgs/planeta_preto.png", "imgs/planeta_rosa.png", "imgs/planeta_roxo.png", "imgs/planeta_verde.png", "imgs/planeta_vermelho.png"]
var x=1;
var a=1;
        function attribute_p(pos){
            if(x==1){
                document.getElementById("player1").src=box_p[pos];
                document.getElementById("player1").style.opacity="1";
                player1 = String(document.getElementById('player1').src);
                localStorage.setItem("p1", player1);
                x=2;
                document.getElementById(String(pos)).style.pointerEvents='none';
                document.getElementById(String(pos)).style.opacity="50%";
            }
            else{
                document.getElementById("player2").src=box_p[pos];
                document.getElementById("player2").style.opacity="1";
                player2 = String(document.getElementById('player2').src);
                localStorage.setItem("p2", player2);
                x=1;
                document.getElementById(String(pos)).style.pointerEvents='none';
                document.getElementById(String(pos)).style.opacity="50%";
                document.getElementById("button_play").style.visibility="visible";
            }
        }


        function storeName(){
                p1Name = String(document.getElementById("p1Name").value);
                localStorage.setItem("n1", p1Name)
                p2Name = String(document.getElementById("p2Name").value);
                localStorage.setItem("n2", p2Name)
        }



        function openFact4(){
            if(a==1){
                document.getElementById("facts4").style.visibility="visible";
                document.getElementById("everything-box").style.visibility="hidden";
                return a=2;
            }
            else{
                document.getElementById("facts4").style.visibility="hidden";
                document.getElementById("everything-box").style.visibility="visible";
                return a=1;
            }
        }




