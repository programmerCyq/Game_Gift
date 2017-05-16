/**
* name 
*/
var GameOver= (function (_super) {
        function GameOver() {
            GameOver.super(this);
            this.reset();
        };
        Laya.class(GameOver,"GameOver",_super);
        var _proto = GameOver.prototype ;

        _proto.reset = function(){
            this.score.text = score;
            this.again.on(Laya.Event.MOUSE_DOWN,this,this.Again);
            this.show.on(Laya.Event.MOUSE_DOWN,this,this.Show);
            if(!backLayer.open){
                Laya.SoundManager.stopMusic();
            }else{
                Laya.SoundManager.stopMusic();
                Laya.SoundManager.playMusic("miusc/GameOver.mp3");
            }
        };

        _proto.Again = function(){
            // 再玩一次
            this.removeSelf();
            backLayer.addChild(new Game);
        };

        _proto.Show =function(){
            // 炫耀一下
        }
        return GameOver;

})(ui.GameOverUI);