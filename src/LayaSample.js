
    var WIN_W = 600;
    var WIN_H = 966;   
    var backLayer,gameLayer,playGameLayer; 
    var RunGame;
    var runGameMain;
    var scoreFun;
    var isStopTime = false;
    var lodaTextTip,heroRun,ziDanLayers,loading;
    (function GameInit(){
        Laya.init(WIN_W,WIN_H,Laya.WebGL);
        // Laya.Stat.show(0,0); //显示帧数zx
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_TOP;
        Laya.stage.scaleMode = 'showall';
        Laya.stage.screenMode = "none";
        Laya.stage.bgColor = "#70cdc6";
        backLayer = new Laya.Sprite();
        backLayer.width = WIN_W;
        backLayer.height = WIN_H;
        backLayer.pos(0,0)
        Laya.stage.addChild(backLayer);
        loadUI();
    })()

    function loadUI(){
        var imgArray = [
                {url:"comp/diqiu.png",type:Laya.loader.IMAGE},
                {url:"res/atlas/comp.atlas",type:Laya.loader.ATLAS},
                {url:"comp/gift/gift1.png",type:Laya.loader.IMAGE},
                {url:"comp/gift/gift2.png",type:Laya.loader.IMAGE},
                {url:"comp/gift/gift3.png",type:Laya.loader.IMAGE},
                {url:"comp/gift/gift4.png",type:Laya.loader.IMAGE},
                {url:"comp/gift/gift5.png",type:Laya.loader.IMAGE},
                {url:"comp/gift/gift6.png",type:Laya.loader.IMAGE},
                {url:"comp/gift/gift7.png",type:Laya.loader.IMAGE},
                {url:"comp/gift/gift8.png",type:Laya.loader.IMAGE},
                {url:"comp/gift/gift9.png",type:Laya.loader.IMAGE},
                {url:"comp/floor_4000.png",type:Laya.loader.IMAGE},
                {url:"miusc/Game_b.mp3",type:Laya.loader.SOUND},
                {url:"miusc/getGift.wav",type:Laya.loader.SOUND},
                {url:"miusc/GameOver.mp3",type:Laya.loader.SOUND}
                
        ];
        Laya.loader.load(imgArray,Laya.Handler.create(this,onLoadUI),Laya.Handler.create(this,onProgress,null,false));
        lodaTextTip = new Laya.Text();
        lodaTextTip.text = "正在加载中...";
        lodaTextTip.color = "#ffffff";
        lodaTextTip.fontSize = 30;
        lodaTextTip.pos((WIN_W-lodaTextTip.width)/2-30,WIN_H/2+200) ;
        loadingTip = new Laya.Image() ;
        loadingTip.skin = "comp/diqiu.png" ;
        loadingTip.width = 300 ;
        loadingTip.height = 300;
        loadingTip.pivot(150,150);
        loadingTip.pos((WIN_W)/2,WIN_H/2);
        Laya.Tween.to(loadingTip,{rotation:360},3000,Laya.Ease.linearIn,null);
        backLayer.addChild(lodaTextTip);
        backLayer.addChild(loadingTip);
    };
    function onProgress(progress){
        lodaTextTip.text = "";
        lodaTextTip.text = "正在加载中..."+Math.floor(progress*100)+"%";
    }
    backLayer.frameMuisc=function(url){
            if(!backLayer.open){
            // 关闭音乐
                 Laya.SoundManager.stopMusic();
                 return;
            };
            //  开启音乐
            Laya.SoundManager.playMusic(url,0,null,0);
        };
    function onLoadUI(){
        backLayer.btn_muisc = new Laya.Image();
        backLayer.open = true;
        backLayer.btn_muisc.skin = "comp/btn_muisc1.png";
        backLayer.btn_muisc.pos(540,60);
        backLayer.btn_muisc.width = 50 ;
        backLayer.btn_muisc.height = 50 ;
        backLayer.btn_muisc.pivot(backLayer.btn_muisc.width / 2,backLayer.btn_muisc.height / 2);
        backLayer.btn_muisc.on(Laya.Event.CLICK,this,MuiscChank);
        function MuiscChank(){
            backLayer.open=backLayer.open?false:true;
            backLayer.btn_muisc.skin = backLayer.open ? "comp/btn_muisc1.png":"comp/btn_muisc2.png";
            backLayer.frameMuisc("miusc/Game_b.mp3");
        };
        backLayer.frameMuisc("miusc/Game_b.mp3");
        backLayer.addChild(backLayer.btn_muisc);
        backLayer.btn_muisc.zOrder = 50;
        lodaTextTip.removeSelf();
        loadingTip.removeSelf();
        backLayer.addChild(new GameStart);
    };
    
