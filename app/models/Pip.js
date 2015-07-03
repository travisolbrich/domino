function Pip(x, y) {
    this.initialize(x, y);
}

Pip.prototype = new createjs.Container();
Pip.prototype.Container_initialize = Pip.prototype.initialize;

Pip.prototype.initialize = function(x, y) {
    this.Container_initialize();
    this.circle = new createjs.Shape();
    this.circle.graphics.beginFill("white").drawCircle(x, y, 5);

    this.addChild(this.circle);
};