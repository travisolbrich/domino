/// <reference path="../../typings/tsd.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Domino = (function (_super) {
    __extends(Domino, _super);
    function Domino(left, right, gridX, gridY, orientation, scale) {
        _super.call(this);
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
    Domino.prototype.getPositions = function (quadrant, side) {
        var position = {
            x: this.gridX,
            y: this.gridY,
            o: 'e'
        };
        if (['n', 's'].indexOf(quadrant) != -1) {
            position.o = side;
            if (quadrant == 'n') {
                position.y -= 2;
            }
            else if (quadrant == 's') {
                position.y += 4;
            }
        }
        else if (['e', 'w'].indexOf(quadrant) != -1) {
            position.o = side;
            if (quadrant == 'e') {
                position.x += 4;
            }
            else if (quadrant == 'w') {
                position.x -= 2;
            }
        }
        return position;
    };
    return Domino;
})(createjs.Container);
//# sourceMappingURL=Domino.js.map