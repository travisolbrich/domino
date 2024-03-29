/// <reference path="../../typings/tsd.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Pips = (function (_super) {
    __extends(Pips, _super);
    function Pips(n, end) {
        _super.call(this);
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
                this.addChild(new Pip(offset + 25, 25));
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
    }
    return Pips;
})(createjs.Container);
//# sourceMappingURL=Pips.js.map