function init() {
    var stage = new createjs.Stage("canvas");

    var scale = 1;

    //stage.addChild(new Domino(4, 4, 2, 2, 'N', scale));
    //stage.addChild(new Domino(4, 4, 4, 2, 'S', scale));
    //stage.addChild(new Domino(4, 4, 7, 1, 'E', scale));
    //stage.addChild(new Domino(4, 4, 7, 3, 'W', scale));


    stage.addChild(new Domino(1, 1, 1, 2, 'N', scale));
    stage.addChild(new Domino(1, 2, 4, 2, 'E', scale));
    stage.addChild(new Domino(2, 3, 8, 2, 'E', scale));
    stage.addChild(new Domino(3, 4, 9, 5, 'S', scale));
    stage.addChild(new Domino(4, 5, 12, 6, 'E', scale));
    stage.addChild(new Domino(5, 6, 15, 5, 'N', scale));
    stage.addChild(new Domino(6, 6, 15, 2, 'W', scale));
    var domino = new Domino(5, 1, 15, 9, 'S', scale);
    stage.addChild(domino);

    stage.update();

    console.log(domino.pips);

    function resizeCanvas() {
        canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stage.update();
    }

    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();

}