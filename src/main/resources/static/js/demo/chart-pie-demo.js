// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx1 = document.getElementById("myPieChart1");
var ctx2 = document.getElementById("myPieChart2");
var ctx3 = document.getElementById("myPieChart3");
var ctx4 = document.getElementById("myPieChart4");
var ctx5 = document.getElementById("myPieChart5");
async function donutChart(){
    var arr = new Array(5);
    for(var i=0;i<arr.length;i++){
        arr[i] = new Array(2);
    }
    try{
        let response = await $.get('/currentTotal');
        for(var i =0 ; i<response.length; i++){
            //arr[response[i].period-1][0] = response[i].candidate;
            //arr[response[i].period-1][1] = response[i].absentee;
            arr[response[i].period-1][0] = (response[i].candidate / response[i].applicant * 100).toFixed(2);
            arr[response[i].period-1][1] = (response[i].absentee / response[i].applicant * 100).toFixed(2);

        }
    }catch (error) {
        alert(JSON.stringify(error));
    }

    var myPieChart1 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ["응시율", "결시율"],
    datasets: [{
      data: arr[0],
      backgroundColor: ['#4e73df', '#1cc88a'],
      hoverBackgroundColor: ['#2e59d9', '#17a673'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
  },
    });
    var myPieChart2 = new Chart(ctx2, {
     type: 'doughnut',
     data: {
       labels: ["응시자", "결시자"],
       datasets: [{
         data: arr[1],
         backgroundColor: ['#4e73df', '#1cc88a'],
         hoverBackgroundColor: ['#2e59d9', '#17a673'],
         hoverBorderColor: "rgba(234, 236, 244, 1)",
       }],
     },
     options: {
       maintainAspectRatio: false,
       tooltips: {
         backgroundColor: "rgb(255,255,255)",
         bodyFontColor: "#858796",
         borderColor: '#dddfeb',
         borderWidth: 1,
         xPadding: 15,
         yPadding: 15,
         displayColors: false,
         caretPadding: 10,
       },
       legend: {
         display: true
       },
       cutoutPercentage: 80,
     },
   });
    var myPieChart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
          labels: ["응시자", "결시자"],
          datasets: [{
            data: arr[2],
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: true
          },
          cutoutPercentage: 80,
        },
      });
    var myPieChart4 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
          labels: ["응시자", "결시자"],
          datasets: [{
            data: arr[3],
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: true,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });
    var myPieChart5 = new Chart(ctx5, {
        type: 'doughnut',
        data: {
          labels: ["응시자", "결시자"],
          datasets: [{
            data: arr[4],
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: true,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });
}

