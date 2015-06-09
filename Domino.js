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
        case 's':
            this.domino.x = this.originX + 25 * this.scale;
            this.domino.y = this.originY - 25 * this.scale;
            this.domino.addChild(new Pips(left, 0));
            this.domino.addChild(new Pips(right, 1));
            this.domino.rotation = 90;
            break;
        case 'n':
            this.domino.x = this.originX + 25 * this.scale;
            this.domino.y = this.originY - 75 * this.scale;
            this.domino.addChild(new Pips(left, 1));
            this.domino.addChild(new Pips(right, 0));
            this.gridY -= 2;
            this.domino.rotation = 90;
            break;
        case 'e':
            this.domino.x = this.originX - 25 * this.scale;
            this.domino.y = this.originY - 25 * this.scale;
            this.domino.addChild(new Pips(left, 0));
            this.domino.addChild(new Pips(right, 1));
            break;
        case 'w':
            this.domino.x = this.originX - 75 * this.scale;
            this.domino.y = this.originY - 25 * this.scale;
            this.domino.addChild(new Pips(left, 1));
            this.domino.addChild(new Pips(right, 0));
            break;
    }


    this.pips = [left, right];

    this.addChild(this.domino);
};

Domino.prototype.getPositions = function (quadrant, side) {
    var position = {
        x: this.gridX,
        y: this.gridY,
        o: 'e'
    };

    if(['n', 's'].indexOf(quadrant) != -1){
        position.o = side;

        if(quadrant == 'n'){
            position.y -= 2;
        } else if(quadrant == 's') {
            position.y += 4;
        }
    } else if(['e', 'w'].indexOf(quadrant) != -1){
        position.o = side;

        if(quadrant == 'e'){
            position.x += 4;
        } else if(quadrant == 'w') {
            position.x -= 2;
        }
    }

    return position;

};