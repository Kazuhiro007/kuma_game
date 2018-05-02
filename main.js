enchant();

window.onload = function() {

    var core = new Core(320, 320);
    core.fps = 50;
    core.preload('chara1.png');
    core.onload = function() {

      var bear = new Sprite(32, 32);
      bear.image = core.assets['chara1.png'];
      bear.x = 0;
      bear.y = 0;
      bear.frame = 1;

      bear.addEventListener('enterframe', function() {
          if (core.input.left) this.x -= 5;
          if (core.input.right) this.x += 5;
          if (core.input.up) this.y -= 5;
          if (core.input.down) this.y += 5;

          if (this.within(enemy, 10)) {
              core.pushScene(gameOverScene);
              core.stop();
          }
      });

      var enemy = new Sprite(32, 32);
      enemy.image = core.assets['chara1.png'];
      enemy.x = 80;
      enemy.y = 0;
      enemy.frame = 6;

      var gameOverScene = new Scene();
      gameOverScene.backgroundColor = 'black';

      core.rootScene.addChild(bear);
      core.rootScene.addChild(enemy);

    }
    core.start();
};
