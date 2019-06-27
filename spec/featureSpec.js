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
});