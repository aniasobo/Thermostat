'use strict';

describe('Thermostat App', function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.returnTemperature()).toEqual(20)
  });

  it('increases temperature with up', function() {
    thermostat.up();
    expect(thermostat.returnTemperature()).toEqual(21)
  })

  it('decreases temperature with down', function() {
    thermostat.down();
    expect(thermostat.returnTemperature()).toEqual(19)
  });

  it('has a minimum temperature', function() {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.returnTemperature()).toEqual(10);
  });

  it('throws error if already at min temperature', function() {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(function(){ thermostat.down(); }).toThrowError('Minimum temperature reached');
  });

  it('has a power saving mode toggle on by default', function() {
    expect(thermostat.powerSavingMode).toBe(true);
  });

});