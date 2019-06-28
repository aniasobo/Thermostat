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
    updateEnergyUsage();
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
    $("#digittemp").text(`${term._temperature}`);
  };

  function updateEnergyUsage() {
    var status = term.checkEnergyUsage();
    $("h2").text(`Energy usage: ${status}`);
    $("body").removeClass().addClass(`${status}`);
  };

  function updateMaxTemperature() {
    $("#digimax").text(`${term.maxTempValue()}`);
  }
});
