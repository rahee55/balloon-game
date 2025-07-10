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
    background3Speed: boolean = false;
    startCometTween: Phaser.Tweens.Tween;
    startSateTween: Phaser.Tweens.Tween;
    startPlaneTween: Phaser.Tweens.Tween;
    startUfoTween: Phaser.Tweens.Tween;
    startTeslaTween: Phaser.Tweens.Tween;
    heatHoldTime: number = 0;
    heatText: Phaser.GameObjects.Text;
    background3SpeedMultiplier: number = 0;
    canvas: Phaser.Textures.CanvasTexture | null = null;
    canvas2: Phaser.Textures.CanvasTexture | null = null;
    stopTriggered: boolean = false;
    newStopTime: number = 0;
    lastUpdateTime: number = 0;
    multiplier: number = 1.0;
    text: Phaser.GameObjects.Text;

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

        switch (true) {
            case width <= 320:
                this.canvas = this.textures.createCanvas(
                    'gradient',
                    width,
                    450
                );
                this.canvas2 = this.textures.createCanvas(
                    'gradient2',
                    width,
                    height
                );

                if (this.canvas) {
                    const ctx = this.canvas.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(247, 221, 154, 0)');
                    gradient.addColorStop(0.295, 'rgba(240, 213, 146, 0.95)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, 400);
                    this.canvas.refresh();
                }
                if (this.canvas2) {
                    const ctx = this.canvas2.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(11, 8, 168, 0.99)');
                    gradient.addColorStop(0.99, 'rgba(11, 29, 192, 0.81)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    this.canvas2.refresh();
                }
                this.background11 = this.add
                    .image(width /2, 250, 'gradient')
                    .setDepth(-1);
                this.background12 = this.add
                    .image(width /2, height /2, 'gradient2')
                    .setDepth(-1)
                    .setVisible(false)
                    .setAlpha(0);
                break;
            case width <= 393:
                this.canvas = this.textures.createCanvas(
                    'gradient',
                    width,
                    450
                );
                this.canvas2 = this.textures.createCanvas(
                    'gradient2',
                    width,
                    height
                );

                if (this.canvas) {
                    const ctx = this.canvas.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(247, 221, 154, 0)');
                    gradient.addColorStop(0.295, 'rgba(240, 213, 146, 0.95)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, 400);
                    this.canvas.refresh();
                }
                if (this.canvas2) {
                    const ctx = this.canvas2.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(11, 8, 168, 0.99)');
                    gradient.addColorStop(0.99, 'rgba(11, 29, 192, 0.81)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height + 100);
                    this.canvas2.refresh();
                }
                switch (true) {
                    case width == 360:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                    case width == 375:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                    case width == 384:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                    case width == 390:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                    default:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                }
                switch (true) {
                    case width == 360:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    case width == 375:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    case width == 384:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    case width == 390:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;

                    default:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                }
                break;
            case width <= 430:
                this.canvas = this.textures.createCanvas(
                    'gradient',
                    width,
                    450
                );
                this.canvas2 = this.textures.createCanvas(
                    'gradient2',
                    width,
                    height
                );

                if (this.canvas) {
                    const ctx = this.canvas.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(247, 221, 154, 0)');
                    gradient.addColorStop(0.295, 'rgba(240, 213, 146, 0.95)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, 400);
                    this.canvas.refresh();
                }
                if (this.canvas2) {
                    const ctx = this.canvas2.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(11, 8, 168, 0.99)');
                    gradient.addColorStop(0.99, 'rgba(11, 29, 192, 0.81)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    this.canvas2.refresh();
                }
                switch (true) {
                    case width == 402:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                    case width == 412:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                    case width == 414:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;

                    default:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                }
                switch (true) {
                    case width == 402:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    case width == 412:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    case width == 414:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    case width == 428:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    default:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                }
                break;
            case width <= 480:
                this.canvas = this.textures.createCanvas(
                    'gradient',
                    width,
                    450
                );
                this.canvas2 = this.textures.createCanvas(
                    'gradient2',
                    width,
                    height
                );

                if (this.canvas) {
                    const ctx = this.canvas.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(247, 221, 154, 0)');
                    gradient.addColorStop(0.295, 'rgba(240, 213, 146, 0.95)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, 400);
                    this.canvas.refresh();
                }
                if (this.canvas2) {
                    const ctx = this.canvas2.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(11, 8, 168, 0.99)');
                    gradient.addColorStop(0.99, 'rgba(11, 29, 192, 0.81)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    this.canvas2.refresh();
                }
                switch (true) {
                    case width <= 440:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                    case width <= 448:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;

                    default:
                        this.background11 = this.add
                            .image(width /2, 310, 'gradient')
                            .setDepth(-1);
                        break;
                }
                switch (true) {
                    case width == 440:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    case width == 448:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;

                    default:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                }
                break;
            case width <= 834:
                this.canvas = this.textures.createCanvas(
                    'gradient',
                    width,
                    400
                );
                this.canvas2 = this.textures.createCanvas(
                    'gradient2',
                    width,
                    height
                );

                if (this.canvas) {
                    const ctx = this.canvas.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(247, 221, 154, 0)');
                    gradient.addColorStop(0.3, 'rgba(240, 213, 146, 1)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, 400);
                    this.canvas.refresh();
                }
                if (this.canvas2) {
                    const ctx = this.canvas2.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(11, 8, 168, 0.99)');
                    gradient.addColorStop(0.99, 'rgba(11, 29, 192, 0.81)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    this.canvas2.refresh();
                }
                switch (true) {
                    case width <= 768:
                        this.background11 = this.add
                            .image(width /2, 480, 'gradient')
                            .setDepth(-1);
                        break;
                    case width <= 810:
                        this.background11 = this.add
                            .image(width /2, 580, 'gradient')
                            .setDepth(-1);
                        break;

                    default:
                        this.background11 = this.add
                            .image(width /2, 580, 'gradient')
                            .setDepth(-1);
                        break;
                }
                switch (true) {
                    case width <= 768:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                    case width <= 810:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;

                    default:
                        this.background12 = this.add
                            .image(width /2, height /2, 'gradient2')
                            .setDepth(-1)
                            .setVisible(false)
                            .setAlpha(0);
                        break;
                }
                break;
            case width <= 1024:
                this.canvas = this.textures.createCanvas(
                    'gradient',
                    width,
                    400
                );
                this.canvas2 = this.textures.createCanvas(
                    'gradient2',
                    width,
                    height
                );

                if (this.canvas) {
                    const ctx = this.canvas.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(247, 221, 154, 0)');
                    gradient.addColorStop(0.3, 'rgba(240, 213, 146, 1)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, 400);
                    this.canvas.refresh();
                }
                if (this.canvas2) {
                    const ctx = this.canvas2.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(11, 8, 168, 0.99)');
                    gradient.addColorStop(0.99, 'rgba(11, 29, 192, 0.81)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    this.canvas2.refresh();
                }
                this.background11 = this.add
                    .image(width /2, 788, 'gradient')
                    .setDepth(-1);
                this.background12 = this.add
                    .image(width /2, height /2, 'gradient2')
                    .setDepth(-1)
                    .setVisible(false)
                    .setAlpha(0);
                break;
            case width == 1440:
                this.canvas = this.textures.createCanvas(
                    'gradient',
                    width,
                    400
                );
                this.canvas2 = this.textures.createCanvas(
                    'gradient2',
                    width,
                    height
                );

                if (this.canvas) {
                    const ctx = this.canvas.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(247, 221, 154, 0)');
                    gradient.addColorStop(0.3, 'rgba(240, 213, 146, 1)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, 400);
                    this.canvas.refresh();
                }
                if (this.canvas2) {
                    const ctx = this.canvas2.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(11, 8, 168, 0.99)');
                    gradient.addColorStop(0.99, 'rgba(11, 29, 192, 0.81)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    this.canvas2.refresh();
                }
                this.background11 = this.add
                    .image(width /2, 348, 'gradient')
                    .setDepth(-1);
                this.background12 = this.add
                    .image(width /2, height / 2, 'gradient2')
                    .setDepth(-1)
                    .setVisible(false)
                    .setAlpha(0);
                break;

            default:
                const canvas = this.textures.createCanvas(
                    'gradient',
                    width,
                    400
                );
                const canvas2 = this.textures.createCanvas(
                    'gradient2',
                    width,
                    height
                );

                if (canvas) {
                    const ctx = canvas.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(247, 221, 154, 0)');
                    gradient.addColorStop(0.3, 'rgba(240, 213, 146, 1)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, 400);
                    canvas.refresh();
                }
                if (canvas2) {
                    const ctx = canvas2.getContext();
                    const gradient = ctx.createLinearGradient(0, 0, 0, height);
                    gradient.addColorStop(0, 'rgba(11, 8, 168, 0.99)');
                    gradient.addColorStop(0.99, 'rgba(11, 29, 192, 0.81)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, width, height);
                    canvas2.refresh();
                }
                this.background11 = this.add
                    .image(width / 2, 250, 'gradient')
                    .setDepth(-1);
                this.background12 = this.add
                    .image(width /2 , height /2, 'gradient2')
                    .setDepth(-1)
                    .setVisible(false)
                    .setAlpha(0);
                break;
        }
        switch (true) {
            case width <= 320:
                this.add
                    .image(width * 0.489, height * 0.51, 'balloon')
                    .setDepth(10);
                this.background1 = this.add
                    .image(160, 450, 'background1')
                    .setScale(0.34)
                    .setDepth(-1);
                this.background2 = this.add
                    .image(150, 90, 'background2')
                    .setScale(0.25)
                    .setDepth(-1);
                this.background3 = this.add
                    .tileSprite(
                        10,
                        -9950,
                        this.cameras.main.width,
                        this.cameras.main.height * 20,
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
                    duration: 4000,
                });

                this.background4 = this.add
                    .sprite(-50, -300, 'background4')
                    .setDepth(2);
                this.background4.play('plane');
                this.background5 = this.add
                    .image(-50, -475, 'background5')
                    .setDepth(2);
                this.background6 = this.add
                    .image(220, -900, 'background6')
                    .setDepth(1);
                this.background7 = this.add
                    .image(5, -1350, 'background7')
                    .setDepth(1)
                    .setScale(0.8);
                this.background8 = this.add
                    .image(width * 0.9, -1450, 'background8')
                    .setDepth(2);
                this.background9 = this.add
                    .image(10, -2050, 'background9')
                    .setDepth(2);
                this.background10 = this.add
                    .image(width * 0.9, -2650, 'background10')
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
                    x: width - 150,
                    y: height + 100,
                    duration: 5000,
                    paused: true,
                });

                this.startPlaneTween = this.add.tween({
                    targets: this.background4,
                    x: width - 20,
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
                    angle: 150,
                    duration: 20000,
                    paused: true,
                });
                this.startUfoTween = this.add.tween({
                    targets: this.background9,
                    x: width + 100,
                    angle: -50,
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
                break;
            case width <= 393:
                this.add
                    .image(width * 0.499, height * 0.51, 'balloon')
                    .setDepth(10);
                this.background1 = this.add
                    .image(182, 630, 'background1')
                    .setScale(0.44)
                    .setDepth(-1);
                this.background2 = this.add
                    .image(190, 90, 'background2')
                    .setScale(0.35)
                    .setDepth(-1);
                switch (true) {
                    case width == 360:
                        this.background3 = this.add
                            .tileSprite(
                                10,
                                -13050,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);
                        break;
                    case width == 375:
                        this.background3 = this.add
                            .tileSprite(
                                10,
                                -13850,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);
                        break;

                    default:
                        this.background3 = this.add
                            .tileSprite(
                                10,
                                -13850,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);
                        break;
                }

                this.anims.create({
                    key: 'plane',
                    frames: this.anims.generateFrameNumbers('background4', {
                        start: 0,
                        end: 1,
                    }),
                    frameRate: 10,
                    repeat: -1,
                    duration: 4000,
                });

                this.background4 = this.add
                    .sprite(-50, -300, 'background4')
                    .setDepth(2);
                this.background4.play('plane');
                this.background5 = this.add
                    .image(-50, -475, 'background5')
                    .setDepth(2);
                this.background6 = this.add
                    .image(280, -900, 'background6')
                    .setDepth(1);
                this.background7 = this.add
                    .image(5, -1350, 'background7')
                    .setDepth(1)
                    .setScale(0.8);
                this.background8 = this.add
                    .image(width * 0.9, -1450, 'background8')
                    .setDepth(2);
                this.background9 = this.add
                    .image(10, -2050, 'background9')
                    .setDepth(2);
                this.background10 = this.add
                    .image(width * 0.9, -2650, 'background10')
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
                    x: width - 150,
                    y: height + 100,
                    duration: 6000,
                    paused: true,
                });

                this.startPlaneTween = this.add.tween({
                    targets: this.background4,
                    x: width - 20,
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
                    angle: 150,
                    duration: 20000,
                    paused: true,
                });
                this.startUfoTween = this.add.tween({
                    targets: this.background9,
                    x: width + 100,
                    angle: -50,
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
                break;
            case width <= 430:
                this.add
                    .image(width * 0.509, height * 0.51, 'balloon')
                    .setDepth(10);
                this.background1 = this.add
                    .image(219, 650, 'background1')
                    .setScale(0.48)
                    .setDepth(-1);
                this.background2 = this.add
                    .image(210, 90, 'background2')
                    .setScale(0.35)
                    .setDepth(-1);
                switch (true) {
                    case width == 402:
                        this.background3 = this.add
                            .tileSprite(
                                10,
                                -15000,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);
                        break;

                    default:
                        this.background3 = this.add
                            .tileSprite(
                                10,
                                -15890,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);
                        break;
                }

                this.anims.create({
                    key: 'plane',
                    frames: this.anims.generateFrameNumbers('background4', {
                        start: 0,
                        end: 1,
                    }),
                    frameRate: 10,
                    repeat: -1,
                    duration: 4000,
                });

                this.background4 = this.add
                    .sprite(-50, -300, 'background4')
                    .setDepth(2);
                this.background4.play('plane');
                this.background5 = this.add
                    .image(-50, -475, 'background5')
                    .setDepth(2);
                this.background6 = this.add
                    .image(310, -900, 'background6')
                    .setDepth(1);
                this.background7 = this.add
                    .image(5, -1350, 'background7')
                    .setDepth(1)
                    .setScale(0.8);
                this.background8 = this.add
                    .image(width * 0.9, -1450, 'background8')
                    .setDepth(2);
                this.background9 = this.add
                    .image(10, -2050, 'background9')
                    .setDepth(2);
                this.background10 = this.add
                    .image(width * 0.9, -2650, 'background10')
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
                    x: width - 150,
                    y: height + 100,
                    duration: 10000,
                    paused: true,
                });

                this.startPlaneTween = this.add.tween({
                    targets: this.background4,
                    x: width - 20,
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
                    angle: 150,
                    duration: 20000,
                    paused: true,
                });
                this.startUfoTween = this.add.tween({
                    targets: this.background9,
                    x: width + 100,
                    angle: -50,
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
                break;
            case width <= 480:
                this.add
                    .image(width * 0.509, height * 0.51, 'balloon')
                    .setDepth(10);
                this.background1 = this.add
                    .image(239, 700, 'background1')
                    .setScale(0.51)
                    .setDepth(-1);
                this.background2 = this.add
                    .image(240, 90, 'background2')
                    .setScale(0.35)
                    .setDepth(-1);
                switch (true) {
                    case width == 448:
                        this.background3 = this.add
                            .tileSprite(
                                10,
                                -17740,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);

                        break;

                    default:
                        this.background3 = this.add
                            .tileSprite(
                                10,
                                -16540,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);
                        break;
                }

                this.anims.create({
                    key: 'plane',
                    frames: this.anims.generateFrameNumbers('background4', {
                        start: 0,
                        end: 1,
                    }),
                    frameRate: 10,
                    repeat: -1,
                    duration: 4000,
                });

                this.background4 = this.add
                    .sprite(-50, -300, 'background4')
                    .setDepth(2);
                this.background4.play('plane');
                this.background5 = this.add
                    .image(-50, -475, 'background5')
                    .setDepth(2);
                this.background6 = this.add
                    .image(370, -900, 'background6')
                    .setDepth(1);
                this.background7 = this.add
                    .image(5, -1350, 'background7')
                    .setDepth(1)
                    .setScale(0.8);
                this.background8 = this.add
                    .image(width * 0.9, -1450, 'background8')
                    .setDepth(2);
                this.background9 = this.add
                    .image(10, -2050, 'background9')
                    .setDepth(2);
                this.background10 = this.add
                    .image(width * 0.9, -2650, 'background10')
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
                    x: width - 150,
                    y: height + 100,
                    duration: 10000,
                    paused: true,
                });

                this.startPlaneTween = this.add.tween({
                    targets: this.background4,
                    x: width - 20,
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
                    angle: 150,
                    duration: 20000,
                    paused: true,
                });
                this.startUfoTween = this.add.tween({
                    targets: this.background9,
                    x: width + 100,
                    angle: -50,
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
                break;
            case width <= 834:
                this.add
                    .image(width * 0.519, height * 0.61, 'balloon')
                    .setScale(1.3)
                    .setDepth(10);
                switch (true) {
                    case width == 768:
                        this.background1 = this.add
                            .image(430, 1250, 'background1')
                            .setScale(0.9)
                            .setDepth(-1);
                        break;

                    default:
                        this.background1 = this.add
                            .image(430, 1350, 'background1')
                            .setScale(0.9)
                            .setDepth(-1);
                        break;
                }
                switch (true) {
                    case width == 768:
                        this.background2 = this.add
                            .image(400, 300, 'background2')
                            .setScale(0.8)
                            .setDepth(-1);
                        break;

                    default:
                        this.background2 = this.add
                            .image(400, 490, 'background2')
                            .setScale(0.8)
                            .setDepth(-1);
                        break;
                }
                switch (true) {
                    case width <= 810:
                        this.background3 = this.add
                            .tileSprite(
                                50,
                                -20400,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);
                        break;

                    default:
                        this.background3 = this.add
                            .tileSprite(
                                50,
                                -21100,
                                this.cameras.main.width,
                                this.cameras.main.height * 20,
                                'background3'
                            )
                            .setOrigin(0)
                            .setScrollFactor(0)
                            .setDepth(-1);
                        break;
                }

                this.anims.create({
                    key: 'plane',
                    frames: this.anims.generateFrameNumbers('background4', {
                        start: 0,
                        end: 1,
                    }),
                    frameRate: 10,
                    repeat: -1,
                    duration: 1001,
                });

                this.background4 = this.add
                    .sprite(-60, -400, 'background4')
                    .setScale(1.2)
                    .setDepth(2);
                this.background4.play('plane');
                this.background5 = this.add
                    .image(-50, -475, 'background5')
                    .setDepth(2);
                switch (true) {
                    case width <= 768:
                        this.background6 = this.add
                            .image(650, -900, 'background6')
                            .setScale(1.2)
                            .setDepth(1);
                        break;
                    default:
                        this.background6 = this.add
                            .image(700, -900, 'background6')
                            .setScale(1.2)
                            .setDepth(1);
                        break;
                }
                this.background7 = this.add
                    .image(65, -1350, 'background7')
                    .setDepth(1);
                this.background8 = this.add
                    .image(width * 0.9, -1650, 'background8')
                    .setDepth(2);
                this.background9 = this.add
                    .image(10, -2250, 'background9')
                    .setDepth(2);
                this.background10 = this.add
                    .image(width * 0.9, -2850, 'background10')
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
                    x: width - 350,
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
                    angle: 150,
                    duration: 20000,
                    paused: true,
                });
                this.startUfoTween = this.add.tween({
                    targets: this.background9,
                    x: width + 100,
                    angle: -50,
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
                break;
            case width <= 1024:
                this.add
                    .image(width * 0.519, height * 0.71, 'balloon')
                    .setScale(1.3)
                    .setDepth(10);
                this.background1 = this.add
                    .image(550, 1750, 'background1')
                    .setScale(1.2)
                    .setDepth(-1);
                this.background2 = this.add
                    .image(520, 450, 'background2')
                    .setDepth(-1);
                this.background3 = this.add
                    .tileSprite(
                        50,
                        -27250,
                        this.cameras.main.width,
                        this.cameras.main.height * 20,
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
                    .sprite(-80, -400, 'background4')
                    .setScale(1.5)
                    .setDepth(2);
                this.background4.play('plane');
                this.background5 = this.add
                    .image(-50, -475, 'background5')
                    .setDepth(2);
                this.background6 = this.add
                    .image(850, -900, 'background6')
                    .setDepth(1)
                    .setScale(1.5);
                this.background7 = this.add
                    .image(65, -1350, 'background7')
                    .setScale(1.3)
                    .setDepth(1);
                this.background8 = this.add
                    .image(width * 0.9, -1450, 'background8')
                    .setDepth(2)
                    .setScale(1.5);
                this.background9 = this.add
                    .image(10, -2050, 'background9')
                    .setDepth(2)
                    .setScale(1.5);
                this.background10 = this.add
                    .image(width * 0.9, -2650, 'background10')
                    .setDepth(2)
                    .setScale(1.5);

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
                    x: width - 150,
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
                    angle: 150,
                    duration: 20000,
                    paused: true,
                });
                this.startUfoTween = this.add.tween({
                    targets: this.background9,
                    x: width + 100,
                    angle: -50,
                    duration: 20000,
                    paused: true,
                });
                this.startTeslaTween = this.add.tween({
                    targets: this.background10,
                    x: -90,
                    angle: -45,
                    duration: 20000,
                    paused: true,
                });
                break;
            case width == 1440:
                this.add
                    .image(width * 0.519, height * 0.62, 'balloon')
                    .setDepth(10);
                this.background1 = this.add
                    .image(720, 1500, 'background1')
                    .setScale(1.5)
                    .setDepth(-1);
                this.background2 = this.add
                    .image(690, 90, 'background2')
                    .setScale(1.2)
                    .setDepth(-1);
                this.background3 = this.add
                    .tileSprite(
                        50,
                        -18650,
                        this.cameras.main.width,
                        this.cameras.main.height * 20,
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
                this.background5 = this.add
                    .image(-50, -475, 'background5')
                    .setDepth(2);
                this.background6 = this.add
                    .image(1250, -900, 'background6')
                    .setScale(1.5)
                    .setDepth(1);
                this.background7 = this.add
                    .image(65, -1350, 'background7')
                    .setDepth(1);
                this.background8 = this.add
                    .image(width * 0.9, -1450, 'background8')
                    .setDepth(2)
                    .setScale(1.5);
                this.background9 = this.add
                    .image(10, -2050, 'background9')
                    .setDepth(2)
                    .setScale(1.5);
                this.background10 = this.add
                    .image(width * 0.9, -2650, 'background10')
                    .setDepth(2)
                    .setScale(1.5);

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
                    angle: 150,
                    duration: 16000,
                    paused: true,
                });
                this.startUfoTween = this.add.tween({
                    targets: this.background9,
                    x: width + 100,
                    angle: -50,
                    duration: 16000,
                    paused: true,
                });
                this.startTeslaTween = this.add.tween({
                    targets: this.background10,
                    x: -50,
                    angle: -45,
                    duration: 20000,
                    paused: true,
                });
                break;

            default:
                this.add
                    .image(width * 0.469, height * 0.51, 'balloon')
                    .setDepth(10);
                this.background1 = this.add
                    .image(650, 1250, 'background1')
                    .setScale(1.5)
                    .setDepth(-1);
                this.background2 = this.add
                    .image(650, 90, 'background2')
                    .setDepth(-1);
                this.background3 = this.add
                    .tileSprite(
                        50,
                        -12650,
                        this.cameras.main.width,
                        this.cameras.main.height * 20,
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
                this.background5 = this.add
                    .image(-50, -475, 'background5')
                    .setDepth(2);
                this.background6 = this.add
                    .image(1250, -900, 'background6')
                    .setDepth(1);
                this.background7 = this.add
                    .image(65, -1350, 'background7')
                    .setDepth(1);
                this.background8 = this.add
                    .image(width * 0.9, -1450, 'background8')
                    .setDepth(2);
                this.background9 = this.add
                    .image(10, -2050, 'background9')
                    .setDepth(2);
                this.background10 = this.add
                    .image(width * 0.9, -2650, 'background10')
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
                    angle: 150,
                    duration: 20000,
                    paused: true,
                });
                this.startUfoTween = this.add.tween({
                    targets: this.background9,
                    x: width + 100,
                    angle: -50,
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
                break;
        }
        let fireOn: Phaser.GameObjects.Sprite | null = null;

        switch (true) {
            case width <= 320:
                this.add
                    .text(width * 0.13, height * 0.87, 'HEAT', {
                        font: 'bold 25px Arial',
                        color: '#ffffff',
                        backgroundColor: '#539802',
                        padding: { x: 10, y: 5 },
                    })
                    .setInteractive()
                    .setDepth(10)
                    .on('pointerdown', () => {
                        if (!fireOn) {
                            fireOn = this.add
                                .sprite(width * 0.488, height * 0.745, 'fire')
                                .setDepth(9);
                            if (fireOn) {
                                if (fireOn) {
                                    fireOn.play('onfire');
                                }
                            }
                        }
                        this.isHeating = true;
                        this.newStopTime = Phaser.Math.Between(300, 9000);
                        this.stopTriggered = false;
                        this.time.delayedCall(this.newStopTime, () => {
                            this.stopTriggered = true;
                            this.tweens.add({
                                targets: this.balloon,
                                y: this.cameras.main.height + 1000,
                                duration: 600,
                            });
                        });
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
                    .setDepth(10)
                    .setInteractive()
                    .on('pointerdown', () => {
                        this.scene.restart();
                        this.heatHoldTime = 0;
                        this.isHeating = false;
                        this.planeTweenStarted = false;
                        this.cometStartTween = false;
                        this.sateTweenStarted = false;
                        this.ufoStartTween = false;
                        this.teslaStartTween = false;
                        this.background12Shown = false;
                        this.background3Speed = false;
                        this.background3SpeedMultiplier = 0;
                        this.multiplier = 1;
                    });

                break;
            case width <= 393:
                this.add
                    .text(width * 0.13, height * 0.87, 'HEAT', {
                        font: 'bold 25px Arial',
                        color: '#ffffff',
                        backgroundColor: '#539802',
                        padding: { x: 10, y: 5 },
                    })
                    .setInteractive()
                    .on('pointerdown', () => {
                        if (!fireOn) {
                            switch (true) {
                                case width == 360:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.498,
                                            height * 0.687,
                                            'fire'
                                        )
                                        .setDepth(9);

                                    break;
                                case width == 375:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.498,
                                            height * 0.676,
                                            'fire'
                                        )
                                        .setDepth(9);

                                    break;

                                default:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.498,
                                            height * 0.667,
                                            'fire'
                                        )
                                        .setDepth(9);
                                    break;
                            }
                            fireOn.play('onfire');
                        }
                        this.isHeating = true;
                        this.newStopTime = Phaser.Math.Between(300, 9000);
                        this.stopTriggered = false;
                        this.time.delayedCall(this.newStopTime, () => {
                            this.stopTriggered = true;
                            this.tweens.add({
                                targets: this.balloon,
                                y: this.cameras.main.height + 1000,
                                duration: 600,
                            });
                        });
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
                    .setDepth(10)
                    .setInteractive()
                    .on('pointerdown', () => {
                        this.scene.restart();
                        this.heatHoldTime = 0;
                        this.isHeating = false;
                        this.planeTweenStarted = false;
                        this.cometStartTween = false;
                        this.sateTweenStarted = false;
                        this.ufoStartTween = false;
                        this.teslaStartTween = false;
                        this.background12Shown = false;
                        this.background3Speed = false;
                        this.background3SpeedMultiplier = 0;
                        this.multiplier = 1;
                    });

                break;
            case width <= 430:
                this.add
                    .text(width * 0.13, height * 0.87, 'HEAT', {
                        font: 'bold 25px Arial',
                        color: '#ffffff',
                        backgroundColor: '#539802',
                        padding: { x: 10, y: 5 },
                    })
                    .setInteractive()
                    .on('pointerdown', () => {
                        if (!fireOn) {
                            switch (true) {
                                case width == 402:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.508,
                                            height * 0.66,
                                            'fire'
                                        )
                                        .setDepth(9);
                                    break;
                                case width == 414:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.508,
                                            height * 0.6555,
                                            'fire'
                                        )
                                        .setDepth(9);
                                    break;

                                default:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.508,
                                            height * 0.6495,
                                            'fire'
                                        )
                                        .setDepth(9);
                                    break;
                            }
                            fireOn.play('onfire');
                        }
                        this.isHeating = true;
                        this.newStopTime = Phaser.Math.Between(300, 9000);
                        this.stopTriggered = false;
                        this.time.delayedCall(this.newStopTime, () => {
                            this.stopTriggered = true;
                            this.tweens.add({
                                targets: this.balloon,
                                y: this.cameras.main.height + 1000,
                                duration: 600,
                            });
                        });
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
                    .on('pointerdown', () => {
                        this.scene.restart();
                        this.heatHoldTime = 0;
                        this.isHeating = false;
                        this.planeTweenStarted = false;
                        this.cometStartTween = false;
                        this.sateTweenStarted = false;
                        this.ufoStartTween = false;
                        this.teslaStartTween = false;
                        this.background12Shown = false;
                        this.background3Speed = false;
                        this.background3SpeedMultiplier = 0;
                        this.multiplier = 1;
                    });

                break;
            case width <= 480:
                this.add
                    .text(width * 0.13, height * 0.87, 'HEAT', {
                        font: 'bold 25px Arial',
                        color: '#ffffff',
                        backgroundColor: '#539802',
                        padding: { x: 10, y: 5 },
                    })
                    .setInteractive()
                    .on('pointerdown', () => {
                        if (!fireOn) {
                            switch (true) {
                                case width <= 440:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.508,
                                            height * 0.635,
                                            'fire'
                                        )
                                        .setDepth(9);
                                    break;
                                case width <= 448:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.508,
                                            height * 0.635,
                                            'fire'
                                        )
                                        .setDepth(9);
                                    break;

                                default:
                                    fireOn = this.add
                                        .sprite(
                                            width * 0.508,
                                            height * 0.645,
                                            'fire'
                                        )
                                        .setDepth(9);
                                    break;
                            }
                            fireOn.play('onfire');
                            this.newStopTime = Phaser.Math.Between(300, 9000);
                        this.stopTriggered = false;
                        this.time.delayedCall(this.newStopTime, () => {
                            this.stopTriggered = true;
                            this.tweens.add({
                                targets: this.balloon,
                                y: this.cameras.main.height + 1000,
                                duration: 600,
                            });
                        });
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
                    .setDepth(10)
                    .on('pointerdown', () => {
                        this.scene.restart();
                        this.heatHoldTime = 0;
                        this.isHeating = false;
                        this.planeTweenStarted = false;
                        this.cometStartTween = false;
                        this.sateTweenStarted = false;
                        this.ufoStartTween = false;
                        this.teslaStartTween = false;
                        this.background12Shown = false;
                        this.background3Speed = false;
                        this.background3SpeedMultiplier = 0;
                        this.multiplier = 1;
                    });

                break;
            case width <= 834 && height <= 1194:
                this.add
                    .text(width * 0.23, height * 0.87, 'HEAT', {
                        font: 'bold 25px Arial',
                        color: '#ffffff',
                        backgroundColor: '#539802',
                        padding: { x: 10, y: 5 },
                    })
                    .setDepth(1000)
                    .setInteractive()
                    .on('pointerdown', () => {
                        if (!fireOn) {
                            switch (true) {
                                case width <= 768:
                                    fireOn = this.add.sprite(
                                        width * 0.518,
                                        height * 0.756,
                                        'fire'
                                    );
                                    break;  

                                default:
                                    fireOn = this.add.sprite(
                                        width * 0.518,
                                        height * 0.736,
                                        'fire'
                                    );
                                    break;
                            }
                            fireOn.play('onfire');
                        }
                        this.isHeating = true;
                        this.newStopTime = Phaser.Math.Between(300, 9000);
                        this.stopTriggered = false;
                        this.time.delayedCall(this.newStopTime, () => {
                            this.stopTriggered = true;
                            this.tweens.add({
                                targets: this.balloon,
                                y: this.cameras.main.height + 1000,
                                duration: 600,
                            });
                        });
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
                    .on('pointerdown', () => {
                        this.scene.restart();
                        this.heatHoldTime = 0;
                        this.isHeating = false;
                        this.planeTweenStarted = false;
                        this.cometStartTween = false;
                        this.sateTweenStarted = false;
                        this.ufoStartTween = false;
                        this.teslaStartTween = false;
                        this.background12Shown = false;
                        this.background3Speed = false;
                        this.background3SpeedMultiplier = 0;
                        this.multiplier = 1;
                    });
                break;
            case width <= 1024:
                this.add
                    .text(width * 0.33, height * 0.92, 'HEAT', {
                        font: 'bold 25px Arial',
                        color: '#ffffff',
                        backgroundColor: '#539802',
                        padding: { x: 10, y: 5 },
                    })
                    .setInteractive()
                    .on('pointerdown', () => {
                        if (!fireOn) {
                            fireOn = this.add
                                .sprite(width * 0.5188, height * 0.818, 'fire')
                                .setDepth(11);
                            fireOn.play('onfire');
                        }
                        this.isHeating = true;
                        this.newStopTime = Phaser.Math.Between(300, 9000);
                        this.stopTriggered = false;
                        this.time.delayedCall(this.newStopTime, () => {
                            this.stopTriggered = true;
                            this.tweens.add({
                                targets: this.balloon,
                                y: this.cameras.main.height + 1000,
                                duration: 600,
                            });
                        });
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
                    .text(width * 0.6, height * 0.92, 'TAKE', {
                        font: 'bold 25px Arial',
                        color: '#ffffff',
                        backgroundColor: '#C0822B',
                        padding: { x: 10, y: 5 },
                    })
                    .setDepth(10)
                    .setInteractive()
                    .on('pointerdown', () => {
                        this.scene.restart();
                        this.heatHoldTime = 0;
                        this.isHeating = false;
                        this.planeTweenStarted = false;
                        this.cometStartTween = false;
                        this.sateTweenStarted = false;
                        this.ufoStartTween = false;
                        this.teslaStartTween = false;
                        this.background12Shown = false;
                        this.background3Speed = false;
                        this.background3SpeedMultiplier = 0;
                        this.multiplier = 1;
                    });
                break;
            case width == 1440:
                this.add
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
                                width * 0.519,
                                height * 0.736,
                                'fire'
                            );
                            fireOn.play('onfire');
                        }
                        this.isHeating = true;
                        this.newStopTime = Phaser.Math.Between(300, 9000);
                        this.stopTriggered = false;
                        this.time.delayedCall(this.newStopTime, () => {
                            this.stopTriggered = true;
                            this.tweens.add({
                                targets: this.balloon,
                                y: this.cameras.main.height + 1000,
                                duration: 600,
                            });
                        });
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
                    .on('pointerdown', () => {
                        this.scene.restart();
                        this.heatHoldTime = 0;
                        this.isHeating = false;
                        this.planeTweenStarted = false;
                        this.cometStartTween = false;
                        this.sateTweenStarted = false;
                        this.ufoStartTween = false;
                        this.teslaStartTween = false;
                        this.background12Shown = false;
                        this.background3Speed = false;
                        this.background3SpeedMultiplier = 0;
                        this.multiplier = 1;
                    });
                break;

            default:
                this.add
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
                                width * 0.4688,
                                height * 0.683,
                                'fire'
                            );
                            fireOn.play('onfire');
                        }
                        this.isHeating = true;
                        this.newStopTime = Phaser.Math.Between(300, 9000);
                        this.stopTriggered = false;
                        this.time.delayedCall(this.newStopTime, () => {
                            this.stopTriggered = true;
                            this.tweens.add({
                                targets: this.balloon,
                                y: this.cameras.main.height + 1000,
                                duration: 600,
                            });
                        });
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
                    .on('pointerdown', () => {
                        this.scene.restart();
                        this.heatHoldTime = 0;
                        this.isHeating = false;
                        this.planeTweenStarted = false;
                        this.cometStartTween = false;
                        this.sateTweenStarted = false;
                        this.ufoStartTween = false;
                        this.teslaStartTween = false;
                        this.background12Shown = false;
                        this.background3Speed = false;
                        this.background3SpeedMultiplier = 0;
                        this.multiplier = 1;
                    });
                break;
        }

        switch (true) {
            case width <= 320:
                this.text = this.add
                    .text(150, 190, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 360:
                this.text = this.add
                    .text(180, 260, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 375:
                this.text = this.add
                    .text(180, 240, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 384:
                this.text = this.add
                    .text(190, 310, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 393:
                this.text = this.add
                    .text(190, 310, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 412:
                this.text = this.add
                    .text(200, 340, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 414:
                this.text = this.add
                    .text(200, 280, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 430:
                this.text = this.add
                    .text(210, 340, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 448:
                this.text = this.add
                    .text(220, 380, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 480:
                this.text = this.add
                    .text(240, 360, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 768:
                this.text = this.add
                    .text(395, 520, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 834:
                this.text = this.add
                    .text(425, 570, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width <= 1024:
                this.text = this.add
                    .text(530, 860, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
            case width == 1440:
                this.text = this.add
                    .text(740, 510, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;

            default:
                this.text = this.add
                    .text(640, 260, '1.00X', {
                        font: 'bold 32px Arial',
                        color: '#ffffff',
                    })
                    .setScale(1.2)
                    .setOrigin(0.5)
                    .setDepth(11);
                break;
        }

        EventBus.emit('current-scene-ready', this);
    }

    override update(time: number, delta: number) {
        const width = this.cameras.main.width;
        switch (true) {
            case width <= 320:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += 0.4;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += speed;
                    this.background7.y += 1.1;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '8.0') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '20.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '32.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '47.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime) {
                        this.stopTriggered = true;
                        this.tweens.add({
                            targets: this.balloon,
                            x: this.cameras.main.width + 1000,
                            y: 100,
                            duration: 600,
                        });
                    }
                }
                break;
            case width <= 393:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += 0.6;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += speed;
                    this.background7.y += 0.99;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '8.0') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '20.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '32.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '47.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime) {
                        this.stopTriggered = true;
                        this.tweens.add({
                            targets: this.balloon,
                            x: this.cameras.main.width + 1000,
                            y: 100,
                            duration: 600,
                        });
                    }
                }
                break;
            case width <= 411:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += 0.5;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += speed;
                    this.background7.y += 0.99;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '8.0') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '20.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '32.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '47.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime) {
                        this.stopTriggered = true;
                        this.tweens.add({
                            targets: this.balloon,
                            x: this.cameras.main.width + 1000,
                            y: 100,
                            duration: 600,
                        });
                    }
                }
                break;
            case width <= 430:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += 0.5;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += speed;
                    this.background7.y += 0.99;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '8.0') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '20.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '32.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '47.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime) {
                        this.stopTriggered = true;
                        this.tweens.add({
                            targets: this.balloon,
                            x: this.cameras.main.width + 1000,
                            y: 100,
                            duration: 600,
                        });
                    }
                }
                break;
            case width <= 480:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += 0.65;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += speed;
                    this.background7.y += 0.99;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '8.0') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '20.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '32.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '47.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime) {
                        this.stopTriggered = true;
                        this.tweens.add({
                            targets: this.balloon,
                            x: this.cameras.main.width + 1000,
                            y: 100,
                            duration: 600,
                        });
                    }
                }
                break;
            case width <= 834:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += 0.6;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += speed;
                    this.background7.y += 0.99;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '11.2') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '18.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '29.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '44.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime) {
                        this.stopTriggered = true;
                        this.tweens.add({
                            targets: this.balloon,
                            x: this.cameras.main.width + 1000,
                            y: 100,
                            duration: 600,
                        });
                    }
                }
                break;
            case width <= 1024:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += speed;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += 0.8;
                    this.background7.y += 0.99;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '11.2') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '18.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '29.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '44.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime) {
                        this.stopTriggered = true;
                        this.tweens.add({
                            targets: this.balloon,
                            x: this.cameras.main.width + 1000,
                            y: 100,
                            duration: 600,
                        });
                    }
                }
                break;
            case width == 1440:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += speed;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += speed;
                    this.background7.y += 0.99;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '11.2') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '20.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '32.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '47.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime) {
                        this.stopTriggered = true;
                        this.tweens.add({
                            targets: this.balloon,
                            x: this.cameras.main.width + 1000,
                            y: 100,
                            duration: 600,
                        });
                    }
                }
                break;

            default:
                if (this.isHeating) {
                    const speed = 0.7;

                    this.background1.y += speed;
                    this.background2.y += speed;
                    this.background3.y += speed;
                    this.background4.y += speed;
                    this.background5.y += speed;
                    this.background6.y += speed;
                    this.background7.y += 0.99;
                    this.background8.y += speed;
                    this.background9.y += speed;
                    this.background10.y += speed;
                    this.background11.y += speed;

                    this.heatHoldTime += delta;
                    const seconds = (this.heatHoldTime / 1000).toFixed(1);
                    console.log(seconds);

                    if (!this.planeTweenStarted && seconds === '11.2') {
                        this.startPlaneTween.play();
                        this.planeTweenStarted = true;
                    }
                    if (!this.cometStartTween && seconds === '20.2') {
                        this.startCometTween.play();
                        this.cometStartTween = true;
                    }
                    if (!this.sateTweenStarted && seconds === '32.2') {
                        this.startSateTween.play();
                        this.sateTweenStarted = true;
                    }
                    if (parseFloat(seconds) >= 33.0) {
                        this.background3.y +=
                            0.99 * this.background3SpeedMultiplier;
                    }
                    if (parseFloat(seconds) >= 33.0 && !this.background3Speed) {
                        this.tweens.addCounter({
                            from: 0,
                            to: 1,
                            duration: 3000,
                            ease: 'Sine.easeInOut',
                            onUpdate: (tween) => {
                                this.background3SpeedMultiplier =
                                    tween.getValue() ?? 0;
                            },
                        });
                        this.background3Speed = true;
                    }

                    if (!this.background12Shown && seconds === '32.0') {
                        this.background12.setVisible(true);
                        this.background12Shown = true;
                        this.tweens.add({
                            targets: this.background12,
                            alpha: 1,
                            duration: 10000,
                            ease: 'Linear',
                        });
                    }
                    if (!this.ufoStartTween && seconds === '47.2') {
                        this.startUfoTween.play();
                        this.ufoStartTween = true;
                    }
                    if (!this.teslaStartTween && seconds === '60.2') {
                        this.startTeslaTween.play();
                        this.teslaStartTween = true;
                    }
                    if (time - this.lastUpdateTime > 100) {
                        this.multiplier += 0.01 * (this.multiplier / 2);
                        this.text.setText(this.multiplier.toFixed(2) + 'X');
                        this.lastUpdateTime = time;
                    }

                    if (!this.stopTriggered && time >= this.newStopTime ) {
                        this.stopTriggered = true;
                        
                    }
                }
            break;
        }
    }
}
