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
    this.centerX = gridX * 25 * this.scale;
    this.centerY = gridY * 25 * this.scale;
    this.orientation = orientation;

    switch (orientation) {
        case 'N':
            this.domino.x = this.centerX - 25 * this.scale;
            this.domino.y = this.centerY + 75 * this.scale;
            this.domino.rotation = -90;
            break;
        case 'S':
            this.domino.x = this.centerX + 25 * this.scale;
            this.domino.y = this.centerY - 25 * this.scale;
            this.domino.rotation = 90;
            break;
        case 'W':
            this.domino.rotation = 180;
            this.domino.x = this.centerX + 50 * this.scale;
            this.domino.y = this.centerY + 50 * this.scale;
            break;
        default:
            this.domino.x = this.centerX - 50 * this.scale;
            this.domino.y = this.centerY - 0 * this.scale;
            break;
    }

    var background = new createjs.Shape();
    var divider = new createjs.Shape();

    background.graphics.beginFill("deepskyblue").drawRoundRect(2, 2, 96, 46, 4);
    background.shadow = new createjs.Shadow("black", 0, 1, 4);
    divider.graphics.beginFill("white").drawRoundRect(49, 6, 2, 38, 0);

    this.domino.addChild(background);
    this.domino.addChild(divider);
    this.domino.addChild(new Pips(left, 0));
    this.domino.addChild(new Pips(right, 1));
    this.pips = [left, right];

    this.addChild(this.domino);
};

Domino.prototype.getPositions = function () {
    if(['E', 'W'].indexOf(this.orientation) != -1){
        var wmod = 2;
        var hmod = 1;
    } else {
        var wmod = 1;
        var hmod = 2;
    }

    return {
        "left": {
            x: this.centerX ,
            y: 2
        }
    }

};