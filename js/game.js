
var game = new Phaser.Game(800,600,Phaser.CANVAS);

var gameState0 = function(){
   console.log("gameState0");
};

gameState0.prototype ={
   preload : preload0,
   create : create0,
   update : update0,
};

var gameState2 = function(){
  console.log("gameState2");

  

};

gameState2.prototype = {
  preload : preload2,
  create: create2,
  update : update2,
  //:plot
};


//var button;

game.state.add('gameState2',gameState2);
game.state.add('gameState0',gameState0);
//game.state.add('gameState2',gameState2);
//game.state.start('gameState2');
game.state.start('gameState0');

/*function preload() {
    game.load.image('button','assets/playbutton.png');
    game.load.image('play','assets/play.png');
   // game.load.audio('');
   // game.load.audio('');
    game.load.image('ssc','assets/ssc.png');
}

function create(){
   game.scale.stopFullScreen();  
    

    play= game.add.button(window.innerWidth*0.49,window.innerHeight*0.57, 'play', actionOnPlay);
    play.anchor.setTo(0.5,0.5);
        play.scale.setTo(1,0.82);
         function actionOnPlay () {
        
        game.state.start('gameState2');
               
  }

 function update()
 {

     

  //start game
      x = game.input.mousePointer.x;
      y = game.input.mousePointer.y;

  if (game.input.activePointer.isDown) 
      {
          if (x>window.innerWidth*0.35 &&x<window.innerWidth*0.63 && y>window.innerHeight*0.53 &&y<window.innerHeight*0.616) 
          {
              flag_sw=0;
              game.state.start('gameState2'); //play button
          }

        
      }
*/
var button;

function preload0(){
  game.load.image('button','assets/playbutton.png',game.world.width/2,game.world.height/2);
  game.load.image('cover','assets/cover.jpg');
}

function create0(){

   game.add.sprite(0,0,'cover');

    this.game.scale.pageAlignHorizontally=true;
    this.game.scale.pageAlignVertically=true;
   button=game.add.button(game.world.width/4,game.world.height/3,'button',actionOnClick,this,2,1,0);
   button.input.useHandCursor=true;
}

function actionOnClick(){
   game.state.start('gameState2');
}

function update0(){

}

var x=0;
var y=0;

function preload2(){
     game.load.image('background','assets/winter.png');
     //game.load.spritesheet('penguin','assets/penguin1.png',);
     game.load.spritesheet('penguinw','assets/penguinw.png',118,130);
     game.load.image('snowflake', 'assets/snowflk.png');
     game.load.image('coins', 'assets/coins.png');
     game.load.image('rock', 'assets/rock.png');
     game.load.image('snowflake', 'assets/snowflake.png');
     game.load.image('snowflake', 'assets/snowflake.png');
     game.load.image('platform','assets/platform4.jpg');
     //game.load.image('castle','assets/castle.png')
     // game.load.baseURL = '//examples.phaser.io/';
     //game.load.crossOrigin = 'anonymous';
   }


var platforms;

/*function preload2(){
     game.load.image('background','assets/background.png');
     game.load.image('snowman','assets/snowman.png');

    } */

var penguin;
var cursors;
//-------------------------------------------------------------------------------------------------------------------------------
function create2(){

   this.background =this.game.add.tileSprite(0, 0, window.innerWidth*window.devicePixelRatio, window.innerHeight*window.devicePixelRatio, 'background');
    penguin = game.add.sprite(20,450,'penguinw');
    //penguin.anchor.setTo(0);
    penguin.scale.setTo(0.5);
    game.world.setBounds(0, 0, 2000, 600);
   //penguin
   //penguin= game.add.sprite(32,game.world.height-150,'penguinw');
   penguin.enableBody=true;
   game.physics.arcade.enable(penguin);
   penguin.body.gravity.y=100;
   penguin.body.bounce.y=100;
   penguin.animations.add('right',[0,1,2,3],5,true);
  /* penguin.animations.add('left',[],5,true);*/
   var walk=penguin.animations.add('walk');

   penguin.animations.play('walk',30,true);

   cursors=game.input.keyboard.createCursorKeys();

   game.camera.follow(penguin);

    //wave
    /*wave1 = game.add.bitmapData(1800, 600);
    wave1.addToWorld();
    wave2 = game.add.bitmapData(1802, 600);
    wave2.addToWorld();*/
    
    //castle
    /*var castle=game.add.sprite(520 ,315,'castle');
    castle.enableBody=true;
    castle.scale.setTo(0.5);
*/

    this.game.scale.pageAlignHorizontally=true;
    this.game.scale.pageAlignVertically=true;

    //enable physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

     
    ///snowflakes
    var emitter = game.add.emitter(game.world.centerX, 0, 200);

    emitter.width = game.world.width;

    emitter.makeParticles('snowflake');
    
    emitter.minParticleScale = 0.005;
    emitter.maxParticleScale = 0.02;

    emitter.setYSpeed(50, 200);
    emitter.setXSpeed(-30, 30);

    emitter.start(false, 3500, 30);

    //ground 
    

    //platform
     platforms=game.add.group();

    platforms=game.add.sprite(0,520,'platform');
    platforms.enableBody=true;
    //platforms.scale.setTo(0.75);
    //platforms.body.immovable = true;
    //var ground=platforms.create(0,game.world.height-64,'ground');*/

    var ledge=  platforms.create(400,400,'platform');
    ledge.body.immovable=true;


    


    
   

    //curve
    /*this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
       

        var py = this.points.y;

        for (var i = 1; i < py.length; i++)
        {
            py[i] = this.rnd.between(500,300);
        }

        this.plot();*/

   

}

/*function plot(){

 
  this.bmd.clear();

        var x = 1 / game.width;
        
        for (var i = 0; i <= 1; i += x)
        {
             

             var px = this.math.bezierInterpolation(this.points.x, i);
             var py = this.math.bezierInterpolation(this.points.y, i);

             var px = this.math.catmullRomInterpolation(this.points.x, i);
             var py = this.math.catmullRomInterpolation(this.points.y, i);

            this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
            

        }

       for (var p = 0; p < this.points.x.length; p++)
        {
            this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'blue');
            //this.bmd.rect(p,game.height/2,game.height/3,this.points.y[p],this.points.x[p],'blue');
            //this.bmd.points(p,game.height/2,game.height/3,this.points.y[p],this.points.x[p],'blue');
        }
        //this.bmd.rect(game.height,10,this.points.x[p]+3, this.points.y[p]+3,'blue');
      }*/


  

function update2(){

  this.background.tilePosition.x-=0.5;
  //platforms.tilePosition.x=-0.25;

  game.physics.arcade.collide(penguin,platforms);

  penguin.body.velocity.x=0;
  penguin.body.velocity.y=0;
    
  /*if(cursors.left.isDown){
    penguin.body.velocity.y=-150;

    penguin.animations.play('left');
  }
  

   else*/if(cursors.right.isDown)
   {
    penguin.body.velocity.x=150;
    //penguin.body.velocity.y=150;

    penguin.animations.play('right');
   }
  else
  {
    penguin.animations.stop();

    penguin.frame=0;
  }

 if(cursors.up.isDown)//|| game.input.pointer1.isDown)// && penguin.body.touching.down)
  {
    penguin.body.velocity.y= -200;
  }
  
  }

  function render(){
    
    game.debug.cameraInfo(game.camera, 32, 32);
      game.debug.spriteCoords(player, 32, 500);
  }


 
 
  