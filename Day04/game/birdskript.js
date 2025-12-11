let bird=document.querySelector("bird");
let birdY=200;
let gravity=2;
let score=0;

function createPipe(){
    let gap=140;
    let pipeTopHeight=Math.random()*250+50;
    let pipeBottomHeight=600-pipeTopHeight-gap;

    let pipeTop=$("<div class='pipe'></div>");
    pipeTop.css({left:"100%",top:0,height:pipeTopHeight});

    let pipeBottomHeightottom=$("<div class='pipe'></div>");
    pipeTop.css({left:"100%",top:pipeTopHeight+gap,height:pipeBottomHeight});

    $("body").append(pipeTop,pipeBottom);
    pipeTop.animate({left:"-100px"},3000,function(){
        $(this).remove();
        score++;
        $("#scorebox").text("Score: "+score);
    });

    pipeBottom.animate({left:"-100px"},3000,function(){
        $(this).remove();
    });

    let checkCollision=setInterval(function(){
        let birdpop=bird.getBoundingClientRect();
        let toppop=pipeTop[0].getBoundingClientRect();
        let bottompop=pipeBottom[0].getBoundingClientRect();

        if(birdpop.right>toppop.left && birdpop.left<toppop.right &&
           birdpop.top<toppop.bottom || birdpop.right>bottompop.left && birdpop.left<bottompop.right &&
           birdpop.bottom>bottompop.top){
            alert("Game Over! Your Score: "+score);
            clearInterval(checkCollision);
        }
    },30);
}

setInterval(function(){
    birdY+=gravity;
    bird.css("top",birdY+"px");
    if (birdY > $(window).height()){
        alert("Bird fell! Game Over!");
        location.reload();
    }
},30);

$(document).keydown(function(e){
    if(e.key==" "){
        birdY-=50;
    }
});

setInterval(createPipe,2500);