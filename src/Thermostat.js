'use strict';

function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
}

Thermostat.prototype.returnTemperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  this._temperature += 1;
};

Thermostat.prototype.isMinTemp = function() {
  return this._temperature === this.MIN_TEMP;
}

Thermostat.prototype.down = function() {
  if(this.isMinTemp()) {
    throw new Error("Minimum temperature reached");
  }
  this._temperature -= 1;
  };

  Thermostat.prototype.isPSMon = function() {
    return this.powerSavingMode;
  }

  Thermostat.prototype.togglePSM = function() {
    this.isPSMon() ? this.powerSavingMode = false : this.powerSavingMode = true;
  };

  Thermostat.prototype.maxTempValue = function() {
    return (this.isPSMon() ? 25 : 32);
    };

Thermostat.prototype.reset = function() {
  return this._temperature = 20;
}

Thermostat.prototype.checkEnergyUsage = function() {
  if(this._temperature <= 18) {
    return "Low"
  } else if(this._temperature > 18 && this._temperature < 25) {
    return "Medium"
  } else {
  return "High"
  }
}