var b1_value=0;
var b2_value=0;
var b3_value=0;
var b1_flag=0;//1のときは、値が固定
var b2_flag=0;
var b3_flag=0;
var i=0;

function b0_onclick(){
    document.getElementById("text0").innerText="";
    document.getElementById("t1").innerText=0;
    document.getElementById("t2").innerText=0;
    document.getElementById("t3").innerText=0;
    b1_value=0;
    b2_value=0;
    b3_value=0;
    b1_flag=0;//1のときは、値が固定
    b2_flag=0;
    b3_flag=0;
    i=1;
    loop();    
}

function loop(){
            if(b1_flag==0)
                b1_value=i;
            if(b2_flag==0)
                b2_value=i;
            if(b3_flag==0)
                b3_value=i;  
            document.getElementById("t1").innerText=b1_value;
            document.getElementById("t2").innerText=b2_value;
            document.getElementById("t3").innerText=b3_value;
            if(b1_flag==1&&b2_flag==1&&b3_flag==1){
                if(b1_value==b2_value&&b1_value==b3_value)
                    document.getElementById("text0").innerText="おめでとう！";
                else
                    document.getElementById("text0").innerText="残念";
                return;  
            }
            i++
            if(i>3)
                i=1;
            setTimeout("loop()",100); 
}

function b1_onclick(){
   b1_flag=1;
}

function b2_onclick(){
    b2_flag=1;
}

function b3_onclick(){
    b3_flag=1;
}
