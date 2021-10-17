// 値をグラフに表示させる

Chart.plugins.register({
  afterDatasetsDraw: function (chart, easing) {
    var ctx = chart.ctx;
    chart.data.datasets.forEach(function (dataset, i) {
      var meta = chart.getDatasetMeta(i);
      if (!meta.hidden) {
        meta.data.forEach(function (element, index) {
          // 値の表示
          ctx.fillStyle = 'rgb(0, 0, 0,0.8)'; // 文字色
          var fontSize = 12; // フォントサイズ
          var fontStyle = 'normal'; // フォントスタイル
          var fontFamily = 'Arial'; // フォントファミリー
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          var dataString = dataset.data[index].toString();

          // 値の位置
          ctx.textAlign = 'center'; // テキスト中央寄せ
          ctx.textBaseline = 'middle'; // テキストベースラインの位置を中央揃え

          var padding = 5; // 余白
          var position = element.tooltipPosition();
          ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);

        });
      }
    });
  }
});