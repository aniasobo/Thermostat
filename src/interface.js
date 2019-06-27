$(document).ready(function() {
  console.log('ready');
  var term = new Thermostat();
  var status = term.checkEnergyUsage();
  $( "h1" ).text(`Current temperature: ${term._temperature}`);
  $( "h2" ).text(`Energy usage: ${status}`);
  $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`)
  
  $( "#up" ).click(function() {
    term.up();
    var returnval = term.returnTemperature();
    var status = term.checkEnergyUsage();
    console.log(returnval);
    $( "h1" ).text(`Current temperature: ${term._temperature}`);
    $( "h2" ).text(`Energy usage: ${status}`);
    $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`)
  });

  $( "#down" ).click(function() {
    term.down();
    returnval = term.returnTemperature();
    var status = term.checkEnergyUsage();
    console.log(returnval);
    $( "h1" ).text(`Current temperature: ${term._temperature}`);
    $( "h2" ).text(`Energy usage: ${status}`);
    $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`)
  });

  $( "#psm" ).click(function() {
    term.togglePSM();
    var status = term.checkEnergyUsage();
    console.log(term.isPSMon());
    $( "h1" ).text(`Current temperature: ${term._temperature}`);
    $( "h2" ).text(`Energy usage: ${status}`);
    $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`)
  });

  $( "#reset" ).click(function() {
    term.reset();
    var status = term.checkEnergyUsage();
    console.log(term.returnTemperature());
    $( "h1" ).text(`Current temperature: ${term._temperature}`);
    $( "h2" ).text(`Energy usage: ${status}`);
    $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`)
  });

  $( "#energy" ).click(function() {
    var status = term.checkEnergyUsage();
    $( "h1" ).text(`Current temperature: ${term._temperature}`);
    $( "h2" ).text(`Energy usage: ${status}`);
    $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`)
  });
});
