
let win=[0,0,0];
let fun = () => {
let sum=0,ar=[0,1,2,3,4,5,6,7,8],br=[],cr=[],summ=[0,0,0,0,0,0,0,0];
let summm=[0,0,0,0,0,0,0,0],z=true,t=0;

let first= document.querySelectorAll(".row1")

    for(let i=0;i<first.length;i++){
first[i].addEventListener("click",()=>{
    if(z){
    let check=ar.find((a)=>{
        return a==i
    })
    if(check==i){
            if(sum%2==0){
                first[i].textContent="X";
                first[i].style.color="#d1f59b";
                 sum++;
                   br.push(i);
           }
           else{
                 first[i].textContent="0";
                 first[i].style.color="#973739"
                 sum++;
                 cr.push(i);
         } 
        let index= ar.findIndex((element)=>{
            return element==i
          })
          ar.splice(index,1);

if(sum%2!=0){
    let y=br.length-1;
    
    t++;
    if(br[y]==0||br[y]==1||br[y]==2){
        summ[0]++;
    }
    if(br[y]==3||br[y]==4||br[y]==5){
        summ[1]++;
    }
    if(br[y]==6||br[y]==7||br[y]==8){
        summ[2]++;
    }
    if(br[y]==0||br[y]==3||br[y]==6){
        summ[3]++;
    }
    if(br[y]==1||br[y]==4||br[y]==7){
        summ[4]++;
    }
    if(br[y]==2||br[y]==5||br[y]==8){
        summ[5]++;
    }
    if(br[y]==0||br[y]==4||br[y]==8){
        summ[6]++;
    }
    if(br[y]==2||br[y]==4||br[y]==6){
        summ[7]++;
    }

let ind=summ.find((l)=>{
    return l==3
})
if(ind==3){
alert(document.querySelector(".player-1").value+" won the game");
z=false;
win[0]++;
}
else if(t==5){
    alert("match has been drawn");
    win[2]++;
}
} 
else{
let y=cr.length-1;
    if(cr[y]==0||cr[y]==1||cr[y]==2){
        summm[0]++;
    }
    if(cr[y]==3||cr[y]==4||cr[y]==5){
        summm[1]++;
    }
    if(cr[y]==6||cr[y]==7||cr[y]==8){
        summm[2]++;
    }
    if(cr[y]==0||cr[y]==3||cr[y]==6){
        summm[3]++;
    }
    if(cr[y]==1||cr[y]==4||cr[y]==7){
        summm[4]++;
    }
    if(cr[y]==2||cr[y]==5||cr[y]==8){
        summm[5]++;
    }
    if(cr[y]==0||cr[y]==4||cr[y]==8){
        summm[6]++;
    }
    if(cr[y]==2||cr[y]==4||cr[y]==6){
        summm[7]++;
    }
let ind=summm.find((l)=>{
    return l==3
})

if(ind==3){
    alert(document.querySelector(".player-2").value+" won the game");
    z=false;
    win[1]++;
}

}  
    }

    else(
             alert("anoter step")
    ) 
}
else{
  alert("game is finished")
}
})
}

}
fun();
let exit=document.querySelector(".exit");
exit.addEventListener("click",()=>{
    location.reload();
})
function show(show,hidden){
    document.getElementById(show).style.display="block";
    document.getElementById(hidden).style.display="none";
    return false;
}
function sub(){
    let p1 = document.getElementsByClassName("player-1")[0].value,
        p2 = document.querySelector(".player-2").value;

    if(p1 && p2){
        return show('game','start');
    }
    else{
        alert("please fill all the entries");
    }
}
