
        var x=1;
        var a=1;
        var y=1;
        var z=1;
        var m=1;
        function openCredits(){
            if(x==1){
                document.getElementById("main_box").style.opacity="50%"
                document.getElementById("credits_box").style.visibility="visible";
                return x=2;
            }
            else{
                document.getElementById("main_box").style.opacity="1"
                document.getElementById("credits_box").style.visibility="hidden";
                return x=1;
            }
        }
        function openObjective(){
            if(x==1){
                document.getElementById("main_box").style.opacity="50%";
                document.getElementById("objective-box").style.visibility="visible";
                return x=2;
            }
            else{
                document.getElementById("main_box").style.opacity="1";
                document.getElementById("objective-box").style.visibility="hidden";
                return x=1;
            }
        }

        function openResources(){
            if(m==1){
                document.getElementById("sources").style.visibility="visible";
                document.getElementById("credits_box").style.visibility="hidden";
                document.getElementById("main_box").style.visibility="hidden";
                return m=2;
            }
            else{
                document.getElementById("sources").style.visibility="hidden";
                document.getElementById("credits_box").style.visibility="visible";
                document.getElementById("main_box").style.visibility="visible";
                return m=1;
            }
        }

        function openFact1(){
            if (a==1){
                document.getElementById("facts1").style.visibility="visible";
                document.getElementById("credits_box").style.visibility="hidden";
                document.getElementById("main_box").style.visibility="hidden";
                return a=2;
            }
            else{
                document.getElementById("facts1").style.visibility="hidden";
                document.getElementById("credits_box").style.visibility="visible";
                document.getElementById("main_box").style.visibility="visible";
                return a=1;
            }
        }
    
        function openFact2(){
            if (y==1){
                document.getElementById("facts2").style.visibility="visible";
                document.getElementById("objective-box").style.visibility="hidden";
                document.getElementById("main_box").style.visibility="hidden";
                return y=2;
            }
            else{
                document.getElementById("facts2").style.visibility="hidden";
                document.getElementById("objective-box").style.visibility="visible";
                document.getElementById("main_box").style.visibility="visible";
                return y=1;
            }
        }

        function openFact3(){
            if (z==1){
                document.getElementById("facts3").style.visibility="visible";
                document.getElementById("main_box").style.visibility="hidden";
                return z=2;
            }
            else{
                document.getElementById("facts3").style.visibility="hidden";
                document.getElementById("main_box").style.visibility="visible";
                return z=1;
            }
        }

        