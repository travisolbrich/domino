/// <reference path="../../typings/tsd.d.ts"/>

class Domino extends createjs.Container {

    private scale:number;
    private originX:number;
    private originY:number;
    private gridX:number;
    private gridY:number;
    private orientation:string;
    private pipValues:number[];

    constructor(left:number, right:number, gridX:number, gridY:number, orientation:string, scale:number) {
        super();

        this.scale = scale;
        this.scaleX = typeof scale !== 'undefined' ? scale : 1;
        this.scaleY = typeof scale !== 'undefined' ? scale : 1;

        //Dominoes are centered based on a grid
        this.originX = gridX * 25 * this.scale;
        this.originY = gridY * 25 * this.scale;
        this.gridX = gridX;
        this.gridY = gridY;
        this.orientation = orientation;

        // Domino shape
        var background = new createjs.Shape();
        var divider = new createjs.Shape();

        background.graphics.beginFill("deepskyblue").drawRoundRect(2, 2, 96, 46, 4);
        background.shadow = new createjs.Shadow("black", 0, 1, 4);
        divider.graphics.beginFill("white").drawRoundRect(49, 6, 2, 38, 0);

        this.addChild(background);
        this.addChild(divider);

        // Domino orientation set
        switch (orientation) {
            case 's':
                this.x = this.originX + 25 * this.scale;
                this.y = this.originY - 25 * this.scale;
                this.addChild(new Pips(left, 0));
                this.addChild(new Pips(right, 1));
                this.rotation = 90;
                break;
            case 'n':
                this.x = this.originX + 25 * this.scale;
                this.y = this.originY - 75 * this.scale;
                this.addChild(new Pips(left, 1));
                this.addChild(new Pips(right, 0));
                this.gridY -= 2;
                this.rotation = 90;
                break;
            case 'e':
                this.x = this.originX - 25 * this.scale;
                this.y = this.originY - 25 * this.scale;
                this.addChild(new Pips(left, 0));
                this.addChild(new Pips(right, 1));
                break;
            case 'w':
                this.x = this.originX - 75 * this.scale;
                this.y = this.originY - 25 * this.scale;
                this.addChild(new Pips(left, 1));
                this.addChild(new Pips(right, 0));
                break;
        }

        this.pipValues = [left, right];

    }

    public getPositions(quadrant:string, side:string) {
        var position = {
            x: this.gridX,
            y: this.gridY,
            o: 'e'
        };

        if (['n', 's'].indexOf(quadrant) != -1) {
            position.o = side;

            if (quadrant == 'n') {
                position.y -= 2;
            } else if (quadrant == 's') {
                position.y += 4;
            }
        } else if (['e', 'w'].indexOf(quadrant) != -1) {
            position.o = side;

            if (quadrant == 'e') {
                position.x += 4;
            } else if (quadrant == 'w') {
                position.x -= 2;
            }
        }

        return position;
    }
}