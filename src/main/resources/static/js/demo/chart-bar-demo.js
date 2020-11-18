
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart Example
var ctx = document.getElementById("myBarChart");

const colors = ['red','yellow','blue','#c3e6cb','#dc3545'];

var chartData = {
    labels: ["2015","2016", "2017", "2018", "2019", "2020","2021"],
    datasets: [{
        data: [31529,31168,29041,28251,27812,25260],
        label : "1교시",
        backgroundColor: colors[0],
        borderColor: colors[0],
        borderWidth: 3,
        pointBackgroundColor:colors[0]
        }, {
        data: [30345,30108,28210,27474,27011,24599],
        label : "2교시",
        backgroundColor: colors[1],
        borderColor: colors[1],
        borderWidth: 3,
        pointBackgroundColor:colors[1]
        }, {
        data: [31196,30691,28821,27982,27482,24929],
        label : "3교시",
        backgroundColor: colors[2],
        borderColor: colors[2],
        borderWidth: 3,
        pointBackgroundColor:colors[2]
        }, {
        data: [30992,30557,28623,28017,27517,24947],
        label : "4교시",
        backgroundColor: colors[3],
        borderColor: colors[3],
        borderWidth: 3,
        pointBackgroundColor:colors[3]
        }, {
        data: [1934,2236,2696,2173,2106,2084],
        label : "5교시",
        backgroundColor: colors[4],
        borderColor: colors[4],
        borderWidth: 3,
        pointBackgroundColor:colors[4]
        }

    ]

}

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: chartData,
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 35000,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value)+'명';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel)+'명';
        }
      }
    },
  }
});
