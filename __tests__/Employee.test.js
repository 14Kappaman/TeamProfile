const {Employee} = require("../lib/Employee");

test('gets correct role of employee', () => {
    expect(new Employee("Alex", 7, "alex@me.com").getRole()).toBe("Employee");
});

test('gets name correctly', () => {
    expect(new Employee("Alex", 7, "alex@me.com").getName()).toBe("Alex");
  });

  test('gets id', () => {
    expect(new Employee("Alex", 7, "alex@me.com").getId()).toBe(7);
  });

  test('gets email', () => {
    expect(new Employee("Alex", 7, "alex@me.com").getEmail()).toBe("alex@me.com");
  });
