const game_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;

const ingamestate_start=0;
const ingamestate_roll=1;
const ingamestate_end=0;

let boardpositionsize=50;
let pawnpositions= [];
let boardpositions= [];
let playeramountbuttons= [];

function createBoardPositions()
{
    let x= 0;
    let y = canvas.height-boardPositionSize;
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ;

    for(let i =0 ; i<path.length;i++)
    {

        if(path[i] == 1)//gaan naar rechts
        {
            //bedenk hier wat je met de x moet doen
            +10
        }
        else if(path[i] == 3)//gaan naar links
        {
            // bedenk hier wat je met de x moet doen
            +10
        }
        else if(path[i] == 0)//gaan hier naar boven
        {
            //bedenk hier wat je met de y moet doen
            -10
        }
        boardPositions.push(createRect(x,y,boardPositionSize,boardPositionSize));
    }
} 

function draw()
{
    clearCanvas();
    for(let i =0 ; i<boardPositions.length;i++)
    {
        let pos = boardPositions[i];

        g.fillStyle  = "#004400";
        g.fillRect(pos.x,pos.y,-10,+10);
        g.fillStyle  = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}

function clearCanvas()
{
    g.fillstyle = "cadetblue"
    g.fillrect(0,0, canvas.width, canvas.height );
}

function createRect(x,y,w,h)
{
    let rectangle = {
        x:x,
        y:y,
        x2:x+w,
        y2:y+h,
        w:w,
        h:h,
    };
}
let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");

createBoardPositions();
draw();
