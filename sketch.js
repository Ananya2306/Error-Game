  var canvas,backG,bg;
  var sr1;
  var startButton , sB;

 /* var tank ;
  var tankUp,tankDown, tankLeft, tankRight;

  var w1 , w2,w3,w4,w5,w6,w7,w8,w9,w10;
  var w11,w12,w13,w14,w15,w16,w17,w18,w19,w20;
  var w21,w22,w23,w24,w25,w26,w27,w28,w29,w30;
  var w31,w32,w33,w34,w35,w36,w37,w38,w39,w40;
  var w41,w42,w43,w44,w45;

  var t1;

  var score = 0;

  var win , again, gameOver,resetButton;

  var s ,f, sLine,fLine;

  var coin,coinS;

  var pills;
  var dots;
  var TotDots = 0;
  var EatDots = 0;
*/
  var gameState = "Start";
  
function preload(){
    bg = loadImage("images/bg1.png");

    scr1 = loadImage("images/scr1.png");
  sB = loadImage("images/startB.png");

 sLine = loadImage("images/st.png");
  fLine = loadImage("images/finish.png");

  tankUp = loadImage("images/tankGU.png");
  tankDown = loadImage("images/tankGD.png");
  tankLeft = loadImage("images/tankGL.png");
  tankRight = loadImage("images/tankGR.png");

 coin = loadImage("images/coin.png");
 coinS = loadSound("coin.wav"); 

  gameOver = loadImage("images/win.jpg");
  resetButton = loadImage("images/reset.jpg");

}

function setup() {

canvas = createCanvas(windowWidth,windowHeight);
  
backG = createSprite(windowWidth/2,windowHeight/2);
backG.addImage(bg);
backG.visible = false;
/*
  tank = createSprite(40, 567, 0.5, 0.5);
  tank.addImage(tankRight);
  tank.scale = 0.15;
  tank.visible = true;
  
  s = createSprite(70,553);
  s.addImage(sLine);
  s.scale = 0.4;

  f = createSprite(1360,73);
  f.addImage(fLine);
  f.scale = 0.2;

  win = createSprite(700, 350);
  win.addImage(gameOver);
  
  win.visible = false;

  again = createSprite(710, 590);
  again.addImage(resetButton);
  again.scale = 0.5;
  again.visible = false;

  pills = new Group();

  w1 = createSprite(40,274,70,500);
  w1.visible = false;
  w2 = createSprite(680,20,1350,40);
  w2.visible = false;
  w3 = createSprite(680,605,1370,40);
  w3.visible = false;
  w4 = createSprite(1330,360,70,500); 
  w4.visible = false;
  w5 = createSprite(620,545,450,20);
  w5.visible = false;
  w6 = createSprite(180,505,50,180);
  w6.visible = false;
  w7 = createSprite(100,360,80,20);
  w7.visible = false;
  w8 = createSprite(295,530,60,120);
  w8.visible = false;
  w9 = createSprite(230,420,150,20);
  w9.visible = false;
  w10 = createSprite(290,360,40,130);
  w10.visible = false;
  w11 = createSprite(240,297,150,30);
  w11.visible = false;
  w12 = createSprite(180,280,35,30);
  w12.visible = false;
  w13 = createSprite(315,260,295,24);
  w13.visible = false;
  w14 = createSprite(425,375,70,250);
  w14.visible = false;
  w15 = createSprite(520,315,140,24);
  w15.visible = false;
  w16 = createSprite(590,370,110,30);
  w16.visible = false;
  w17 = createSprite(560,340,50,40);
  w17.visible = false;
  w18 = createSprite(520,430,140,20);
  w18.visible = false;
  w19 = createSprite(625,475,200,20);
  w19.visible = false;
  w20 = createSprite(310,182,300,20);
  w20.visible = false;
  w21 = createSprite(570,220,35,80);
  w21.visible = false;
  w22 = createSprite(700,250,50,100);
  w22.visible = false;
  w23 = createSprite(820,430,300,23);
  w23.visible = false;
  w24 = createSprite(1080,490,40,120);
  w24.visible = false;
  w25 = createSprite(915,485,270,25);
  w25.visible = false;
  w26 = createSprite(1000,365,440,24);
  w26.visible = false;
  w27 = createSprite(635,190,170,15);
  w27.visible = false;
  w28 = createSprite(810,350,50,50);
  w28.visible = false;
  w29 = createSprite(1205,400,35,170);
  w29.visible = false;
  w30 = createSprite(1135,550,150,20);
  w30.visible = false;
  w31 = createSprite(1185,170,40,190);
  w31.visible = false;
  w32 = createSprite(185,132,40,120);
  w32.visible = false;
  w33 = createSprite(360,87,400,20);
  w33.visible = false;
  w34 = createSprite(430,157,60,60);
  w34.visible = false;
  w35 = createSprite(355,137,90,15);
  w35.visible = false;
  w36 = createSprite(630,142,350,30);
  w36.visible = false;
  w37 = createSprite(810,137,60,110);
  w37.visible = false;
  w38 = createSprite(900,87,130,12);
  w38.visible = false;
  w39 = createSprite(895,187,150,15);
  w39.visible = false;
  w40 = createSprite(940,152,50,60);
  w40.visible = false;
  w41 = createSprite(1030,137,150,30);
  w41.visible = false;
  w42 = createSprite(1070,138,60,115);
  w42.visible = false;
  w43 = createSprite(1135,185,50,15);
  w43.visible = false;
  w44 = createSprite(958,245,500,24);
  w44.visible = false;
  w45 = createSprite(1055,312,300,15);
  w45.visible = false;

  createdotsx(9,110,55);
  createdotsx(8,110,225);
  createdotsx(2,165,352);
  createdotsx(3,110,387);
  createdotsx(3,500,285);
  createdotsx(12,490,402);
  createdotsy(2,1150,450);
  createdotsy(2,110,110);
  createdotsy(2,110,265);
  createdotsy(3,110,430);
  createdotsy(3,355,290);
  createdotsx(3,235,453);
  createdotsx(3,590,92);
  createdotsx(10,720,55);
  createdotsy(2,235,497);
  createdotsy(2,355,497);
  createdotsx(6,430,517);
  createdotsx(6,740,460);
  createdotsx(3,620,337);
  createdotsy(8,1260,105);
  createdotsx(8,425,567);
  createdotsx(3,745,292);
  createdotsx(5,870,332);
  createdotsx(4,990,282);
}

function createdotsx(numdots,x_coor,y_coor) 
{
  for (var i=0; i< numdots; i++)
  {
  dots = createSprite(x_coor+60*i,y_coor,5,5);
  dots.addImage(coin);
  dots.scale=0.2;
  pills.add(dots);
 TotDots++;
  }
}

function createdotsy(numdots,x_coor,y_coor) 
{
  for (var i=0; i< numdots; i++)
  {
  dots = createSprite(x_coor,y_coor+60*i,5,5);
  dots.addImage(coin);
  dots.scale=0.2;
  pills.add(dots);
 TotDots++;
  }*/
}

function draw() {
 // background();

 // console.log(tank.x);
 // console.log(tank.y);
if(gameState === "Start"){
  screen1();
}
/*
console.log(windowWidth);

  if(keyDown(UP_ARROW))
  {
      tank.y-=5;
      tank.addImage(tankUp);
      tank.scale = 0.15;
  }
  if(keyDown(RIGHT_ARROW))
  {
    tank.x+=5;
    tank.addImage(tankRight);
    tank.scale = 0.19;
  }
  if(keyDown(DOWN_ARROW))
  {
    tank.y+=5;
    tank.addImage(tankDown);
    tank.scale = 0.15;
  }
 if(keyDown(LEFT_ARROW))
  {
    tank.x-=5;
    tank.addImage(tankLeft);
    tank.scale = 0.15;
  }


  if(tank.isTouching(w1) || tank.isTouching(w2) || tank.isTouching(w3) || tank.isTouching(w4) || tank.isTouching(w5))
    {
    tank.x = 40;
    tank.y = 565;
    }
  if(tank.isTouching(w6) || tank.isTouching(w7) || tank.isTouching(w8) || tank.isTouching(w9) || tank.isTouching(w10))
    {
    tank.x = 40;
    tank.y = 565;
    }
  if(tank.isTouching(w11) || tank.isTouching(w12) || tank.isTouching(w13) || tank.isTouching(w14) || tank.isTouching(w15))
    {
    tank.x = 40;
    tank.y = 565;
    }
  if(tank.isTouching(w16) || tank.isTouching(w17) || tank.isTouching(w18) || tank.isTouching(w19) || tank.isTouching(w20)) 
    {
    tank.x = 40;
    tank.y = 565;
    }
  if(tank.isTouching(w21) || tank.isTouching(w22) || tank.isTouching(w23) || tank.isTouching(w24) || tank.isTouching(w25))
    {
    tank.x = 40;
    tank.y = 565;
    }
  if(tank.isTouching(w26) || tank.isTouching(w27) || tank.isTouching(w28) || tank.isTouching(w29) || tank.isTouching(w30))
    {
    tank.x = 40;
    tank.y = 565;
    }
  if(tank.isTouching(w31) || tank.isTouching(w32) || tank.isTouching(w33) || tank.isTouching(w34) || tank.isTouching(w35)) 
    {
    tank.x = 40;
    tank.y = 565;
    }
  if(tank.isTouching(w36) || tank.isTouching(w37) || tank.isTouching(w38) || tank.isTouching(w39) || tank.isTouching(w40))
    {
    tank.x = 40;
    tank.y = 565;
    }
  if(tank.isTouching(w41) || tank.isTouching(w42) || tank.isTouching(w43) || tank.isTouching(w44) || tank.isTouching(w45)) 
    {
    tank.x = 40;
    tank.y = 565;
    }
*/
 // coinScore();
  drawSprites();

  /*if(mousePressedOver(again))
  {
    reset();
  }

fill("red");
  textStyle("bold");
  textSize(24);
  text("~Start~",3,540);*/
/*
  fill("black");
  textStyle("bold");
  textSize(30);
  text("Score:--  "+ score,24,30);

 fill("red");
  textStyle("bold");
  textSize(24);
  text("~Finish~",1260,50);*/

}
/*
function coinScore() {
  
  for (var i = 0;i<TotDots;i++)
 {
  if (pills.get(i) != undefined && pills.get(i).isTouching(tank))
  {
    pills.get(i).visible == false;
    coinS.play();
    //playSound("sound://category_collect/collect_item_bling_1.mp3", false);
    score = score + 20;
    EatDots++;
  }

 }
 
if (tank.isTouching(f))
    {
  tank.visible = false;
win.visible= true;
  again.visible = true;
  EatDots.visible = false;
  TotDots.visible = false;
  dots.visible = false;
  pills.visible = false;
 // score.visible = false;
  s.visible = false;
  f.visible = false;
 
    }
  }
*/
 function screen1(){
sr1 = createSprite(windowWidth/2,windowHeight/2);
sr1.addImage(scr1);
sr1.visible = true;


startButton = createSprite(600,600,100,100);
startButton.addImage(sB);
startButton.visible = true;

if(mousePressedOver(startButton)){
  screen2();
}
  }

  function screen2(){
    sr1.visible = false;
    startButton.visible = false;
    backG.visible = true;
  }
/*
function reset() 
{

  tank.x = 40;
  tank.y = 567;
  tank.visible = true;
  win.visible = false;
  s.visible = true;
  f.visible = true;
  again.visible = false;
  score = 0 ;

}*/