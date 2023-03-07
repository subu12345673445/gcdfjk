
var canvas = new fabric.Canvas('myCanvas');

ball_x = 10;
ball_y = 10;

holl_x = 400;
holl_y = 400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
	player_object = Img;

	holl_object.scaleToWidth(150);
	holl_object.scaleToHeight(140);
	holl_object.set({
	top:holl_y,
	left:holl_x
	});
	canvas.add(holl_object);

	});
}

function new_image()

	{
		fabric.Image.fromURL("player.png", function(Img) {
		player_object = Img;
	
		player_object.scaleToWidth(50);
		player_object.scaleToHeight(50);
		player_object.set({
		top:player_y,
		left:player_x
		});
		canvas.add(player_object);
	
		});
	}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(player_y>=0){
			player_y=player_y-block_image_height;
			console.log("BlockImgHeight= "+block_image_height);
			console.log("when up arrow is PRESSED, X= "+player_x+" Y="+player_y);
			canvas.remove(player_object);
			player_update();
	
		}
	}

	function down()
	{
		if(player_y<=500){
			player_y=player_y+block_image_height;
			console.log("BlockImgHeight= "+block_image_height);
			console.log("when up arrow is PRESSED, X= "+player_x+" Y="+player_y);
			canvas.remove(player_object);
			player_update();
			
		}
	}

	function left()
	{
		if(player_x>5){
			player_x=player_x-block_image_width;
			console.log("BlockImgWidth= "+block_image_width);
			console.log("when up arrow is PRESSED, X= "+player_x+" Y="+player_y);
			canvas.remove(player_object);
			player_update();
			
		}
	}

	function right()
	{
		if(player_x>=1050){
			player_x=player_x-block_image_width;
			console.log("BlockImgWidth= "+block_image_width);
			console.log("when up arrow is PRESSED, X= "+player_x+" Y="+player_y);
			canvas.remove(player_object);
			player_update();
			
		}
	}
	
}

