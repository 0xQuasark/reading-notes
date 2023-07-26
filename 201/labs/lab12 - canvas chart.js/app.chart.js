'use strict';
// this example uses chart.js

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }, {
      label: 'Times Clicked',
      data: [50, 30, 1, 49, 39, 3],
      borderWidth: 1
    }, {
      label: 'Jozi',
      data: [15, 43, 15, 39, 24, 9],
      borderWidth: 1
    }
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
