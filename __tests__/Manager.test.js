const {Manager} = require("../lib/Manager");

test('gets correct role of manager', () => {
    expect(new Manager("Dave", 7, "dave@me.com", "davehubn").getRole()).toBe("Manager");
  });

  test('gets office number', () => {
    expect(new Manager("Dave", 7, "dave@me.com", "555-555-5555").getOfficenumber()).toBe("555-555-5555");
  });