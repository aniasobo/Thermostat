$(document).ready(function() {
  var term = new Thermostat();
  $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`);
  updateCurrentTemperature();
  updateEnergyUsage();
  
  $( "#up" ).click(function() {
    term.up();
    updateCurrentTemperature();
    updateEnergyUsage();
  });

  $( "#down" ).click(function() {
    term.down();
    updateCurrentTemperature();
    updateEnergyUsage();
  });

  $( "#psm" ).click(function() {
    term.togglePSM();
    $("h3").text(`Max temperature allowed: ${term.maxTempValue()}`)
    updateCurrentTemperature();
  });

  $( "#reset" ).click(function() {
    term.reset();
    updateCurrentTemperature();
    updateEnergyUsage();
  });

  $( "#energy" ).click(function() {
    $( "h3" ).text(`Max temperature allowed: ${term.maxTempValue()}`);
    updateCurrentTemperature();
    updateEnergyUsage();
  });

  function updateCurrentTemperature() {
    $("h1").text(`Current temperature: ${term._temperature}`);
  };

  function updateEnergyUsage() {
    var status = term.checkEnergyUsage();
    $("h2").text(`Energy usage: ${status}`);
  };
});
