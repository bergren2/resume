/*jslint node: true*/
/*global Phaser*/
'use strict';

var Ground = require('../entities/ground');
var Player = require('../entities/player');

var Game = function () {
  this.ground = null;
  this.player = null;
};

module.exports = Game;

Game.prototype = {
  create: function () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;

    this.ground = new Ground(this.game);
    this.player = new Player(this.game, this.game.width / 2, this.game.height / 2);

    this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {
    this.game.physics.arcade.collide(this.player, this.ground, function () {
      this.player.onGround = true;
    }, null, this);
  },

  onInputDown: function () {
    this.game.state.start('Menu');
  }
};
