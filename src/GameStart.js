/**
* name 
*/
var GameStart= (function (_super) {
        function GameStart() {
            GameStart.super(this);
            this.reset();
        }
        Laya.class(GameStart,"GameStart",_super);

        GameStart.prototype.reset = function(){
            this.start.on(Laya.Event.CLICK,this,this.StartGame)
        };

        GameStart.prototype.StartGame = function(){
            backLayer.addChild(new Game);
            this.removeSelf();
        }
        return GameStart;
})(ui.GameStartUI);