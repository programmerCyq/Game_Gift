/**
* name 
*/
var score;
var Game = (function (_super) {
        function Game() {
            Game.super(this);
            this.reset();
        }
        Laya.class(Game,"Game",_super);
        var _proto = Game.prototype;

        _proto.reset = function(){
             if(!backLayer.open){
                Laya.SoundManager.stopMusic();
            }else{
                Laya.SoundManager.stopMusic();
                Laya.SoundManager.playMusic("miusc/Game_b.mp3",0,null,0);
            }

            // 分数
            score = 0;
            // 礼品数组
            this.Ar_gifts = [];
            this.addGift_num = 0;
            //实例两张背景楼准备轮播
            this.ape = new Laya.Sprite();
            this.ape.autoSize = true;
            this.ape.loadImage("comp/floor_4000.png");
            this.ape.pos(0,WIN_H-250);
            this.addChild(this.ape);
            this.ape2 = new Laya.Sprite();
            this.addChild(this.ape2);
            this.ape2.autoSize = true;
            this.ape2.loadImage("comp/floor_4000.png");
            this.ape2.pos(4000,WIN_H-250);
            this.ape.zOrder = -5 ;
            this.ape2.zOrder = -5 ;
            Laya.timer.frameLoop(1,this,this.onframe);
            //开启动画
            this.ani1.play();
            // 时间
            this.time = 10;
            this.time_item1_num = Math.floor(this.time / 10);
            this.time_item2_num = Math.ceil(this.time%10);
            this.timer_item1.index = this.time_item1_num ;
            this.timer_item2.index = this.time_item2_num ;
        };

        // 添加礼品
        _proto.addGift = function(){
            var gift = new Laya.Sprite();
            var index = Math.ceil(Math.random()*9);
            var GiftY = Math.ceil(Math.random()*400)+ 150;
            gift.loadImage("comp/gift/gift"+index+".png");
            gift.x = 600 ;
            gift.y = GiftY ;
            gift.score = 2;
            var index = Math.ceil(Math.random()*10);
            // 能否点中的概率
            if(index>5){
                gift.on(Laya.Event.MOUSE_DOWN,this,this.runGift)
            }
            this.addChild(gift);
            this.Ar_gifts.push(gift);
        }

        // 点击礼品，礼品移动消失
        _proto.runGift = function(e){
            Laya.Tween.to(e.target,{x:100,y:750},1000,Laya.Ease.linearIn,null,0);
        };

        // 控制时间方法
        _proto.conTimer = function(){
            if(this.timer_item1.index == 0 && this.timer_item2.index == 0 &&this.timer_item3.index == 0 && this.timer_item4.index == 0 ){
                // GameOver
                Laya.timer.clearAll(this);
                this.removeSelf();
                backLayer.addChild(new GameOver);
                return;
            };
            if(this.timer_item4.index == 0 ){
                if(this.timer_item3.index == 0 ){
                    if(this.timer_item2.index == 0 ){
                        if(this.timer_item1.index <= 0 ){
                            this.timer_item1.index = 0;
                        }
                        this.timer_item2.index=9;
                        this.timer_item1.index--;
                    }else{
                        this.timer_item2.index--;
                    }
                    this.timer_item3.index = 9;
                }else{
                    this.timer_item3.index--;
                };
                this.timer_item4.index = 9; 
                return;
            }
            this.timer_item4.index--;
        };

        // 加分动画
        _proto.addScoreAni = function(){
            var add_score = new AddScoreUI();
            add_score.view_score.index = this.Ar_gifts[k].score
            this.addChild(add_score);
            if(backLayer.open){
                        Laya.SoundManager.playSound("miusc/getGift.wav",1,null,null,0)
            }
            Laya.Tween.to(add_score,{y:-100,alpha:0},1000,Laya.Ease.linearIn,Laya.Handler.create(this,removeScore,[add_score]));
                    this.Ar_gifts[k].removeSelf();
                    this.Ar_gifts.splice(k,1);
                    function removeScore(add_score){
                        add_score.removeSelf();
                    }
        }

        // 控制礼物的方法
        _proto.conGift = function(){
            for(k in this.Ar_gifts){
                this.Ar_gifts[k].x -= 10;
                if(this.Ar_gifts[k].y>650){
                    this.Ar_gifts[k].alpha -=0.1
                };
                if(this.Ar_gifts[k].x < -this.Ar_gifts[k].x.width || this.Ar_gifts[k].y >=750){
                    //分数计算
                    score +=this.Ar_gifts[k].score;
                    this.addScoreAni();
                }
            };
        };

        // 定时器
        _proto.onframe = function(){
            //时间控制
            this.conTimer();
            // 背景楼无限滚动
            this.ape.x-=5;
            this.ape2.x-=5;
            if(this.ape.x <= -4000 ){
                this.ape.x = 4000;
            };
            if(this.ape2.x <= -4000){
                this.ape2.x = 4000; 
            };
            //礼物超出移除
            this.conGift();
            //节流添加礼物
            this.addGift_num++ ;
            if(this.addGift_num >10 ){
                this.addGift();
                this.addGift_num = 0;
            }
        }
        return Game;
})(ui.GameUI);