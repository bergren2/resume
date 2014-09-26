# R&eacute;sum&eacute;: The Game

My r&eacute;sum&eacute; in game-form. Currently a work in progress.

## Setup

This project uses [Phaser](http://phaser.io/) for the game engine and
[gulp-gh-pages](https://github.com/rowoot/gulp-gh-pages) to deploy to GitHub
Pages.

### Environment Prereqs

You should have the following minimally setup:

- [Git](https://help.github.com/articles/set-up-git) (duh)
- [Node.js](http://nodejs.org/download/)
- [Bower](http://bower.io/)

### Initial Project Setup

    $ git clone git@github.com:bergren2/resume.git
    $ cd resume
    $ npm install -g yo generator-phaser gulp bower
    $ npm install
    $ bower install

## Development

Fire up

    $ gulp

and then check out the site at [localhost:9000](http://localhost:9000).

## Deployment

    $ gulp build
    $ gulp deploy

These steps are currently separate. One day they should be combined.

## License

See LICENSE for details.
