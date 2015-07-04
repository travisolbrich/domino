/// <reference path="../../typings/tsd.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//module domino.models {
var Pip = (function (_super) {
    __extends(Pip, _super);
    function Pip(x, y) {
        _super.call(this);
        this.circle = new createjs.Shape();
        this.circle.graphics.beginFill("white").drawCircle(x, y, 5);
        this.addChild(this.circle);
    }
    return Pip;
})(createjs.Container);
//# sourceMappingURL=Pip.js.map