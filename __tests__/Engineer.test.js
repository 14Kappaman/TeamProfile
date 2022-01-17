const {Engineer} = require("../lib/Engineer");

test('gets correct role of engineer', () => {
    expect(new Engineer("Dave", 7, "dave@me.com", "davehubn").getRole()).toBe("Engineer");
  });


  test('gets Github', () => {
    expect(new Engineer("Dave", 7, "dave@me.com", "davehub").getGithub()).toBe("davehub");
  });
  