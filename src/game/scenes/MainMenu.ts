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
    background9: Phaser.GameObjects.Image;
    background10: Phaser.GameObjects.Image;
    background11: Phaser.GameObjects.Image;
    background12: Phaser.GameObjects.Image;
    planeTweenStarted: boolean = false;
    sateTweenStarted: boolean = false;
    cometStartTween: boolean = false;
    ufoStartTween: boolean = false;
    teslaStartTween: boolean = false;
    background12Shown: boolean = false;
    startCometTween: Phaser.Tweens.Tween;
    startSateTween: Phaser.Tweens.Tween;
    startPlaneTween: Phaser.Tweens.Tween;
    startUfoTween: Phaser.Tweens.Tween;
    startTeslaTween: Phaser.Tweens.Tween;
    heatHoldTime: number = 0;
    heatText: Phaser.GameObjects.Text;

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
        this.load.image('background9', 'assets/images/ufo.png');
        this.load.image('background10', 'assets/images/tesla.png');
        this.load.spritesheet('fire', 'assets/images/fire.png', {
            frameWidth: 48 / 3,
            frameHeight: 30 / 1,
        });
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const canvas = this.textures.createCanvas('gradient', width, 400);
        const canvas2 = this.textures.createCanvas('gradient2', width, height);

        if (canvas) {
            const ctx = canvas.getContext();
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'rgba(247, 221, 154, 0.1)');
            gradient.addColorStop(0.3, 'rgba(240, 213, 146, 1)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, 400);
            canvas.refresh();
        }
        if (canvas2) {
            const ctx = canvas2.getContext();
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'rgba(63, 60, 235, 0.99)');
            gradient.addColorStop(0.99, 'rgba(240, 213, 146, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            canvas2.refresh();
        }
        this.background11 = this.add.image(670, 250, 'gradient').setDepth(-1);
        this.background12 = this.add
            .image(670, height - 310, 'gradient2')
            .setDepth(-1)
            .setVisible(false);
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
                50,
                -6950,
                this.cameras.main.width,
                this.cameras.main.height * 10,
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

        this.background4 = this.add
            .sprite(-60, -400, 'background4')
            .setDepth(2);
        this.background4.play('plane');
        this.background5 = this.add.image(-50, -475, 'background5').setDepth(2);
        this.background6 = this.add
            .image(1250, -700, 'background6')
            .setDepth(1);
        this.background7 = this.add.image(65, -900, 'background7').setDepth(1);
        this.background8 = this.add
            .image(width * 0.9, -1250, 'background8')
            .setDepth(2);
        this.background9 = this.add.image(10, -1850, 'background9').setDepth(2);
        this.background10 = this.add
            .image(width * 0.9, -2450, 'background10')
            .setDepth(2);

        this.anims.create({
            key: 'onfire',
            frames: this.anims.generateFrameNumbers('fire', {
                start: 0,
                end: 2,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.startCometTween = this.add.tween({
            targets: this.background7,
            x: width - 950,
            y: height + 200,
            duration: 10000,
            paused: true,
        });

        this.startPlaneTween = this.add.tween({
            targets: this.background4,
            x: width - 100,
            y: height + 100,
            duration: 10000,
            paused: true,
            onUpdate: () => {
                this.background5.x = this.background4.x - 510;
                this.background5.y = this.background4.y + 80;
            },
        });

        this.planeTweenStarted = false;
        this.startSateTween = this.add.tween({
            targets: this.background8,
            x: -50,
            duration: 20000,
            paused: true,
        });
        this.startUfoTween = this.add.tween({
            targets: this.background9,
            x: width + 100,
            duration: 20000,
            paused: true,
        });
        this.startTeslaTween = this.add.tween({
            targets: this.background10,
            x: -50,
            angle: -45,
            duration: 20000,
            paused: true,
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

        this.add.text(585, 240, '1.00X').setScale(2.2).setDepth(11);

        EventBus.emit('current-scene-ready', this);
    }

    override update(time: number, delta: number) {
        if (this.isHeating) {
            const speed = 0.7;

            this.background1.y += speed;
            this.background2.y += speed;
            this.background3.y += speed;
            this.background4.y += speed;
            this.background5.y += speed;
            this.background6.y += speed;
            this.background7.y += speed;
            this.background8.y += speed;
            this.background9.y += speed;
            this.background10.y += speed;
            this.background11.y += speed;
            // this.background12.y += speed;

            this.heatHoldTime += delta;
            const seconds = (this.heatHoldTime / 1000).toFixed(1);
            console.log(seconds);

            const background3Speed = seconds <= '19.0' ? speed : 0.9;
            this.background3.y += background3Speed;

            if (!this.planeTweenStarted && seconds === '11.2') {
                this.startPlaneTween.play();
                this.planeTweenStarted = true;
            }
            if (!this.cometStartTween && seconds === '18.2') {
                this.startCometTween.play();
                this.cometStartTween = true;
            }
            if (!this.sateTweenStarted && seconds === '28.0') {
                this.startSateTween.play();
                this.sateTweenStarted = true;
            }
            if (!this.sateTweenStarted && seconds === '28.0') {
                this.startSateTween.play();
                this.sateTweenStarted = true;
            }
            if (!this.background12Shown && seconds === '32.0') {
                this.background12.setVisible(true);
                this.background12Shown = true;
            }

            if (!this.ufoStartTween && seconds === '43.0') {
                this.startUfoTween.play();
                this.ufoStartTween = true;
            }
            if (!this.teslaStartTween && seconds === '56.0') {
                this.startTeslaTween.play();
                this.teslaStartTween = true;
            }
        }
    }
}
