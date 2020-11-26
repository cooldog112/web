
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

const colors = ['#cd853f','#f4a460','#000080','#c3e6cb','#dc3545','#00bfff','#006400'];

async function getTotalData(){

    var arr = new Array(7);
    for(var i=0;i<arr.length;i++){
        arr[i] = new Array(5);
    }
    try{
        let response = await $.get('/total');
        let currentResponse = await $.get('/currentTotal');
        for(var i =0; i<response.length; i++){
            arr[response[i].year - 2015][response[i].period-1] = (response[i].absentee / response[i].applicant * 100).toFixed(2);
        }
        for(var i =0 ; i<currentResponse.length; i++){
            arr[6][currentResponse[i].period-1] = (currentResponse[i].absentee / currentResponse[i].applicant * 100).toFixed(2);
        }
        console.log(arr);

    }catch (error) {
        alert(JSON.stringify(error));
    }

    var chartData = {
        labels: ["1교시","2교시", "3교시", "4교시", "5교시"],
        datasets: [{
            data: arr[0],
            label : "2015",
            backgroundColor: colors[0],
            borderColor: colors[0],
            borderWidth: 3,
            pointBackgroundColor:colors[0]
        }, {
            data: arr[1],
            label : "2016",
            backgroundColor: colors[1],
            borderColor: colors[1],
            borderWidth: 3,
            pointBackgroundColor:colors[1]
        }, {
            data: arr[2],
            label : "2017",
            backgroundColor: colors[2],
            borderColor: colors[2],
            borderWidth: 3,
            pointBackgroundColor:colors[2]
        }, {
            data: arr[3],
            label : "2018",
            backgroundColor: colors[3],
            borderColor: colors[3],
            borderWidth: 3,
            pointBackgroundColor:colors[3]
        }, {
            data: arr[4],
            label : "2019",
            backgroundColor: colors[4],
            borderColor: colors[4],
            borderWidth: 3,
            pointBackgroundColor:colors[4]
        }, {
            data: arr[5],
            label : "2020",
            backgroundColor: colors[5],
            borderColor: colors[5],
            borderWidth: 3,
            pointBackgroundColor:colors[5]
        }, {
            data: arr[6],
            label : "2021",
            backgroundColor: colors[6],
            borderColor: colors[6],
            borderWidth: 3,
            pointBackgroundColor:colors[6]
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
              max: 50,
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
              return datasetLabel + ': ' + tooltipItem.yLabel+'%';
            }
          }
        },
      }
    });
}





