/// <reference path="../../typings/tsd.d.ts"/>

//module domino.models {

class Pip extends createjs.Container {

    private circle:createjs.Shape;

    constructor(x:number, y:number) {
        super();
        this.circle = new createjs.Shape();
        this.circle.graphics.beginFill("white").drawCircle(x, y, 5);

        this.addChild(this.circle);
    }
}