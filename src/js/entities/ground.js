/*jslint node: true*/
/*global Phaser*/
'use strict';

var Ground = function (game) {
  var height = 50;

  Phaser.TileSprite.call(this, game, 0, game.height - height, game.width, game.height, 'ground');
  this.anchor.setTo(0, 0);

  game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;

  game.add.existing(this);
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function () {};

module.exports = Ground;
