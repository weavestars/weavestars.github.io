"use strict"

const timer=(function(){
    let time=-1;
    return ()=>{return time+=1}
})();

//file paths and Element (global)
const arrys={
    //you can add new type here
    typeArry:[
    "Stars",
    "HTML",
    "CSS",
    "Javscript",
    "PyGame"
    ],

    //you can add new link here
    linkArray:[
    "https://github.com/WeaveStars",
    "../html/HTML.html",
    "../html/CSS.html",
    "../html/Javascript.html",
    "../html/Pygame.html"
    ],

    //you can add new background image filepath here
    backgroundStyleArray:[
    "background-image:url(../imgs/html.png);background-size:30vw 30vw;background-repeat:no-repeat;background-color:#4DF0BA;",
    "background-image:url(../imgs/css.png);background-size:30vw 30vw;background-repeat:no-repeat;background-color:#D1B217;",
    "background-image:url(../imgs/javascript.png);background-size:30vw 30vw;background-repeat:no-repeat;background-color:#4D4EF0;",
    "background-image:url(../imgs/pygame.png);background-size:70vw 25vw;background-repeat:no-repeat;background-color:grey;"
    ],

    //you can add star image filepath here
    starStyleArray:[
    "../imgs/star_78-removebg-preview.png",
    "../imgs/star_79-removebg-preview.png",
    "../imgs/star_80-removebg-preview.png"
    ]
}

//create title attribute for each arrow when mouseover.
//i=0,1,2,3, each stands for HTML, CSS, Javscript, Pygame.
//NEVER SWITCH ORDER OF ARROWS IN main.html ! IT WILL ALLOCATE VALUES IN UNEXPECTED ORDER!
const mainArrowHover=function (){
    const arrows=document.getElementsByClassName("img_arrow");
    const x =arrows.length;
    
    for (let i =0; i<x;i++){
        arrows[i].title=arrys.typeArry[i];
    }
}

//change background depending on which arrow clicked
const switchBackground_Link=function (id){
    const bg=document.getElementById("base");
    const link=document.getElementById("reset");
    const stars=document.getElementsByClassName("added_img");
    const pageTitle=document.getElementsByTagName("h1")[0]
    
    //Arrow Number, 1~4
    const arrowNum=Number(id[5]);
    
    //Remove All Stars
    for(let i =stars.length-1;i>-1;i--){
        stars[i].remove();
    }

    //Change Background and Title
    bg.style=arrys.backgroundStyleArray[arrowNum-1];
    link.href=arrys.linkArray[arrowNum];
    pageTitle.innerHTML=arrys.typeArry[arrowNum];
    pageTitle.id=arrys.typeArry[arrowNum];
}

//Reset
const Button_Reset=function (){
    const bg=document.getElementById("base");//body
    const stars=document.getElementsByClassName("added_img");//img added by makeSomethingByID()
    const link=document.getElementById("reset");//reset button
    
    //Change Background and Title
    bg.style="background-color:black";
    document.getElementsByTagName("h1")[0].innerHTML=arrys.typeArry[0];
    document.getElementsByTagName("h1")[0].id=arrys.typeArry[0];

    //Remove All Stars
    for(let i =stars.length-1;i>-1;i--){
        stars[i].remove();
    }
    
    //Change Link to Github
    setTimeout(function link_reset(){
        link.href=arrys.linkArray[0];
    },300);
}

//Make Something when the title is clicked
const makeStarFall=function(ID){
    if (ID=="Stars"){

        /**Setting Property of Star.
         * cnt:The type of Star You Will Add
         * main:Where You will Add the Star To, It is set to body
         * size: The Size of Star
         * position: The Location of Star
         * star: The Element That will Be Added To HTML
         */ 

        const StarProperty={
            cnt:Math.floor(Math.random()*3),
            main:document.getElementById("main"),//main screen
            size:Math.floor(Math.random()*6)+"vw",
            position:[Math.floor(Math.random()*95)+"%", Math.floor(Math.random()*95)+"%"],
            star:document.createElement("img")//create img element to be added
        }

        //Allocating Random Position to added element
        StarProperty.star.src=arrys.starStyleArray[StarProperty.cnt];

        StarProperty.star.style=`width:${StarProperty.size};height:${StarProperty.size};
        position:absolute;top:${StarProperty.position[1]};left:${StarProperty.position[0]};z-index:-1;`;

        StarProperty.star.setAttribute("class","added_img");

        StarProperty.main.appendChild(StarProperty.star);
    }
}

