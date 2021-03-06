// // 値をグラフに表示させる

// Chart.plugins.register({
//   afterDatasetsDraw: function (chart, easing) {
//     var ctx = chart.ctx;
//     chart.data.datasets.forEach(function (dataset, i) {
//       var meta = chart.getDatasetMeta(i);
//       if (!meta.hidden) {
//         meta.data.forEach(function (element, index) {
//           // 値の表示
//           ctx.fillStyle = 'rgb(0, 0, 0,0.8)'; // 文字色
//           var fontSize = 12; // フォントサイズ
//           var fontStyle = 'normal'; // フォントスタイル
//           var fontFamily = 'Arial'; // フォントファミリー
//           ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

//           var dataString = dataset.data[index].toString();

//           // 値の位置
//           ctx.textAlign = 'center'; // テキスト中央寄せ
//           ctx.textBaseline = 'middle'; // テキストベースラインの位置を中央揃え

//           var padding = 5; // 余白
//           var position = element.tooltipPosition();
//           ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);

//         });
//       }
//     });
//   }
// });


// // 棒グラフ（縦）
// $('#chart01').on('inview', function(event, isInView) { // 画面上に入ったらグラフを描画
//   if (isInView) {
//   var ctx=document.getElementById("chart01"); // グラフを描画したい場所のid
//   var chart=new Chart(ctx,{
//   type:'bar', // グラフのタイプ
//   data:{ // グラフのデータ
//     labels:["令和3年度","令和4年度","令和5年度",], // データの名前
//     datasets:[{
//         label:"新入院患者数", // グラフのタイトル
//         backgroundColor:"#0584C5", // グラフの色
//         data:["724","776","713",] // 横列に並ぶデータ
//       }]
// },
// options:{ // グラフのオプション
// 	legend:{
// 		display: false // グラフの説明を非表示
// 	},
// 	tooltips:{ // グラフへカーソルを合わせた際の詳細表示の設定
// 		callbacks:{
//         label: function(tooltipItems, data) {
//             if(tooltipItems.yLabel == "0"){
//                 return "";
//             }
//             return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.yLabel + "人"; // 人を最後につける
//         }
//     }
// 	},
// title:{ // 上部タイトル表示の設定
// 		display: true,
// 		fontSize:10,
// 		text: '単位：人'
// 	},
// scales:{
// 		yAxes:[ // グラフ縦軸（Y軸）設定
// 			{
// 				ticks:{
// 					beginAtZero:true, // 0からスタート
// 					suggestedMax: 1000, // 最大が1000
// 					suggestedMin: 0, // 最小が0
// 					stepSize: 100, // 100づつ数値が刻まれる
// 					callback: function(value){
// 						return  value +  '人' // 数字＋人で表示
// 				}
// 			}
// 		}
// 	],
//     xAxes:[ // グラフ縦軸（X軸）設定
//       {
//         barPercentage:0.5, // バーの太さ
//       }
//     ]
//   }
// }
// });

// }
// });



// アコーディオンをクリックした時の動作

// $('.title').on('click', function() { // タイトル要素をクリック
// 	var findElm = $(this).next(".box"); // 直後のアコーディオンを行うエリアを取得
// 	$(findElm).slideToggle(); // アコーディオンの上下動作

// 	if($(this).hasClass('close')){ // タイトル要素にクラス名closeがある場合
// 		$(this).removeClass('close'); // クラス名を除去
// 	}else{ // それ以外
// 		$(this).addClass('close'); // クラス名closeを付与
// 	}
// });

// ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作
// $(window).on('load', function(){
// 	$('.accordion-area li:first-of-type section').addClass("open"); // accordion-areaのはじめのliにあるsectionにopenクラスを追加
// 	$(".open").each(function(index, element){	// openクラスを取得
// 		var Title =$(element).children('.title');	// openクラスの子要素のtitleクラスを取得
// 		$(Title).addClass('close');	// タイトルにクラス名closeを付与
// 		var Box =$(element).children('.box');	// openクラスの子要素boxクラスを取得
// 		$(Box).slideDown(500); // アコーディオンを開く
// 	});
// });


// SVGの初期設定

// var logoVivus1; // SVG設定

// SVG初期設定
// function VivusInit(){
// 	logoVivus1 = new Vivus('logo',
// 		{
// 			start: 'autostart', // アニメーションの自動再生
//             duration: 100 , // アニメーションの時間
// 			type: 'scenario', // アニメーションのタイプを設定
// 			pathTimingFunction: Vivus.EASE, // 動きの加速減速設定
// 		},
// 		function(obj){
// 			$("#logo").attr("class", "done"); // 描画が終わったらdoneというクラスを追加
// 		}
// 	);
// 	logoVivus1.stop();
// }

// スクロールをしたらSVGが出現する設定

// function VivusAnime(){
// 	// スクロールをしたら1つめのSVG id="logo"が出現する設定
// 	var elemPos = $("#logo").offset().top - 50; // 要素より、50px上の位置まで来たら出現
// 	var scroll = $(window).scrollTop();
// 	var windowHeight = $(window).height();
// 	if (scroll >= elemPos - windowHeight) {
// 		logoVivus1.play(1); // 描画される速さ
// 	}
// }

// // 画面をスクロールをしたら動かしたい場合
// $(window).scroll(function () {
// 	VivusAnime(); // SVGアニメーション用の関数を呼ぶ
// });
// // 画面が読み込まれたらすぐに動かしたい場合
// $(window).on('load', function () {
// 	VivusInit(); //SVG初期設定
// 	VivusAnime(); // SVGアニメーション用の関数を呼ぶ
// });


// function delayScrollAnime() {
// 	var time = 0.2; // 遅延時間を増やす秒数
// 	var value = time;
// 	$('.delayScroll').each(function () {
// 		var parent = this;					// 親要素を取得
// 		var elemPos = $(this).offset().top; // 要素の位置まで来たら
// 		var scroll = $(window).scrollTop(); // スクロール値を取得
// 		var windowHeight = $(window).height(); // 画面の高さを取得
// 		var childs = $(this).children();	// 子要素を取得

//     if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {　// 指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
// 			$(childs).each(function () {

// 				if (!$(this).hasClass("fadeUp")) {　// アニメーションのクラス名が指定されているかどうか

// 					$(parent).addClass("play");	// 親要素にクラス名playを追加
// 					$(this).css("animation-delay", value + "s");　// アニメーション遅延のCSS animation-delayを追加し
// 					$(this).addClass("fadeUp"); // アニメーションのクラス名を追加
// 					value = value + time; // delay時間を増加させる

// 					// 全ての処理を終わったらplayを外す
// 					var index = $(childs).index(this);
// 					if((childs.length-1) == index){
// 						$(parent).removeClass("play");
// 					}
// 				}
// 			})
// 		}else {
// 			$(childs).removeClass("fadeUp"); // アニメーションのクラス名を削除
// 			value = time; // delay初期値の数値に戻す
// 		}
// 	})
// }

// 画面をスクロールをしたら動かしたい場合
// $(window).scroll(function (){
//   delayScrollAnime(); // アニメーション用の関数を呼ぶ
// });

// // 画面が読み込まれたらすぐに動かしたい場合
// $(window).on('load', function(){
//   delayScrollAnime();
// });