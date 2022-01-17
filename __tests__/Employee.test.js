const {Employee} = require("../lib/Employee");

test('gets correct role of employee', () => {
    expect(new Employee("Alex", 7, "alex@me.com").getRole()).toBe("Employee");
  });