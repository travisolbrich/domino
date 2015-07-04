/// <reference path="../typings/tsd.d.ts"/>

class DominoControl {

    private stage;

    public constructor() {
        this.stage = new createjs.Stage("canvas");

        var scale = 1;

        var domino = new Domino(1, 2, 4, 4, 'e', scale);
        var position = domino.getPositions('w', 'n');
        console.log(position);

        this.stage.addChild(domino);
        this.stage.addChild(new Domino(2, 5, domino.getPositions('e', 'e').x, domino.getPositions('e', 'e').y, domino.getPositions('e', 'e').o, scale));
        this.stage.addChild(new Domino(1, 4, position.x, position.y, position.o, scale));

        this.stage.update();

        window.onresize = this.onWindowResized.bind(this);
        this.resizeCanvas();
    }

    public resizeCanvas() {
        var canvas = document.getElementById('canvas');
        canvas.setAttribute("width", window.innerWidth.toString());
        canvas.setAttribute("height", window.innerHeight.toString());
        this.stage.update();
    }

    private onWindowResized(event:UIEvent):void {
        this.resizeCanvas();
    }
}

var control = new DominoControl();


