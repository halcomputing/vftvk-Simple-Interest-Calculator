function compute() {
  var principal = parseFloat(document.getElementById('principal').value);
  var rate = parseFloat(document.getElementById('rate').value);
  var years = parseInt(document.getElementById('years').value);

  document.getElementById('principal').focus();

  if (isNaN(principal)) {
    alert('Amount must a number');
    return;
  } else if (principal == 0) {
    alert('Enter a positive number');
    return;
  }

  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  document.getElementById('result').innerHTML =
    'If you deposit ' +
    '<b>' +
    principal +
    '</b>' +
    ',<br>at an interest rate of ' +
    '<b>' +
    rate.toFixed(2) +
    '</b>' +
    '%<br>You will receive an amount of ' +
    '<b>' +
    interest +
    '</b>' +
    '<br>in the year ' +
    '<b>' +
    year +
    '</b>' +
    '<br>';
}

function updateRate() {
  var rateval = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateval + '%';
}
