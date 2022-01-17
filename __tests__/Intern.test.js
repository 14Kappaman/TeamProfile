
const { Intern } = require("../lib/Intern");

test('gets correct role of Intern', () => {
    expect(new Intern("Dave", 7, "dave@me.com", "UAB").getRole()).toBe("Intern");
  });

  test('gets school name correctly', () => {
    expect(new Intern("Alex", 7, "alex@me.com", "UAB").getSchool()).toBe("UAB");
  });