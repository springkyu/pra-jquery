
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


// ハンバーガーメニュー
$(".openbtn").click(function () {
  $(this).toggleClass('active');
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


$(window).on('load',function(){
  $("#splash2-logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒でfadeout

// ローディングエリア（splash2エリア）をフェードアウトした後に動かすJSまとめ
$("#splash").delay(1500).fadeOut('slow',function(){ // ローディングエリア（splashエリア）を1.5秒でfadeout
  $('body').addClass('appear'); //fadeout後bodyにappearクラス付与
});

});


// TextTypingというクラス名がついている子要素を表示から非表示にする
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); // spanタグ取得
			// spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				// 時差で表示する為にdelayを指定しその時間後にfadeinで表示
				$(this).delay(time * i).fadeIn(time);
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); // delay処理を止める
        $(this).css("display", "none"); // spanタグ非表示
      });
    });
		}
	});
}
// // 画面をスクロールをしたら動かしたい
// $(window).scroll(function () {
// 	TextTypingAnime(); // アニメーション用の関数を呼ぶ
// });

// // 画面が読み込まれたらすぐに動かしたい場合
// $(window).on('load', function () {
// 	// spanタグを追加する
// 	var element = $(".TextTyping");
// 	element.each(function () {
// 		var text = $(this).html();
// 		var textbox = "";
// 		text.split('').forEach(function (t) {
// 			if (t !== " ") {
// 				textbox += '<span>' + t + '</span>';
// 			} else {
// 				textbox += t;
// 			}
// 		});
// 		$(this).html(textbox);

// 	});

// 	TextTypingAnime(); // アニメーション用の関数を呼ぶ
// });

// $(window).on('load resize', function() {
//   var windowWidth = window.innerWidth;
//   var elements = $('.fixed');
//   if (windowWidth >= 768) {
//   Stickyfill.add(elements);
//   } else {
//   Stickyfill.remove(elements);
//   }
// });

// //　開くボタンを押した時には
// $(".open-btn").click(function () {
//   $("#search-wrap").addClass('panelactive');　//　#search-wrapへpanelactiveクラスを付与
// $('#search-text').focus();　//　テキスト入力のinputにフォーカス
// });

// //　閉じるボタンを押した時には
// $(".close-btn").click(function () {
//   $("#search-wrap").removeClass('panelactive');　//　#search-wrapからpanelactiveクラスを除去
// });

// //lightboxオプションの設定

// lightbox.option({
//   'wrapAround': true, // グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
//   'albumLabel': ' %1 / total %2 '
// })