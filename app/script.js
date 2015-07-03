function init() {
    var stage = new createjs.Stage("canvas");

    var scale = 1;

    var domino = new Domino(1, 2, 4, 4, 'e', scale);
    var position = domino.getPositions('w', 'n');
    console.log(position);

    stage.addChild(domino);
    stage.addChild(new Domino(2, 5, domino.getPositions('e', 'e').x, domino.getPositions('e', 'e').y, domino.getPositions('e', 'e').o, scale));
    stage.addChild(new Domino(1, 4, position.x, position.y, position.o, scale));

    stage.update();

    function resizeCanvas() {
        canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stage.update();
    }

    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();
}

