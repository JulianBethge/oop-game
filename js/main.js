
class Game {
    constructor(){
        this.player = null; //will store an instance of the class Player
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();
    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                console.log("move player to the left")
                this.player.moveLeft();
            }else if(event.key === "ArrowRight"){
                console.log("move player to the right")
                this.player.moveRight();
            }
        });
    }
}


class Player {
    constructor(){
        this.positionX = 40;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();

    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        // append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }
    moveLeft(){
        this.positionX--;
        const newDiv = document.getElementById("player");
        this.domElement.style.left = this.positionX + "vw";
        
    }
    moveRight(){
        console.log("moving right....");
        this.positionX++;
        const newDiv = document.getElementById("player");
        this.domElement.style.left = this.positionX + "vw";
    }
}



const game = new Game();
game.start();


