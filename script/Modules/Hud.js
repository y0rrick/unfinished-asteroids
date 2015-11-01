app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");
    this.score(player.score);
  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

  },
  
  score: function(score) {
    app.layer
        .fillStyle("#fff")
        .font("15px Arial")
        .textAlign("right")
        .fillText("score: "+score, 600, 15);
  }

};