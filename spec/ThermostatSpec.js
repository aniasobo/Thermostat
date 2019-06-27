describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has default temp of 20 deg", function() {
    expect(thermostat.temperature()).toEqual(20);
  });
});
