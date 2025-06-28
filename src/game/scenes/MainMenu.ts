import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class MainMenu extends Scene {
    balloon: Phaser.GameObjects.Image;
    bg1: Phaser.GameObjects.Image;
    bg2: Phaser.GameObjects.Image;
    isHeating: boolean = false;
    background1: Phaser.GameObjects.Image;
    background2: Phaser.GameObjects.Image;
    background3: Phaser.GameObjects.Image;

    constructor() {
        super('MainMenu');
    }
    preload() {
        this.load.image('balloon', 'assets/images/airballoon-red.png');
        this.load.image('background1', 'assets/images/location1.png');
        this.load.image('background2', 'assets/images/clouds.png');
        this.load.image('background3', 'assets/images/stars.png');
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
        this.background2 = this.add
            .image(650, 90, 'background2')
            .setDepth(-1);
        this.background3 = this.add
            .image(650, -400, 'background3')
            .setDepth(-1);
        this.anims.create({
            key: 'onfire',
            frames: this.anims.generateFrameNumbers('fire', {
                start: 0,
                end: 2,
            }),
            frameRate: 10,
            repeat: -1,
        });

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
            const speed = 1.2;

            this.background1.y += speed;
            this.background2.y += speed;
            this.background3.y += speed;
        }
    }
}
