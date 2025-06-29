import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class MainMenu extends Scene {
    balloon: Phaser.GameObjects.Image;
    bg1: Phaser.GameObjects.Image;
    bg2: Phaser.GameObjects.Image;
    isHeating: boolean = false;
    background1: Phaser.GameObjects.Image;
    background2: Phaser.GameObjects.Image;
    background3: Phaser.GameObjects.TileSprite;
    background4: Phaser.GameObjects.Sprite;
    background5: Phaser.GameObjects.Image;
    background6: Phaser.GameObjects.Image;
    background7: Phaser.GameObjects.Image;
    background8: Phaser.GameObjects.Image;
    planeTweenStarted: boolean = false;
    startPlaneTween: Phaser.Tweens.Tween;
    

    constructor() {
        super('MainMenu');
    }
    preload() {
        this.load.image('balloon', 'assets/images/airballoon-red.png');
        this.load.image('background1', 'assets/images/location1.png');
        this.load.image('background2', 'assets/images/clouds.png');
        this.load.image('background3', 'assets/images/stars.png');
        this.load.spritesheet('background4', 'assets/images/plane.png', {
            frameWidth: 200 / 2,
            frameHeight: 60 / 1,
        });
        this.load.image('background5', 'assets/images/trail.png');
        this.load.image('background6', 'assets/images/moon.png');
        this.load.image('background7', 'assets/images/comet.png');
        this.load.image('background8', 'assets/images/satelite.png');
        this.load.spritesheet('fire', 'assets/images/fire.png', {
            frameWidth: 48 / 3,
            frameHeight: 30 / 1,
        });
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.add.image(width * 0.469, height * 0.51, 'balloon').setDepth(10);
        this.background1 = this.add
            .image(650, 1250, 'background1')
            .setScale(1.5)
            .setDepth(-1);
        this.background2 = this.add.image(650, 90, 'background2').setDepth(-1);

        // this.background3 = this.add
        //     .image(650, -700, 'background3')
        //     .setDepth(-1);
        this.background3 = this.add
            .tileSprite(
                150,
                -2200,
                this.cameras.main.width,
                this.cameras.main.height*3,
                'background3'
            )
            .setOrigin(0)
            .setScrollFactor(0)
            .setDepth(-1);

        this.anims.create({
            key: 'plane',
            frames: this.anims.generateFrameNumbers('background4', {
                start: 0,
                end: 1,
            }),
            frameRate: 10,
            repeat: -1,
            duration: 1000,
        });

        this.background4 = this.add.sprite(150, 400, 'background4').setDepth(2);
        this.background4.play('plane');
        this.background5 = this.add.image(-50, 475, 'background5').setDepth(2);
        this.background6 = this.add
            .image(1050, -700, 'background6')
            .setDepth(1);
        this.background7 = this.add.image(150, -900, 'background7').setDepth(1);
        this.background8 = this.add.image(150, -1300, 'background8').setDepth(2);

        this.anims.create({
            key: 'onfire',
            frames: this.anims.generateFrameNumbers('fire', {
                start: 0,
                end: 2,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.startPlaneTween = this.add.tween({
            targets: this.background4,
            x: width - 200,
            y: height + 100,
            duration: 5000,
            paused: true,
            onUpdate: () => {
                this.background5.x = this.background4.x - 510;
                this.background5.y = this.background4.y + 80;
            },
        });

        this.planeTweenStarted = false
        this.add.tween({
            targets: this.background8,
            x: -100,
            duration: 2000,
            repeat: -1
        })

        let fireOn: Phaser.GameObjects.Sprite | null = null;

        const heatButton = this.add
            .text(width * 0.53, height * 0.87, 'HEAT', {
                font: 'bold 25px Arial',
                color: '#ffffff',
                backgroundColor: '#539802',
                padding: { x: 10, y: 5 },
            })
            .setInteractive()
            .on('pointerdown', () => {
                if (!fireOn) {
                    fireOn = this.add.sprite(
                        width * 0.468,
                        height * 0.683,
                        'fire'
                    );
                    fireOn.play('onfire');
                }
                this.isHeating = true;
            })
            .on('pointerup', () => {
                if (fireOn) {
                    fireOn.destroy();
                    fireOn = null;
                }
                this.isHeating = false;
            })
            .on('pointerout', () => {
                if (fireOn) {
                    fireOn.destroy();
                    fireOn = null;
                }
                this.isHeating = false;
            });

        this.add
            .text(width * 0.6, height * 0.87, 'TAKE', {
                font: 'bold 25px Arial',
                color: '#ffffff',
                backgroundColor: '#C0822B',
                padding: { x: 10, y: 5 },
            })
            .setInteractive()
            .on('pointerdown', () => {});

        this.add.text(450, 230, '1.00X');

        EventBus.emit('current-scene-ready', this);
    }

    override update() {
        if (this.isHeating) {
            const speed = 1.7;

            this.background1.y += speed;
            this.background2.y += speed;
            this.background3.y += speed;
            this.background4.y += speed;
            this.background5.y += speed;
            this.background6.y += speed;
            this.background7.y += speed;
            this.background8.y += speed;

            
        }
        if (!this.planeTweenStarted && this.background2.y >= 90) {
            this.startPlaneTween.play();
            this.planeTweenStarted = true;
        }
    }
}
