'use strict';

describe('Thermostat App', function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('increases temperature with up', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21)
  })
});