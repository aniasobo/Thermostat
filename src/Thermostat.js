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
  this._temperature++;
};

Thermostat.prototype.isMinTemp = function() {
  return this._temperature === this.MIN_TEMP;
}

Thermostat.prototype.down = function() {
  if(this.isMinTemp()) {
    throw new Error("Minimum temperature reached");
  }
  this._temperature--;
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
  if(this._temperature <= 15) {
    return "very-low"
  } else if(this._temperature >= 16 && this._temperature <= 18) {
    return "low"
  } else if(this._temperature === 19 || this._temperature === 20) {
    return "low-to-med"
  } else if(this._temperature === 21 || this._temperature === 22) {
    return "medium"
  } else if(this._temperature === 23 || this._temperature === 24) {
    return "med-to-high"
  } else if(this._temperature === 25 || this._temperature === 26) {
    return "high"
  } else {
  return "super-high"
  }
}