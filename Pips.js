function Pips(n, end) {
    this.initialize(n, end);
}

Pips.prototype = new createjs.Container();
Pips.prototype.Container_initialize = Pips.prototype.initialize;

Pips.prototype.initialize = function(n, end) {
    this.Container_initialize();
    var offset = ((end == 0) ? 0 : 50);

    switch (n) {
        case 0:
            break;
        case 1:
            this.addChild(new Pip(offset + 25, 25));
            break;
        case 2:
            this.addChild(new Pip(offset + 37, 37));
            this.addChild(new Pip(offset + 12, 12));
            break;
        case 3:
            this.addChild(new Pip(offset + 38, 38));
            this.addChild(new Pip(offset + 25, 25))
            this.addChild(new Pip(offset + 12, 13));
            break;
        case 4:
            this.addChild(new Pip(offset + 12, 13));
            this.addChild(new Pip(offset + 12, 38));
            this.addChild(new Pip(offset + 38, 13));
            this.addChild(new Pip(offset + 38, 38));
            break;
        case 5:
            this.addChild(new Pip(offset + 12, 13));
            this.addChild(new Pip(offset + 12, 38));
            this.addChild(new Pip(offset + 25, 25));
            this.addChild(new Pip(offset + 38, 13));
            this.addChild(new Pip(offset + 38, 38));
            break;
        case 6:
            this.addChild(new Pip(offset + 12, 13));
            this.addChild(new Pip(offset + 12, 38));
            this.addChild(new Pip(offset + 25, 13));
            this.addChild(new Pip(offset + 25, 38));
            this.addChild(new Pip(offset + 38, 13));
            this.addChild(new Pip(offset + 38, 38));
    }

    this.addChild(this.circle);
};