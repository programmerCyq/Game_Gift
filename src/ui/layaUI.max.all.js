var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var AddScoreUI=(function(_super){
		function AddScoreUI(){
			
		    this.view_score=null;

			AddScoreUI.__super.call(this);
		}

		CLASS$(AddScoreUI,'ui.AddScoreUI',_super);
		var __proto__=AddScoreUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AddScoreUI.uiView);
		}

		STATICATTR$(AddScoreUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966},"child":[{"type":"Box","props":{"y":710,"x":125},"child":[{"type":"Image","props":{"width":51,"skin":"comp/add.png","height":51}},{"type":"Clip","props":{"y":2,"x":59,"width":43,"var":"view_score","skin":"comp/clip_score.png","name":"view_score","height":48,"clipX":10}}]}]};}
		]);
		return AddScoreUI;
	})(View);
var GameUI=(function(_super){
		function GameUI(){
			
		    this.ani1=null;
		    this.ani2=null;
		    this.ani3=null;
		    this.ani4=null;
		    this.timer_item1=null;
		    this.timer_item2=null;
		    this.timer_item3=null;
		    this.timer_item4=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}

		STATICATTR$(GameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966},"child":[{"type":"Box","props":{"y":56,"x":-112},"child":[{"type":"Image","props":{"y":181,"x":334,"skin":"comp/cloud.png"},"compId":27},{"type":"Image","props":{"y":395.5,"x":264,"skin":"comp/cloud.png"},"compId":28},{"type":"Image","props":{"y":330.5,"x":434,"skin":"comp/cloud.png"},"compId":30},{"type":"Image","props":{"y":12.5,"x":121.5,"skin":"comp/cloud.png"},"compId":32}]},{"type":"Box","props":{"y":875,"x":-355},"compId":4,"child":[{"type":"Image","props":{"y":-59,"x":88,"skin":"comp/xiaoguzhang.png"}},{"type":"Image","props":{"x":2.8,"width":342,"skin":"comp/qiche.png","height":89},"compId":6},{"type":"Image","props":{"y":68,"x":54,"width":44,"skin":"comp/lunzi.png","rotation":360,"pivotY":22,"pivotX":22,"height":44},"compId":7},{"type":"Image","props":{"y":70,"x":232,"width":44,"skin":"comp/lunzi.png","rotation":360,"pivotY":22,"pivotX":22,"height":44},"compId":8},{"type":"Image","props":{"y":-139.6,"x":90,"width":86,"skin":"comp/head.png","height":101},"compId":26}]},{"type":"Image","props":{"y":45,"x":98,"skin":"comp/time_bg.png"}},{"type":"Box","props":{"y":81,"x":122},"child":[{"type":"Clip","props":{"width":61,"var":"timer_item1","skin":"comp/clip_num.png","name":"timer_item1","index":1,"height":71,"clipX":10}},{"type":"Clip","props":{"x":80,"width":61,"var":"timer_item2","skin":"comp/clip_num.png","name":"timer_item2","index":0,"height":71,"clipX":10}},{"type":"Clip","props":{"y":1,"x":225,"width":61,"var":"timer_item3","skin":"comp/clip_num.png","name":"timer_item3","height":71,"clipX":10}},{"type":"Clip","props":{"y":1,"x":304,"width":61,"var":"timer_item4","skin":"comp/clip_num.png","name":"timer_item4","height":71,"clipX":10}}]}],"animations":[{"nodes":[{"target":7,"keyframes":{"x":[{"value":54,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":10}]}},{"target":8,"keyframes":{"x":[{"value":232,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":232,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":10}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":4,"keyframes":{"y":[{"value":865,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":873,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":20}],"x":[{"value":-355,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0},{"value":43,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":20}]}}],"name":"ani2","id":2,"frameRate":24,"action":1},{"nodes":[{"target":26,"keyframes":{"y":[{"value":-141,"tweenMethod":"linearNone","tween":true,"target":26,"key":"y","index":0},{"value":-138,"tweenMethod":"linearNone","tween":true,"target":26,"key":"y","index":15},{"value":-141,"tweenMethod":"linearNone","tween":true,"target":26,"key":"y","index":30}]}},{"target":6,"keyframes":{"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":6,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":30}]}}],"name":"ani3","id":3,"frameRate":24,"action":2},{"nodes":[{"target":27,"keyframes":{"y":[{"value":192,"tweenMethod":"linearNone","tween":true,"target":27,"key":"y","index":0},{"value":170,"tweenMethod":"linearNone","tween":true,"target":27,"key":"y","index":40},{"value":192,"tweenMethod":"linearNone","tween":true,"target":27,"key":"y","index":80}],"x":[{"value":303,"tweenMethod":"linearNone","tween":true,"target":27,"key":"x","index":0},{"value":365,"tweenMethod":"linearNone","tween":true,"target":27,"key":"x","index":40},{"value":303,"tweenMethod":"linearNone","tween":true,"target":27,"key":"x","index":80}]}},{"target":28,"keyframes":{"y":[{"value":351,"tweenMethod":"linearNone","tween":true,"target":28,"key":"y","index":0},{"value":440,"tweenMethod":"linearNone","tween":true,"target":28,"key":"y","index":40},{"value":351,"tweenMethod":"linearNone","tween":true,"target":28,"key":"y","index":80}],"x":[{"value":240,"tweenMethod":"linearNone","tween":true,"target":28,"key":"x","index":0},{"value":288,"tweenMethod":"linearNone","tween":true,"target":28,"key":"x","index":40},{"value":240,"tweenMethod":"linearNone","tween":true,"target":28,"key":"x","index":80}]}},{"target":30,"keyframes":{"y":[{"value":346,"tweenMethod":"linearNone","tween":true,"target":30,"key":"y","index":0},{"value":315,"tweenMethod":"linearNone","tween":true,"target":30,"key":"y","index":40},{"value":346,"tweenMethod":"linearNone","tween":true,"target":30,"key":"y","index":80}],"x":[{"value":443,"tweenMethod":"linearNone","tween":true,"target":30,"key":"x","index":0},{"value":425,"tweenMethod":"linearNone","tween":true,"target":30,"key":"x","index":40},{"value":443,"tweenMethod":"linearNone","tween":true,"target":30,"key":"x","index":80}]}},{"target":32,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":32,"key":"y","index":0},{"value":25,"tweenMethod":"linearNone","tween":true,"target":32,"key":"y","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":32,"key":"y","index":80}],"x":[{"value":116,"tweenMethod":"linearNone","tween":true,"target":32,"key":"x","index":0},{"value":127,"tweenMethod":"linearNone","tween":true,"target":32,"key":"x","index":40},{"value":116,"tweenMethod":"linearNone","tween":true,"target":32,"key":"x","index":80}]}}],"name":"ani4","id":4,"frameRate":24,"action":2}]};}
		]);
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.ani1=null;
		    this.again=null;
		    this.show=null;
		    this.score=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);
		}

		STATICATTR$(GameOverUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966},"child":[{"type":"Image","props":{"y":753,"x":1,"width":600,"skin":"comp/quan2.png","height":215}},{"type":"Image","props":{"y":810,"x":62,"width":203,"var":"again","skin":"comp/again.fw.png","name":"again","height":94}},{"type":"Image","props":{"y":810,"x":328,"width":203,"var":"show","skin":"comp/show.fw.png","name":"show","height":94}},{"type":"Image","props":{"y":539,"x":35,"width":529,"skin":"comp/ju2.png","height":35}},{"type":"Image","props":{"y":78,"x":85,"width":442,"skin":"comp/quan.png","height":283}},{"type":"Image","props":{"y":252,"x":230,"width":185,"skin":"comp/defen.png","height":138},"compId":7},{"type":"Box","props":{"y":478,"x":-293},"compId":17,"child":[{"type":"Image","props":{"x":59,"width":72,"skin":"comp/guzhang.png","height":90}},{"type":"Image","props":{"y":44,"width":275,"skin":"comp/qiche.png","height":71}},{"type":"Image","props":{"y":81,"x":25,"width":38,"skin":"comp/lunzi.png","height":38}},{"type":"Image","props":{"y":77,"x":164,"width":38,"skin":"comp/lunzi.png","height":38}},{"type":"Image","props":{"y":-69,"x":57,"width":74,"skin":"comp/head.png","height":87}}]},{"type":"Box","props":{"y":578,"x":72},"child":[{"type":"Image","props":{"width":297,"skin":"comp/nannvhai.png","height":205}},{"type":"Image","props":{"y":123,"x":279,"width":125,"skin":"comp/jiantou.png","rotation":90,"pivotY":120.31250000000006,"pivotX":-1.5625,"height":119}},{"type":"Image","props":{"y":8,"x":242,"skin":"comp/xin.png"}},{"type":"Image","props":{"y":4,"x":8,"width":41,"skin":"comp/xinxin.png","height":129}}]},{"type":"Text","props":{"y":306,"x":283,"width":81,"var":"score","name":"score","height":46,"fontSize":80,"color":"#fff","align":"center"},"compId":19}],"animations":[{"nodes":[{"target":17,"keyframes":{"y":[{"value":478,"tweenMethod":"linearNone","tween":true,"target":17,"key":"y","index":0},{"value":357,"tweenMethod":"linearNone","tween":true,"target":17,"key":"y","index":15}],"x":[{"value":-293,"tweenMethod":"linearNone","tween":true,"target":17,"key":"x","index":0},{"value":54,"tweenMethod":"linearNone","tween":true,"target":17,"key":"x","index":15}]}},{"target":7,"keyframes":{"y":[{"value":252,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":205,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":15}],"x":[{"value":230,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":160,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":15}],"width":[{"value":185,"tweenMethod":"linearNone","tween":true,"target":7,"key":"width","index":0},{"value":319,"tweenMethod":"linearNone","tween":true,"target":7,"key":"width","index":15}],"height":[{"value":138,"tweenMethod":"linearNone","tween":true,"target":7,"key":"height","index":0},{"value":236,"tweenMethod":"linearNone","tween":true,"target":7,"key":"height","index":15}],"alpha":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":15}]}},{"target":19,"keyframes":{"y":[{"value":306,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":0},{"value":299,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":15}],"x":[{"value":283,"tweenMethod":"linearNone","tween":true,"target":19,"key":"x","index":0},{"value":245,"tweenMethod":"linearNone","tween":true,"target":19,"key":"x","index":15}],"width":[{"value":81,"tweenMethod":"linearNone","tween":true,"target":19,"key":"width","index":0},{"value":149,"tweenMethod":"linearNone","tween":true,"target":19,"key":"width","index":15}],"height":[{"value":46,"tweenMethod":"linearNone","tween":true,"target":19,"key":"height","index":0},{"value":85,"tweenMethod":"linearNone","tween":true,"target":19,"key":"height","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};}
		]);
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.ani1=null;
		    this.ani2=null;
		    this.ani2_0=null;
		    this.ani3=null;
		    this.ani4=null;
		    this.ani5=null;
		    this.start=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);
		}

		STATICATTR$(GameStartUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"height":966,"alpha":1},"child":[{"type":"Image","props":{"y":550,"x":35,"skin":"comp/cloud.png"}},{"type":"Image","props":{"y":107,"x":121,"skin":"comp/cloud.png"}},{"type":"Image","props":{"y":318,"x":289,"skin":"comp/cloud.png"}},{"type":"Box","props":{"y":564,"x":1},"child":[{"type":"Image","props":{"x":0,"width":600,"skin":"comp/weiqiu.png","height":376,"alpha":0.7433333333333333},"compId":25},{"type":"Image","props":{"y":74,"x":511,"skin":"comp/xin.png"}}]},{"type":"Image","props":{"y":942,"x":299,"width":515,"skin":"comp/diqiu.png","rotation":0,"pivotY":257.5,"pivotX":257.5,"height":515},"compId":15},{"type":"Box","props":{"y":629,"x":136},"compId":19,"child":[{"type":"Image","props":{"y":-208,"x":61,"width":170,"skin":"comp/juquan.png","height":243}},{"type":"Image","props":{"width":342,"skin":"comp/qiche.png","height":89}},{"type":"Image","props":{"y":68,"x":54,"width":44,"skin":"comp/lunzi.png","pivotY":22,"pivotX":22,"height":44},"compId":17},{"type":"Image","props":{"y":70,"x":232,"width":44,"skin":"comp/lunzi.png","pivotY":22,"pivotX":22,"height":44},"compId":18},{"type":"Image","props":{"y":-200,"x":195,"width":154,"skin":"comp/love.png","rotation":-8,"pivotY":128,"pivotX":77,"height":128},"compId":40}]},{"type":"Tab","props":{"y":157,"x":52,"width":495,"height":80},"child":[{"type":"Image","props":{"y":10,"x":21,"width":50,"skin":"comp/520.png","height":23,"alpha":1},"compId":20},{"type":"Image","props":{"y":-1,"x":554,"width":324,"skin":"comp/font_qqbb.png","height":74},"compId":21}]},{"type":"Image","props":{"y":863,"x":92,"width":416,"var":"start","skin":"comp/start.png","name":"start","height":78}},{"type":"Image","props":{"y":597,"x":260,"width":114,"skin":"comp/head.png","rotation":-10,"pivotY":134,"pivotX":57,"height":134},"compId":45}],"animations":[{"nodes":[{"target":15,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":15,"key":"rotation","index":0},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":15,"key":"rotation","index":360}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":19,"keyframes":{"y":[{"value":629,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":0},{"value":625,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":10},{"value":630,"tweenMethod":"linearNone","tween":true,"target":19,"key":"y","index":20}]}}],"name":"ani2","id":2,"frameRate":24,"action":2},{"nodes":[{"target":17,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"rotation","index":0},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":17,"key":"rotation","index":15}]}},{"target":18,"keyframes":{"x":[{"value":232,"tweenMethod":"linearNone","tween":true,"target":18,"key":"x","index":0},{"value":232,"tweenMethod":"linearNone","tween":true,"target":18,"key":"x","index":15}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":18,"key":"rotation","index":0},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":18,"key":"rotation","index":15}]}}],"name":"ani2_0","id":2,"frameRate":24,"action":2},{"nodes":[{"target":25,"keyframes":{"x":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"x","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"x","index":30}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":25,"key":"alpha","index":60}]}},{"target":40,"keyframes":{"rotation":[{"value":-8,"tweenMethod":"linearNone","tween":true,"target":40,"key":"rotation","index":0},{"value":8,"tweenMethod":"linearNone","tween":true,"target":40,"key":"rotation","index":30},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":40,"key":"rotation","index":60}]}}],"name":"ani3","id":3,"frameRate":24,"action":2},{"nodes":[{"target":20,"keyframes":{"y":[{"value":10,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":20}],"x":[{"value":21,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":20}],"width":[{"value":50,"tweenMethod":"linearNone","tween":true,"target":20,"key":"width","index":0},{"value":172,"tweenMethod":"linearNone","tween":true,"target":20,"key":"width","index":20}],"height":[{"value":23,"tweenMethod":"linearNone","tween":true,"target":20,"key":"height","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":20,"key":"height","index":20}],"alpha":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":20}]}},{"target":21,"keyframes":{"y":[{"value":-1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":20}],"x":[{"value":554,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0},{"value":172,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":20}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":20}]}}],"name":"ani4","id":4,"frameRate":24,"action":1},{"nodes":[{"target":45,"keyframes":{"rotation":[{"value":-10,"tweenMethod":"linearNone","tween":true,"target":45,"key":"rotation","index":0},{"value":5,"tweenMethod":"linearNone","tween":true,"target":45,"key":"rotation","index":15},{"value":-10,"tweenMethod":"linearNone","tween":true,"target":45,"key":"rotation","index":30}]}}],"name":"ani5","id":5,"frameRate":24,"action":2}]};}
		]);
		return GameStartUI;
	})(View);