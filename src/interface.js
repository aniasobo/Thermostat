$(document).ready(function() {
  var term = new Thermostat();
  var status = term.checkEnergyUsage();
  $( "h2" ).text(`Energy usage: ${status}`);
  $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`);
  updateCurrentTemperature();
  
  $( "#up" ).click(function() {
    term.up();
    status = term.checkEnergyUsage();
    $( "h2" ).text(`Energy usage: ${status}`);
    updateCurrentTemperature();
  });

  $( "#down" ).click(function() {
    term.down();
    status = term.checkEnergyUsage();
    $( "h2" ).text(`Energy usage: ${status}`);
    updateCurrentTemperature();
  });

  $( "#psm" ).click(function() {
    term.togglePSM();
    status = term.checkEnergyUsage();
    $( "h2" ).text(`Energy usage: ${status}`);
    $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`)
    updateCurrentTemperature();
  });

  $( "#reset" ).click(function() {
    term.reset();
    status = term.checkEnergyUsage();
    $( "h2" ).text(`Energy usage: ${status}`);
    updateCurrentTemperature();
  });

  $( "#energy" ).click(function() {
    status = term.checkEnergyUsage();
    $( "h2" ).text(`Energy usage: ${status}`);
    $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`);
    updateCurrentTemperature();
  });

  function updateCurrentTemperature() {
    $("h1").text(`Current temperature: ${term._temperature}`);
  };
});
