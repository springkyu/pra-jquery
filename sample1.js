
//ドロップダウンの設定

function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 768) { //横幅が768px以下の場合 $(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
		$(".has-child>a").on('click', function() { //has-childクラスがついたaタグをクリックしたら
			var parentElem =  $(this).parent(); // aタグから見た親要素のliを取得し
			$(parentElem).toggleClass('active'); //矢印方向を変えるためのクラス名を付与して
			$(parentElem).children('ul').stop().slideToggle(500); //liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
			return false; //リンクの無効化
		});
	}else{ //横幅が768px以上の場合
		$(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントをoff(無効)にし
		$(".has-child>a").removeClass('active'); //activeクラスを削除
		$('.has-child').children('ul').css("display",""); //スライドトグルで動作したdisplayも無効化にする
	}
}


// ページがリサイズされたら動かしたい場合

$(window).resize(function() {
	mediaQueriesWin(); // ドロップダウンの関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合

$(window).on('load',function(){
	mediaQueriesWin(); // ドロップダウンの関数を呼ぶ
});

// page-topをクリックした際の設定

$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0 // ページトップまでスクロール
  }, 500); // スクロールの速さ
  return false; // リンク自体の無効化
});


// logoの表示
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow'); //ローディング画面を1.5秒（1500ms）待機してからfadeout
  $("#splash_logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒（1200ms）待機してからfadeout
});