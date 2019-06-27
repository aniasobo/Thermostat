'use strict';

 describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has default temp of 20 deg", function() {
    expect(thermostat.returnTemperature()).toEqual(20)
  });

  it('has a power saving mode toggle on by default', function() {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('up adds one to current tempretature', function() {
    thermostat.up();
    expect(thermostat.returnTemperature()).toEqual(21)
  });

  it('down decreases temperature by 1', function() {
    thermostat.down();
    expect(thermostat.returnTemperature()).toEqual(19)
  });

  it('has a minimum temperature', function() {
    expect(thermostat.MIN_TEMP).toEqual(10);
  })

  it('returns min temp', function() {
    expect(thermostat.isMinTemp()).toBe(false);
  })

});
