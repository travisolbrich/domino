/// <reference path="../../typings/tsd.d.ts"/>


class Pips extends createjs.Container {

    constructor (n : number, end: number) {
        super();

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

    }
}
