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
    for (let i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.returnTemperature()).toEqual(10);
  });

  it('throws error if already at min temperature', function() {
    for (let i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(function(){ thermostat.down(); }).toThrowError('Minimum temperature reached');
  });

  it('has a power saving mode toggle on by default', function() {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('returns true if PSM is on', function() {
    expect(thermostat.isPSMon()).toBe(true);
  })

  it('toggles PSM', function() {
    thermostat.togglePSM();
    expect(thermostat.isPSMon()).toBe(false);
  })

  it('returns max temp value', function() {
    expect(thermostat.maxTempValue()).toEqual(25);
  })

  it('returns changed max temp value', function() {
    thermostat.togglePSM();
    expect(thermostat.maxTempValue()).toEqual(32);
  })

});