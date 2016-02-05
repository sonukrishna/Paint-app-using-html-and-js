var canvas=document.getElementById("paint");
var ctx=canvas.getContext("2d");
//var canvasOffset = $("#canvas").offset();
//var offsetX = canvasOffset.left;
//var offsetY = canvasOffset.top;
ctx.lineWidth=2;//current line width in pixels
var pixelWidth=2;
var down=false; //to check whether mouse button is pressed or not    
canvas.addEventListener('mousemove', move);

canvas.addEventListener('mousedown', draw);
function draw(){
    down=true;
    ctx.beginPath();
    ctx.moveTo(xPos,yPos);
    canvas.addEventListener('mousemove',move);
}

canvas.addEventListener('mouseup', function(){down=false;});
//canvas.addEventListener('mousemove', move);
function move(e){
    xPos=e.clientX - canvas.offsetLeft;
    yPos=e.clientY - canvas.offsetTop;

    if (down == true){
        ctx.lineTo(xPos,yPos);
        ctx.stroke();
    }
}

function changeColor(color){
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
}
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function sizeIncr(){
//    ctx.lineWidth=size;
    if (pixelWidth < 20){
	pixelWidth += 1;
	ctx.lineWidth = pixelWidth;
    }
}
function sizeDecr(){
    if (pixelWidth >=2){
	pixelWidth -= 1;
	ctx.lineWidth = pixelWidth;
    }
}
function reset(){
    ctx.lineWidth=2;
}
function fill(){
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
function rect(){
//  ctx.fillRect(30,30,150,150);
  ctx.clearRect(50,50,70,70);

  ctx.strokeRect(60,60,60,60);
}
function openIt(){
    document.getElementById('file').click();
}
document.getElementById("file").addEventListener('change',function(e){
    clearCanvas();
    var tmp=URL.createObjectURL(e.target.files[0]);
    var image=new Image();
    image.src = tmp;
//    alert(tmp);
    image.addEventListener('load', function()
    {
        imageWidth=image.naturalWidth;
        imageHeight=image.naturalHeight;

	newImageWidth=imageWidth;
	newImageHeight=imageHeight;

	imageRatio=imageWidth/imageHeight;

	if (newImageWidth > 720 && newImageWidth > newImageHeight){
	    newImageWidth = 720;
	    newImageHeight = 720/imageRatio; 
	}

	if (newImageWidth > newImageHeight && newImageHeight > 480){
	    newImageHeight=480;
	    newImageWidth=480 * imageRatio;
	}
	if (newImageWidth < newImageHeight && newImageHeight > 480){
            newImageHeight=480;
            newImageWidth=480 * imageRatio;
        }
	if (newImageWidth == newImageHeight && newImageHeight > 480){
            newImageHeight=480;
            newImageWidth=480;
        }

	ctx.drawImage(image, 0, 0, newImageWidth, newImageHeight);
    });
});

function circle(){
//     canvas.addEventListener("mouseup",eraser_up,false);
//     canvas.addEventListener("mousemove",eraser_move,false);
//     canvas.addEventListener("mousedown",eraser_down,false);
     c.onmouseup = eraser_up;
     c.onmousedown = eraser_down;
     c.onmousemove = eraser_move 
    // var eraser_flag;
     function eraser_down(e){
          down = true;
     }
     function eraser_move(e){
         if(down == true){
             ptx = e.clientX;
             pty = e.clientY;
             ctx.clearRect(ptx,pty,15,15);
          }
     }
     function eraser_up(e){
          down = false;
     }
}



function save(){
    var save_img=canvas.toDataURL("image/png");
    window.location=save_img;
}
//function circle(){
//     c.addEventListener("mouseup",eraser_up,false);
//     c.addEventListener("mousemove",eraser_move,false);
//     c.addEventListener("mousedown",eraser_down,false);
//     c.onmouseup = eraser_up;
//     c.onmousedown = eraser_down;
//     c.onmousemove = eraser_move 
    // var eraser_flag;
//     function eraser_down(e){
//          eraser_flag = true;
//     }
//     function eraser_move(e){
//         if(eraser_flag){
/*             ptx = e.clientX;
             pty = e.clientY;
             ctx.clearRect(ptx,pty,15,15);
          }
     }
     function eraser_up(event){
          eraser_flag = false;
     }
} */  

