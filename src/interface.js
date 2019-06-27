$(document).ready(function() {
  console.log('ready');
  var term = new Thermostat();

  $( "#up" ).click(function() {
    term.up();
    var returnval = term.returnTemperature();
    alert("temp up");
    console.log(returnval);
  });

  $( "#down" ).click(function() {
    term.down();
    returnval = term.returnTemperature();
    alert("temp down");
    console.log(returnval);
  });

  $( "#psm" ).click(function() {
    term.togglePSM();
    alert("psm");
    console.log(term.isPSMon());
  });

  $( "#reset" ).click(function() {
    term.reset();
    alert("reset");
    console.log(term.returnTemperature());
  });

  $( "#energy" ).click(function() {
    var status = term.checkEnergyUsage();
    alert(`${status}`);
  });
});
