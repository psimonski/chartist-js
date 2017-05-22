new Chartist.Candle('.ct-chart', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai','Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  series: [
    [800000, 1400000, 600000, 900000],
    [900000, 900000, 900000, 900000],
    [900000, 2000000, 900000, 1500000],
    [1500000, 1500000, 1000000, 1400000],
    [1400000, 1500000, 50000, 500000],
    [500000, 800000, 100000, 250000],
    [250000, 500000, 200000, 300000],
    [300000, 800000, 300000, 800000],
    [800000, 1000000, 700000, 900000],
    [900000, 1300000, 700000, 800000]
  ]
}, {
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value / 1000) + 'k';
    }
  }
});