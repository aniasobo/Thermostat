function Thermostat() {
  this.state = 20;
}

Thermostat.prototype.temperature = function() {
  return this.state;
};