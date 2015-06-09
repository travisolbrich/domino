function Domino(left, right, gridX, gridY, orientation, scale) {
    this.initialize(left, right, gridX, gridY, orientation, scale);
}

Domino.prototype = new createjs.Container();
Domino.prototype.Container_initialize = Domino.prototype.initialize;

Domino.prototype.initialize = function (left, right, gridX, gridY, orientation, scale) {
    this.Container_initialize();
    this.domino = new createjs.Container();

    this.scale = scale;
    this.domino.scaleX = typeof scale !== 'undefined' ? scale : 1;
    this.domino.scaleY = typeof scale !== 'undefined' ? scale : 1;

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

    this.domino.addChild(background);
    this.domino.addChild(divider);

    // Domino orientation set
    switch (orientation) {
        case 'S':
            this.domino.x = this.originX + 25 * this.scale;
            this.domino.y = this.originY - 25 * this.scale;
            this.domino.addChild(new Pips(left, 0));
            this.domino.addChild(new Pips(right, 1));
            this.domino.rotation = 90;
            break;
        case 'N':
            this.domino.x = this.originX + 25 * this.scale;
            this.domino.y = this.originY - 75 * this.scale;
            this.domino.addChild(new Pips(left, 1));
            this.domino.addChild(new Pips(right, 0));
            this.domino.rotation = 90;
            break;
        case 'E':
            this.domino.x = this.originX - 25 * this.scale;
            this.domino.y = this.originY - 25 * this.scale;
            this.domino.addChild(new Pips(left, 0));
            this.domino.addChild(new Pips(right, 1));
            break;
        case 'W':
            this.domino.x = this.originX - 75 * this.scale;
            this.domino.y = this.originY - 25 * this.scale;
            this.domino.addChild(new Pips(left, 1));
            this.domino.addChild(new Pips(right, 0));
            break;
    }


    this.pips = [left, right];

    this.addChild(this.domino);
};

Domino.prototype.getPositions = function () {

    return {
        top: {
            left: {
                x: this.gridX - 2,
                y: this.gridY,
                o: 'W'
            },
            top: {
                x: this.gridX,
                y: this.gridY - 2,
                o: 'N'
            },
            right: {
                x: this.gridX + 2,
                y: this.gridY,
                o: 'E'
            }
        }
    }

};