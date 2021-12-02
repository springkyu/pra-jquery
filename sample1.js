$(".openbtn").click(function () { // ボタンがクリックされたら
	$(this).toggleClass('active'); // ボタン自身にactiveクラスを付与
    $("#g-nav").toggleClass('panelactive'); // ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); // 丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () { // ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active'); // ボタンのactiveクラスを除去
  $("#g-nav").removeClass('panelactive'); // ナビゲーションのpanelactiveクラスを除去
  $(".circle-bg").removeClass('circleactive'); // 丸背景のcircleactiveクラスを除去
});



function delayScrollAnime(){
  var time = 0.2; // 遅延時間を増やす秒数
  var value = time;
  $('.dalayScroll').each(function(){
    var parent = this; // 親要素を取得
    var elemPos = $(this).offset().top; // 要素の位置まで来たら
    var scroll = $(window).scrollTop(); // スクロール値を取得
    var windowHeight = $(window).height(); // 画面の高さを取得
    var childs = $(this).children(); // 子要素を取得

    // 指定領域内にスクロールが入ったら、また親要素にクラスplayがなければ
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")){
      $(childs).each(function(){

        if (!$(this).hasClass("fadeUp")){ // アニメーションのクラス名が指定されているかどうかをチェック

          $(parent).addClass("play"); // 親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s"); // アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUp"); // アニメーションのクラス名を追加
          value = value + time; // delay時間を増加させる

          // 全ての処理を終わったらplayを外す
          var index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }else {
      $(childs).removeClass("fadeUp"); // アニメーションのクラス名を削除
      value = time; // delay初期値の数値に戻す
    }

  })
}

// 画面をスクロールをしたら動かす
$(window).scroll(function (){
  delayScrollAnime(); // アニメーション用の関数を呼ぶ
});

// 画面が読み込まれたらすぐに動かしたい場合



// // ハンバーガーメニュー
// $(".openbtn").click(function () {
//   $(this).toggleClass('active');
// });




// // page-topをクリックした際の設定

// $('#page-top').click(function () {
//   $('body,html').animate({
//       scrollTop: 0 // ページトップまでスクロール
//   }, 500); // スクロールの速さ
//   return false; // リンク自体の無効化
// });


// // logoの表示
// $(window).on('load',function(){
//   $("#splash").delay(1500).fadeOut('slow'); //ローディング画面を1.5秒（1500ms）待機してからfadeout
//   $("#splash_logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒（1200ms）待機してからfadeout
// });


// $(window).on('load',function(){
//   $("#splash2-logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒でfadeout

// // ローディングエリア（splash2エリア）をフェードアウトした後に動かすJSまとめ
// $("#splash").delay(1500).fadeOut('slow',function(){ // ローディングエリア（splashエリア）を1.5秒でfadeout
//   $('body').addClass('appear'); //fadeout後bodyにappearクラス付与
// });

// });


// // TextTypingというクラス名がついている子要素を表示から非表示にする
// function TextTypingAnime() {
// 	$('.TextTyping').each(function () {
// 		var elemPos = $(this).offset().top - 50;
// 		var scroll = $(window).scrollTop();
// 		var windowHeight = $(window).height();
// 		var thisChild = "";
// 		if (scroll >= elemPos - windowHeight) {
// 			thisChild = $(this).children(); // spanタグ取得
// 			// spanタグの要素の１つ１つ処理を追加
// 			thisChild.each(function (i) {
// 				var time = 100;
// 				// 時差で表示する為にdelayを指定しその時間後にfadeinで表示
// 				$(this).delay(time * i).fadeIn(time);
//     } else {
//       thisChild = $(this).children();
//       thisChild.each(function () {
//         $(this).stop(); // delay処理を止める
//         $(this).css("display", "none"); // spanタグ非表示
//       });
//     });
// 		}
// 	});
// }

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