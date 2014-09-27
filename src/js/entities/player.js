/*jslint node: true*/
/*global Phaser*/
'use strict';

var Player = function (game, x, y) {
  this.onGround = null;
  this.canDoubleJump = null;
  this.doubleJumpUsed = null;

  Phaser.Sprite.call(this, game, x, y, 'player');
  this.anchor.setTo(0.5, 0.5);

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = true;
  this.body.collideWorldBounds = true;

  this.controls = game.input.keyboard.createCursorKeys();

  game.add.existing(this);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function () {
  if (this.controls.right.isDown) {
    this.body.velocity.x = 500;
  } else if (this.controls.left.isDown) {
    this.body.velocity.x = -500;
  } else {
    this.body.velocity.x = 0;
  }

  if (this.controls.up.isDown) {
    if (this.onGround) {
      this.body.velocity.y =-500;
      this.onGround = false;
      this.doubleJumpUsed = false;
      this.canDoubleJump = false;
    } else if (!this.doubleJumpUsed && this.canDoubleJump)  {
      this.body.velocity.y = -600;
      this.canDoubleJump = false;
      this.doubleJumpUsed = true;
    }
  } else if (this.controls.up.isUp) {
    if (!this.onGround) {
      this.canDoubleJump = true;
    }
  }
};

module.exports = Player;
