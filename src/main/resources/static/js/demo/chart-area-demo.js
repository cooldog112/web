// Set new default font family and font color to mimic Bootstrap's default styling
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

// Area Chart Example
var ctx = document.getElementById("myAreaChart");

async function getChartData(){
    try {
        let response = await $.get('/total');
        for (let i = 0; i < response.length; i++) {
            addTotalLine(response[i]);
        }
    } catch (error) {
        $('#func3Table').html(JSON.stringify(error));
    }
}
const colors = ['red','yellow','blue','#c3e6cb','#dc3545'];

var chartData = {
        labels: ["2015","2016", "2017", "2018", "2019", "2020","2021"],

        datasets: [{
            data: [92.9,93.41,92.21,91.54,91.46,90.95],
            label : "1교시",
            backgroundColor: 'transparent',
            borderColor: colors[0],
            borderWidth: 3,
            pointBackgroundColor:colors[0]
            }, {
            data: [92.97,93.69,92.57,91.98,91.72,91.1],
            label : "2교시",
            backgroundColor: 'transparent',
            borderColor: colors[1],
            borderWidth: 3,
            pointBackgroundColor:colors[1]
            }, {
            data: [92.11,92.22,91.62,90.83,90.47,89.83],
            label : "3교시",
            backgroundColor: 'transparent',
            borderColor: colors[2],
            borderWidth: 3,
            pointBackgroundColor:colors[2]
            }, {
            data: [92.04,92.38,91.57,90.71,90.36,89.7],
            label : "4교시",
            backgroundColor: 'transparent',
            borderColor: colors[3],
            borderWidth: 3,
            pointBackgroundColor:colors[3]
            }, {
            data: [71.31,74.38,78.26,73.39,70.22,72.77],
            label : "5교시",
            backgroundColor: 'transparent',
            borderColor: colors[4],
            borderWidth: 3,
            pointBackgroundColor:colors[4]
            }

        ]

    }

async function getChartData(){
    alert("getChartData()");

}

var myLineChart = new Chart(ctx, {
  type: 'line',
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
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value)+'%';
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
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//          return datasetLabel +' : '+ number_format(tooltipItem.yLabel) + '%';
            return datasetLabel +' : '+ tooltipItem.yLabel + '%';
        }
      }
    }
  }
});

