$(document).ready(function() {
  var term = new Thermostat();
  updateCurrentTemperature();
  updateEnergyUsage();
  updateMaxTemperature();
  
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
    updateCurrentTemperature();
    updateMaxTemperature();
  });

  $( "#reset" ).click(function() {
    term.reset();
    updateCurrentTemperature();
    updateEnergyUsage();
  });

  $( "#energy" ).click(function() {
    updateCurrentTemperature();
    updateEnergyUsage();
    updateMaxTemperature();
  });

  function updateCurrentTemperature() {
    $("h1").text(`Current temperature: ${term._temperature}`);
  };

  function updateEnergyUsage() {
    var status = term.checkEnergyUsage();
    $("h2").text(`Energy usage: ${status}`);
  };

  function updateMaxTemperature() {
    $("h3").text(`Max temperature allowed: ${term.maxTempValue()}`);
  }
});
