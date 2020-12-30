let arr=[
    [0,0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0],
    [0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0],
    [1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0],
]
let score=0;
document.getElementById('score-id').innerHTML=score;

function markedCell(element,row,col){
    if(arr[row][col]==0){
        score++;
        document.getElementById('score-id').innerHTML=score;
        element.style.backgroundColor="green";
        if(score>=71){
            let banner=document.getElementById("banner");
            banner.innerHTML="Your Score is: "+score+"<br><br>"+"<strong>Congratulation You Won game</strong>"
            banner.style.display="block";
            document.getElementsByTagName('button')[0].style.display="block";

        }
        if(row>0 && col>0 && row<8 && col <8){
            let sum=0;
            sum+=arr[row-1][col]+arr[row+1][col]+arr[row-1][col-1]+arr[row+1][col+1]+arr[row][col-1]+arr[row][col+1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";
        }else if(row===0 && col==0){
            let sum=0;
            sum+=arr[row][col+1]+arr[row+1][col]+arr[row+1][col+1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";
        }else if(row==0 && col<8){
            let sum=0;
            sum+=arr[row][col+1]+arr[row+1][col]+arr[row+1][col+1]+arr[row][col-1]+arr[row+1][col-1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";

        }else if(row===0 && col===8){
            let sum=0;
            sum+=arr[row][col-1]+arr[row+1][col]+arr[row+1][col-1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";

        }else if(row>0 && row<8 && col==8){
            let sum=0;
            sum+=arr[row][col-1]+arr[row+1][col-1]+arr[row-1][col]+arr[row-1][col-1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";

        }else if(col===8 && row==8){
            let sum=0;
            sum+=arr[row][col-1]+arr[row-1][col]+arr[row-1][col-1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";
        }else if(row==8 && col>0 && col<8){
            let sum=0;
            sum+=arr[row][col-1]+arr[row][col+1]+arr[row-1][col]+arr[row-1][col-1]+arr[row-1][col+1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";

        }else if(col===0 && row>0 && row<8){

            let sum=0;
            sum+=arr[row-1][col]+arr[row+1][col]+arr[row][col+1]+arr[row-1][col+1]+arr[row+1][col+1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";
        }else if(row===8 && col===0){
            let sum=0;
            sum+=arr[row][col+1]+arr[row-1][col]+arr[row-1][col+1];
            element.innerHTML=sum;
            element.style.color="white";
            element.style.textAlign="center";

        }

    }else{
        element.style.backgroundColor="red";
        setInterval(() => {
       let banner=document.getElementById("banner");
       banner.innerHTML="Your Score is: "+score+"<br><br>"+"You Loose Game"
        banner.style.display="block";
        document.getElementsByTagName('button')[0].style.display="block";

        }, 1000);


    }



}
function rightclicked(el,row,col){
    event.preventDefault()
    if(arr[row][col]===1){
        el.style.backgroundColor="red";


    }
}
function startAgain(){
    window.location.reload();
}
