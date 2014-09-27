/*jslint node: true*/
/*global playerState*/
'use strict';

var Menu = function () {
  this.text = null;
};

Menu.prototype = {

  create: function () {
    var x = this.game.width / 2;
    var y = this.game.height / 2;

    var style = { font: '65px Didot', fill: '#fff', align: 'center' };

    this.text = this.add.text(x - 200, y - 200, 'Press to Start', style);

    this.input.onDown.add(this.onDown, this);
  },

  update: function () {
  },

  onDown: function () {
    this.game.state.start(playerState.currentLevel);
  }
};

module.exports = Menu;
