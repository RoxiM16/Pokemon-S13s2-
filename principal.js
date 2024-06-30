var juego = new Phaser.Game(1200, 575, Phaser.AUTO, 'bloque_juego');
var fondoJuego;
var boton;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;

var estadoPrincipal = {
    preload: function() {
        juego.load.image('fondo', './img/bg.png');
        juego.load.image('pajaros', './img/pajaro.png', 43, 30);
        juego.load.spritesheet('personas', './img/ash.png', 68, 72);
    },

    create: function() {
        fondoJuego = juego.add.tileSprite(0, 0, 1200, 575, 'fondo');
        persona = juego.add.sprite(juego.width/2, juego.height/2, 'personas');
        persona.anchor.setTo(0.5);
        persona.animations.add('arriba', [12, 13, 14, 15], 4, true);
        persona.animations.add('izquierda', [4, 5, 6, 7], 4, true);
        persona.animations.add('abajo', [0, 1, 2, 3], 4, true);
        persona.animations.add('derecha', [8, 9, 10, 11], 10, true);

        teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        juego.physics.startSystem(Phaser.Physics.ARCADE);
        juego.physics.arcade.enable(persona);
        persona.body.collideWorldBounds = true;

        var nombreTexto = juego.add.text(juego.world.centerX, juego.height - 30, 'Roxana Carolina Mendoza Flores \n U20229915', {
            font: '23px',
            fill: '#81004F',
            align: 'center'
        });
        nombreTexto.anchor.setTo(0.5);
    },

    update: function() {
        if(teclaDerecha.isDown){
            persona.position.x += 2;
            persona.animations.play('derecha');
        } else if (teclaIzquierda.isDown){
            persona.position.x -= 2;
            persona.animations.play('izquierda');
        } else if(teclaArriba.isDown){
            persona.position.y -= 2;
            persona.animations.play('arriba');
        } else if(teclaAbajo.isDown){
            persona.position.y += 2;
            persona.animations.play('abajo');
        }
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
