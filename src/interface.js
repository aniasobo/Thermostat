$(document).ready(function() {
  console.log('ready');
  var term = new Thermostat();
  $( "h1" ).text(term._temperature);
  
  $( "#up" ).click(function() {
    term.up();
    var returnval = term.returnTemperature();
    alert("temp up");
    console.log(returnval);
    $( "h1" ).text(term._temperature);
  });

  $( "#down" ).click(function() {
    term.down();
    returnval = term.returnTemperature();
    alert("temp down");
    console.log(returnval);
    $( "h1" ).text(term._temperature);
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
